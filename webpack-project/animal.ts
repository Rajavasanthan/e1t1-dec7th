import { AnimalType } from "./model";

export abstract class Animal {
     name: string;
     type: string;
     constructor(animalName:string,animalType:AnimalType){
          this.name = animalName;
          this.type = animalType;
          let animalImg = document.createElement('img');
          animalImg.setAttribute(`src`,`assets/${this.type}.png`);
          animalImg.onclick = this.displayName();
          document.body.appendChild(animalImg);
     }

     displayName():() => void{
          return () => {
               alert(`I am ${this.type} My Name is ${this.name}`)
          }
     }

     makeSound() {
          console.log('Make Sound')
     }
}