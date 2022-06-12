// import default
// import DSMonAn from "../../models/v2/food-list.js";

// import không default
import { FoodList } from "../../models/v2/food-list.js";
import { Food } from "../../models/v2/food.js";

const service = new FoodList();

const getEle = (id) => document.getElementById(id);

const renderFoodList = () => {
  const content = service.filterFoodList().reduce((total, food) => {
    total += `
        <tr>
            <td>${food.id}</td>
            <td>${food.name}</td>
            <td>${food.mappingType()}</td>
            <td>${food.price}</td>
            <td>${food.discountPercent}</td>
            <td>${food.discountPrice}</td>
            <td>${food.mappingStatus()}</td>
            <td>
                <button class="btn btn-warning" data-toggle="modal"
                data-target="#exampleModal" onclick="editFood('${food.id}')">EDIT</button>
                <button class="btn btn-light" onclick="removeFood('${food.id}')">REMOVE</button>
            </td>
        </tr>
    `;

    return total;
  }, "");

  getEle("tbodyFood").innerHTML = content;
};


const setLocalStorage = () => {
  const stringify = JSON.stringify(service.foodList);

  localStorage.setItem("FOOD_LIST", stringify);
}

const getLocalStorage = () => {
  const stringify = localStorage.getItem("FOOD_LIST");

  if (stringify) {
    service.foodList = JSON.parse(stringify);
  } else {
    service.foodList = [];
  }

  service.foodList = service.foodList.map((ele) => {
    const {
      id,
      name,
      price,
      type,
      discountPercent,
      status,
      imageUrl,
      description
    } = ele;

    return new Food (
      id,
      name,
      price,
      type,
      discountPercent,
      status,
      imageUrl,
      description
    );
  });

  renderFoodList();

  //hoặc sử dụng toán tử 3 ngôi
  // service.foodList = stringify ? JSON.parse(stringify) : null;
}

getLocalStorage();

const getFormValue = () => {
  const foodId = getEle("foodID").value;
  const tenMon = getEle("tenMon").value;
  const loai = getEle("loai").value;
  const giaMon = getEle("giaMon").value;
  const khuyenMai = getEle("khuyenMai").value;
  const tinhTrang = getEle("tinhTrang").value;
  const hinhMon = getEle("hinhMon").value;
  const moTa = getEle("moTa").value;

  const food = new Food(
    foodId,
    tenMon,
    giaMon,
    loai,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa
  );

  return food;
}

getEle("btnThemMon").onclick = () => {
  const food = getFormValue();

  service.addFood(food);

  renderFoodList();

  setLocalStorage();
};



window.removeFood = (id) => {
  service.removeFood(id);

  renderFoodList();

  setLocalStorage();
};

window.editFood = (id) => {
  getEle("exampleModalLabel").innerHTML = "Sửa món ăn";
  getEle("btnThemMon").style.display = "none";

  const existedFood = service.findFood(id);

  getEle("foodID").value = existedFood.id;
  getEle("tenMon").value = existedFood.name;
  getEle("loai").value = existedFood.type;
  getEle("giaMon").value = existedFood.price;
  getEle("khuyenMai").value = existedFood.discountPercent;
  getEle("tinhTrang").value = existedFood.status;
  getEle("hinhMon").value = existedFood.imageUrl;
  getEle("moTa").value = existedFood.description;
}

getEle("btnThem").onclick = () => {
  getEle("exampleModalLabel").innerHTML = "Thêm món ăn";
  getEle("btnThemMon").style.display = "block";
  getEle("btnCapNhat").style.display = "none";

  getEle("foodID").value = "";
  getEle("tenMon").value = "";
  getEle("loai").value = "";
  getEle("giaMon").value = "";
  getEle("khuyenMai").value = "";
  getEle("tinhTrang").value = "";
  getEle("hinhMon").value = "";
  getEle("moTa").value = "";
}

getEle("btnCapNhat").onclick = () => {
  const food = getFormValue();

  service.updateFood(food);

  renderFoodList();

  getEle("close-button").click();
};

getEle("selLoai").onchange = () => {
  const value = getEle("selLoai").value;

  service.selectedType = value;

  renderFoodList();
}