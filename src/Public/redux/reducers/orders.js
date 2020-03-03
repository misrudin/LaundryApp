const initialValue = {
  data: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  detail: [],
};

const ordersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_DATA_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_DATA_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_DATA_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        data: action.payload.data.result,
      };
    case 'DETAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DETAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'DETAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detail: action.payload.data.result,
      };

    default:
      return state;
  }
};

export default ordersReducer;
