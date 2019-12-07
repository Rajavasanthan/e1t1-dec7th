type Direction = 'LEFT' | 'RIGHT' | 'FORWARD' | 'BACK';
type Places = 'Chennai' | 'Madurai';

interface LocationData {
     time?: string,
     lat: number,
     long: number,
     place: Places
}

class Machine {
     name;
     model;
     brand;
     color;


}


class Car extends Machine {

     constructor(){
          super();
     }

     start() {

     }

     stop() {

     }

     move(direction: Direction) {
          console.log(`I am moving in ${direction} direction`);
     }

     location(location: LocationData[]) {
          location.forEach((ele) => {
               console.log(ele)
          })
     }
}

class Bus extends Machine {

}

let myAudi = new Car();
let myBus = new Bus();

myAudi.move('RIGHT');
myAudi.location([{
     time: 'Morning',
     lat: 4,
     long: 4,
     place: 'Chennai'
},
{
     lat: 4,
     long: 4,
     place: 'Madurai'
}]);