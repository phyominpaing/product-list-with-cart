import products from "../data/data.json";
const { create } = require("zustand");

const useProductStore = create(() => ({
  products,
}));

export default useProductStore;
