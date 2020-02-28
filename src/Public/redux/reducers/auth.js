const initialValue = {
  userData: [],
  token: '',
  isLoading: false,
  isSignOut: false,
  isLogin: false,
};

const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        userData: state.userData + action.payload,
      };

    case 'SIGN_IN':
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        isLogin: true,
      };

    case 'SIGN_OUT':
      return {
        token: null,
        isSignOut: true,
      };

    default:
      return {
        state,
        isLoading: true,
      };
  }
};

export default authReducer;
