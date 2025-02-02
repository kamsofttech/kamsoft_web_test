import { TOGGLE_CHATBOT } from './chatbotAction';

const initialState = {
  isOpen: false, // Default state is chatbot closed
};

export const chatbotReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CHATBOT:
      return {
        ...state,
        isOpen: !state.isOpen, // Toggle the chatbot visibility
      };
    default:
      return state;
  }
};
