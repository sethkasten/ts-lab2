import { getOriginalNode } from "typescript";

export class Player {
  name: string;
  jersey: number;
  constructor(name: string, jersey: number) {
    this.name = name;
    this.jersey = jersey;
  }
}

class TeamPlayer extends Player {
  team: string;
  constructor(name: string, jersey: number, team: string) {
    super(name, jersey);
    this.team = team;
  }
}

export class Timer {
  name: string;
  time: number = 0;
  constructor(name: string) {
    this.name = name;
  }
}

class Bike {
  speed: number = 0;
  constructor() {}
  go(): void {
    this.speed++;
  }
}

class GearedBike extends Bike {
  gear: number = 1;
  shiftUp() {
    this.gear++;
  }
  shiftDown() {
    this.gear--;
  }
}

let myBike = new GearedBike();
myBike.go();
myBike.shiftUp();
// console.log(myBike);
