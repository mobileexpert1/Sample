

const initState = {
    cartItemsCount :0
  };
  export default function cartItems(state = initState, action){
    switch (action.type) {
        case "ADD_ITEM":
            // let array=state.cartItems;
            // array.push(action.payload);
            return {cartItemsCount:action.payload}
        case "REMOVE_ITEM":
          return { loading: false, response: action.payload, error: null };

        default:
          return state;
      }

  }