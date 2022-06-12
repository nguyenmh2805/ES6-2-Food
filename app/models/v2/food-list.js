// export default class FoodList {
export class FoodList {
  foodList = [];
  selectedType = "all";

  addFood(food) {
    // ES5
    // this.foodList.push(food);

    // ES6
    this.foodList = [...this.foodList, food];
  }

  removeFood(id) {
    this.foodList = this.foodList.filter((ele) => ele.id !== id);
  }

  updateFood(food) {
    this.foodList.map(ele => {
      if (ele.id === food.id){
        return food;
      }

      return ele;
    });

    //toán tử 3 ngôi

  }

  findFood(id) {
    return this.foodList.find(ele => ele.id === id);
  }

  filterFoodList() {
   return this.foodList.filter(ele => {
      if(this.selectedType === "all") {
        return true;
      }

      if(this.selectedType === ele.type) {
        return true;
      }

      return false;
    });
  }
}

// export class Dog {}

// 1: default:
// + thì khi import có thể đối tên
// + export 1 thành phần duy nhất
// 2: không default
// + thì khi import phải sử dụng đúng tên và có dấu {}
// + export ra nhiều thành phần
