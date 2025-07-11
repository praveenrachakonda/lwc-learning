import { LightningElement } from 'lwc';

export default class MagicBoxGame extends LightningElement {
    boxSize = 100;

    changeColor() {
        const box = this.template.querySelector('.box');
        box.style.backgroundColor = this.getRandomColor();
    }

    growBox() {
        this.boxSize += 20;
        const box = this.template.querySelector('.box');
        box.style.width = `${this.boxSize}px`;
        box.style.height = `${this.boxSize}px`;
    }

    hideBox() {
        const box = this.template.querySelector('.box');
        box.style.display = 'none';
    }

    getRandomColor() {
        const colors = ['lightblue', 'lightgreen', 'yellow', 'orange', 'pink', 'purple'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    reset(){
        const box = this.template.querySelector('.box');
        box.style.width = `${this.boxSize}px`;
        box.style.height = `${this.boxSize}px`;
        box.style.backgroundColor = 'lightblue';
        box.style.display = 'block'; 
    }
    slider(event){
        this.boxSize = event.detail.value;
        const box = this.template.querySelector('.box');
        box.style.width = `${this.boxSize}px`;
        box.style.height = `${this.boxSize}px`;
    }
}
