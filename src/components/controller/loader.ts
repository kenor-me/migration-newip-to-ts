/* eslint-disable no-console */
import { CallbackType, OptionalInterface } from '../types';

class Loader {
  public baseLink: string;

  public options: Record<string, unknown>;

  constructor(baseLink: string, options: OptionalInterface) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<Data>(
    { endpoint, options = {} }: { endpoint: string; options?: Record<string, unknown> },
    callback: CallbackType<Data> = (): void => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Record<string, unknown>, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string): void => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load<Data>(method: string, endpoint: string, callback: CallbackType<Data>, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response): Promise<Data> => res.json())
      .then((data: Data): void => callback(data))
      .catch((err: string): void => console.error(err));
  }
}

export default Loader;
