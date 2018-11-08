// const pizza = {
//   name: "Pepperoni",
//   toppings: ["olive", "onion"]
// };

// let coupon: string | null = "hbjjg";
// function removeCoupon(): void {
//   coupon = null;
// }
//

class Pizza {
  constructor(private name: string, private price: number) {}
}

class List<T> {
  private list: T[];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const list = new List<Pizza>();
list.addItem(new Pizza("Peeperoni", 15));
list.addItem(new Pizza("Peeperoni", 15));
const pizzas = list.getList();
console.log('11',pizzas);

class Coupon {
  constructor(coupon: string) {}
}
const anotherList = new List<Coupon>();
anotherList.addItem(new Coupon('PIZZA25'));
const dd = anotherList.getList();
console.log('22',dd);