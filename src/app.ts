interface SizesInterFace {
  availableSizes: string[]
}


abstract class Sizes implements SizesInterFace {
  constructor(protected sizes: string[]) { }
  
  set availableSizes(val : string[]) {
    this.sizes = val;
  }

  get availableSizes() : string[] {
    return this.sizes;
  }
  
}

interface PizzaInterface {
  toppings: string[];
  readonly name: string;
  updateSize(sizes: string[]): void;
  addToppings(toppingName: string): void;
}
class Pizza extends Sizes implements PizzaInterface {
  toppings: string[] = [];
  constructor(
    readonly name: string,
    sizes: string[]) {
      super(sizes);
  }

  updateSize(newSizes: string[]) {
    this.sizes = newSizes;
  }

  addToppings(val: string) {
    this.toppings.push(val);
  }
}

const pizza = new Pizza('Veggie', ['sm', 'md']);
pizza.addToppings('Black Olive');




