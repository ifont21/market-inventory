export const types = {
  CLEAN: "CLEAN",
  FOOD: "FOOD",
  BEAUTY: "BEAUTY"
};

export const products = [
  {
    id: 1,
    name: "Eggs",
    img:
      "https://cdn.shopify.com/s/files/1/0018/8327/5325/products/egg-country.png?v=1575912043",
    registeredBrands: ["Santa Anita"],
    existence: 1,
    type: types.FOOD
  },
  {
    id: 2,
    name: "Milk",
    img: "https://www.ootb.de/files/product_images/101586.png",
    registeredBrands: ["Alqueria"],
    existence: 1,
    type: types.FOOD
  },
  {
    id: 3,
    name: "Bread",
    img: "https://prominpku.com/wp-content/uploads/2018/05/Brown-Bread-1.png",
    registeredBrands: ["Bimbo", "Exito"],
    existence: 1,
    type: types.FOOD
  },
  {
    id: 4,
    name: "Soap",
    img:
      "https://cdn.shopify.com/s/files/1/0223/7461/products/B18BAR-SUN-2_600x.png?v=1572278105",
    registeredBrands: [],
    existence: 0,
    type: types.CLEAN
  }
];
