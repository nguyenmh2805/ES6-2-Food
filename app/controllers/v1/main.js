const getEle = (id) => document.getElementById(id);

getEle("btnThemMon").onclick = () => {
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

  getEle("imgMonAn").innerHTML = food.imageUrl;
  getEle("spMa").innerHTML = food.id;
  getEle("spTenMon").innerHTML = food.name;
  getEle("spLoaiMon").innerHTML = food.mappingType();
  getEle("spGia").innerHTML = food.price;
  getEle("spKM").innerHTML = food.discountPercent;
  getEle("spGiaKM").innerHTML = food.discountPrice;
  getEle("spTT").innerHTML = food.mappingStatus();
  getEle("pMoTa").innerHTML = food.description;
};
