class Food {
  constructor(
    id,
    name,
    price,
    type,
    discountPercent,
    status,
    imageUrl,
    description
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.type = type;
    this.discountPercent = discountPercent;
    this.status = status;
    this.imageUrl = imageUrl;
    this.description = description;
    this.discountPrice = this.getDiscountPrice();
  }

  getDiscountPrice() {
    return (this.price * (100 - this.discountPercent)) / 100;
  }

  mappingType() {
    return this.type === "loai1" ? "Chay" : "Mặn";
  }

  mappingStatus() {
    return this.status === "0" ? "Hết" : "Còn";
  }
}
