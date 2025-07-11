import { LightningElement } from 'lwc';

export default class LifecycleLoggerChild extends LightningElement {
    constructor() {
        super();
        console.log('Child: constructor');
    }

    connectedCallback() {
        console.log('Child: connectedCallback');
    }

    renderedCallback() {
        console.log('Child: renderedCallback');
    }

    disconnectedCallback() {
        console.log('Child: disconnectedCallback');
    }
}