class Sizes {
  constructor(private sizes: string[]) { }
  
  set avialbleSizes(val : string[]) {
    this.sizes = val;
  }

  get availableSizes() : string[] {
    return this.sizes;
  }
  
}

class Pizza extends Sizes {
  toppings: string[] = [];
  constructor(
    readonly name: string,
    sizes: string[]) {
      super(sizes);
  }

  addToppings(val: string) {
    this.toppings.push(val);
  }
}

const pizza = new Pizza('Veggie', ['sm', 'md']);
pizza.addToppings('Black Olive');
console.log(pizza);
