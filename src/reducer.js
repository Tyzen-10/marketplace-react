import { GET_PRODUCTS_SUCCESS, ADD_TO_CART, UPDATE_QUANTITY } from "./actions";

const myFirstReducer = (state = { products: [], items: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.products };
    //
    case ADD_TO_CART: {
      const { id, products } = action.payload;
      const product = products.find((item) => item.id === id);

      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      const existingCartItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingCartItem) {
        // If item already exists in cart, update quantity
        updatedItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If item doesn't exist in cart, add it
        updatedItems = [
          ...state.items,
          {
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.images[0],
            quantity: 1,
          },
        ];
      }

      return { ...state, items: updatedItems };
    }
    //
    case UPDATE_QUANTITY: {
      const { id, change } = action.payload;
      const existingCart = [...state.items];
      const existingItemIndex = state.items.findIndex((item) => item.id == id);
      //updating the quantity property.
      const existingCartItem = existingCart[existingItemIndex];
      const updatedItem = {
        ...existingCartItem,
      };
      updatedItem.quantity += change;
      //now check if updatedItem.quantity is 0 or less
      if (updatedItem.quantity <= 0) {
        //1
        existingCart.splice(existingItemIndex, 1);
      } else {
        //2
        existingCart[existingItemIndex] = updatedItem;
      }
      return { ...state, items: existingCart };
    }
    default:
      return state;
  }
};
export default myFirstReducer;
