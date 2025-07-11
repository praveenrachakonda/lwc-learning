import { LightningElement } from 'lwc';

export default class lifecycleLoggerParent extends LightningElement {
    constructor() {
        super();
        console.log('Parent: constructor');
    }

    connectedCallback() {
        console.log('Parent: connectedCallback');
    }

    renderedCallback() {
        console.log('Parent: renderedCallback');
    }

    disconnectedCallback() {
        console.log('Parent: disconnectedCallback');
    }
}