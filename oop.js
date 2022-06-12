class Smartphone {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    call() {
        console.log("Calling...");
    }

    record() {
        console.log("Recording...");
    }
}

class Iphone extends Smartphone {
    //thuộc tính
    //-> Cách thêm thuộc tính

    #system = "macos";

    constructor(name, price, faceId){
        super(name, price);

        this.faceId = faceId;
    }

    static capture() {
        console.log("Capture...");
    }
    //phương thức
    //tính chất đóng gói, thêm dấu # sẽ chỉ sử dụng phương thức trong class, ko đc sử dụng bên ngoài
    #useLightning() {}

    record() {
        super.record();
        console.log(this.#system);
        console.log("Iphone is recording...");
    }
}

class Samsung extends Smartphone {
    useTypeC() {
        console.log("Use lightning");
    }
}

const iphone = new Iphone("Iphone 7", 30000, "v2");
const samsung = new Samsung("Samsung Note ", 5000);

// iphone.call();
// samsung.call();

// console.log(iphone);
// console.log(samsung);

class Animals {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    findFood() {}

    eat() {
        const food = this.findFood();

        console.log(food);
        console.log("Eating...");
    }
}

class Tiger extends Animals {
    findFood(){
        //đi săn

        return "Thịt";
    }
}

class Cat extends Animals {
    findFood(){
        //đi xin ăn

        return "Cá";
    }
}

const tiger = new Tiger("A", "red");
const cat = new Cat("B", "green");

//Tính đa hình: Trong 
class Component {
    render() {
        throw new Error("")
    }
}

class HeaderComponent extends Component {
    render() {
        return "<p>Header component</p>";
    }
}

class FooterComponent extends Component {
    render(){
        return "<p>Footer component</p>";

    }
}




