/*class Player{
    public Name : string;
    public Position: string;
    public Selection: string;

    constructor(
        name: string, 
        pos: string, 
        sel: string){
            this.Name = name;
            this.Position = pos;
            this.Selection = sel;
        }
        
}

let a : boolean = true;
let b : string = "";
let c : number = 34;
let d : any = 23;
d = "";
let e : Array<number> = [2,3];
let f : any[] = [2,"", true];
enum Day { Sunday = 1, Monday = 2,Tuesday = 3};
enum Sex { Masculino = 1, Femenino = 2 };
let path : string[] | string | number;
path = "Hello world";
path = ["one", "two"];
path = 2;
let x : any = {};
let n : any = "Henry Ruiz";
(n as string).length;

let player = new Player("Noah", "Delantero", "Colombia");
console.log(player.Name);

function suma(i: number): number {
    return i + i;
};*/


class Animal {
  protected name: string;
  protected sex: string;
  protected type: string;

  constructor (name: string, sex: string, type: string){
    this.name = name;
    this.sex = sex;
    this.type = type;
  }
}

class Perro extends Animal {
  nick: string;
  constructor (name: string, sex: string, type: string, nick: string) {
    super(name, sex, type);
    this.nick = nick;
  }
}

class Gato extends Animal {
  nick: string;
  lifes: number;
  constructor (name: string, sex: string, type: string, nick: string, lifes: number = 7) {
    super(name, sex, type);
    this.nick = nick;
    this.lifes = lifes;
  }
}
 
let animals : Animal[]=  [];

animals.push(new Perro("Perro", "F", "Mamifero", "susi"));
animals.push(new Perro("Perro", "F", "Mamifero", "canela"));
animals.push(new Perro("Perro", "F", "Mamifero", "candy"));
animals.push(new Gato("Gato", "M", "Mamifero", "Garfield", 12));
animals.push(new Gato("Gato", "F", "Mamifero", "Misifus"));

console.log(animals.length);

animals.forEach((a: Animal, index: number)=>{
  if(a instanceof Gato){
      var gato : Gato = <Gato> a; 
  }
});