
class Animal {
  constructor (name, dob = new Date()) {
    this.name = name
    this.dob = new Date(dob)
  }
  setName (newName) {
    this.name = newName
  }
  getDateOfBirth () {
    return this.dob.toDateString()
  }
  getAge () {
    let currentYear = new Date().getFullYear()
    let birthYear = this.dob.getFullYear()
    return currentYear - birthYear
  }
  toString () {
    console.log(`This Animal name is ${this.name} and is ${this.getAge()} years old.`)
  }
}

// For each species create at least one other method (in addition to the things directly above)
// For example, parrots can speak, lions can roar, otters can swim, etc...

class Reptile extends Animal {
  constructor (name, dob, scienceName = 'unknow science name') {
    super(name, dob)
    scienceName = this.scienceName
  }
  static getScienceName () {
    return this.scienceName
  }
  getBaby (name) {
    return new Reptile(name)
  }
  feedMe (food) {
    if (food === 'meat') return true
    if (food === 'veggies') return false
  }
}

class Amphibian extends Animal {
  constructor (name, dob, scienceName = 'unknow science name') {
    super(name, dob)
    scienceName = this.scienceName
  }
  static getScienceName () {
    return this.scienceName
  }
  getEggs (arrNames) {
    this.babysNum = arrNames.length
    let eggsArr = []
    arrNames.forEach((name) => {
      eggsArr.push(new Amphibian(name))
    })
    return eggsArr
  }
  howManyBabys () {
    if (this.hasOwnProperty('babysNum')) return this.babysNum
  }
}

let chameleon = new Reptile('django', '12/14/1985')
let chameleonBaby = chameleon.getBaby('djangoBabyBoy')

let gecko = new Amphibian()
let eggs = gecko.getEggs(['gecky', 'geckin', 'geckito'])

// All species must re-implement the toString() method to print out what species it is
