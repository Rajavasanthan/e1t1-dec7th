import { Animal } from "./animal";
import { AnimalType} from "./model"

export class Cat extends Animal {
     constructor(catName:string){
          super(catName,AnimalType.CAT);
     }
}