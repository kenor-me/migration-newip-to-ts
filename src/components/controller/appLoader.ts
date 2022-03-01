import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'af2009b2d015486d84ca91b797c9ff78', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
