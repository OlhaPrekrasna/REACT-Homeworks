const initialState = {
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Charlie' },
      { id: 3, name: 'David' },
    ],
    filter: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  