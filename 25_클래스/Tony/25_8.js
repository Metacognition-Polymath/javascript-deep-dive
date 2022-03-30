{
  class Animal {
    constructor(age, weight) {
      this.age = age;
      this.weight = weight;
    }

    eat() {
      return "eat";
    }

    move() {
      return "move";
    }
  }

  class Bird extends Animal {
    fly() {
      return "fly";
    }
    live() {
      return this.eat() + this.move();
    }
  }

  const bird = new Bird(1, 5);
  console.log(bird instanceof Bird); // true
  console.log(bird instanceof Animal); // true

  console.log(bird.move());
  console.log(bird.live());
}
