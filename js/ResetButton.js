import { UI } from './UI.js';

export class ResetButton extends UI {
    element = this.getElement(this.UiSelectors.resetButton);

    changeEmetion(emotion) {
        this.element.querySelector('use').setAttribute('href', `images/sprite.svg#${emotion}`);
    }
}