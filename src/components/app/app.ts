import AppController from '../controller/controller';
import { NewsData, SourcesData } from '../types';
import { AppView } from '../view/appView';
import { Theme } from '../theme/theme';

class App {
  public controller: AppController;

  public view: AppView;

  public theme: Theme;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.theme = new Theme();
  }

  start(): void {
    (document
      .querySelector('.sources') as HTMLElement)
      .addEventListener('click', (e: Event): void => this.controller.getNews(e, (data: Required<NewsData>) => {
        this.view.drawNews(data);
      }));
    this.controller.getSources((data: Required<SourcesData>): void => this.view.drawSources(data));
    this.theme.draw();
  }
}

export default App;
