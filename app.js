
// Part 1Humble Beginnings
console.log("-------------------Part 1------------------------------");
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion :{
            name: "Frank",
            type: "Flea", 
            proberty: ["hat", "sunglasses"] ,
        },
        
         roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`)
            }

    }
}
adventurer.inventory.forEach((each) => 
    console.log(each));


//Iterate through in each object
Object.keys(adventurer).forEach(each =>
{
    const value = adventurer[each];
    console.log(`${each} : ${value}`);
}

)

console.log("--------------Part 2---------------------");
//part 2 Class Fantasy

class Character {
    static MAX_HEALTH = 100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
      
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
  }

const robin = new Character("Robin");
console.log(Character.MAX_HEALTH);

console.log("-------------------------part 3--------------------------")

//part 3 Class Features

class Adventurer extends Character {
    static Roles = ["Fighter","Healer","Adventrue"]
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
      rolecheck()
      {  
      if(this.role === "Fighter" || this.role === "Healer" || this.role == "Adventure")
      {
         console.log(`${this.role} is your role`)
      }
      else
      {
       console.log("Role does not match");
      }
    }
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }
const c = new Adventurer("nalini","Fighter");
c.scout();
c.rolecheck();


class Companion extends Adventurer{
    constructor (name,type) {
      super(name,type);
      
    }
    wel()
    {
        console.log(`${this.name} is the player`);
    }
}

console.log("-------------------------part 4--------------------------")

const newrobin    = new Companion("robin","Leo");
newrobin.wel();

//part 4 : 