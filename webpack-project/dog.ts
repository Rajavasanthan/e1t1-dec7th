import { Animal } from "./animal";
import { AnimalType } from "./model" 
export class Dog extends Animal{
     constructor(dogName:string){
          super(dogName,AnimalType.DOG);
     }
}