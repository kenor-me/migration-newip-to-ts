import AppController from '../controller/controller';
import { NewsData, SourcesData } from '../types';
import { AppView } from '../view/appView';

class App {
  public controller: AppController;

  public view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    (document
      .querySelector('.sources') as HTMLElement)
      .addEventListener('click', (e: Event): void => this.controller.getNews(e, (data: Required<NewsData>) => {
        this.view.drawNews(data);
      }));
    this.controller.getSources((data: Required<SourcesData>): void => this.view.drawSources(data));
  }
}

export default App;
