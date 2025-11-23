const { create } = require("zustand");

const useCartStore = create((set) => ({
  items: [],

  addToCart: (newItem) =>
    set((state) => ({ items: [...state.items, newItem] })),

  removeFromCart: (itemName) =>
    set((state) => ({
      items: state.items.filter((item) => item.name !== itemName),
    })),

  updateQuantity: (name, amount) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + amount }
          : item
      ),
    })),
  //   clearCart: () => set({ items: [] }),
}));

export default useCartStore;
