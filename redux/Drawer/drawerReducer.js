// drawerReducer.js

const initialState = {
  open: false, // Initial state for the drawer
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return {
        ...state,
        open: true, // Set open to true
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        open: false, // Set open to false
      };
    case "TOGGLE_DRAWER":
      return {
        ...state,
        open: !state.open, // Toggle the drawer state
      };
    default:
      return state;
  }
};

export default drawerReducer;
