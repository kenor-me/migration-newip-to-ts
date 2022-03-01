import { Articles } from '../../types';
import './sources.css';

class Sources {
  draw(data: Array<Articles>): void {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item: Articles): void => {
      const sourceClone: HTMLTemplateElement = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;

      (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;
