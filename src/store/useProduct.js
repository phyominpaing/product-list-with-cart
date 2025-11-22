import products from "../data/data.json";
const { create } = require("zustand");

const useProduct = create(() => ({
  products,

}));


export default useProduct;