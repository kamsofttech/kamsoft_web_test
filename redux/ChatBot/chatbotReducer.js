const initialState = {
  messageId: null,  // Initially, no message ID is stored
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MESSAGE_ID":
      return {
        ...state,
        messageId: action.payload,  // Store the message.id value
      };
    default:
      return state;
  }
};

export default chatReducer;
