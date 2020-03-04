const initialValue = {
  dataOrders: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  detailOrders: [],
};

const ordersReducer = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_ORDERS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ORDERS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'GET_ORDERS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        dataOrders: action.payload.data.result,
      };
    case 'DETAIL_ORDERS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DETAIL_ORDERS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'DETAIL_ORDERS_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailOrders: action.payload.data.result,
      };

    default:
      return state;
  }
};

export default ordersReducer;
