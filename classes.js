class animal {
    constructor(species) {
        this.species = species 
        this.bark = 'woof'
    }
    speak(bark) {
        console.log(bark)
        
    }
    setName(name) {
        this.name = name
    }
     getColor() {
        this.color = 'white';
        return this.color
      }

}

let dog = new animal('canine')
dog.speak('woof')
dog.setName('foobar')
dog.getColor('white')

console.log(dog)