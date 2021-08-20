import axios from 'axios';

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false,
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA';
const ADD_PURCHASE = 'ADD_PURCHASE';

export const addPurchase = () => {
  axios.post('/api/budget-data/purchase').then(res => res.data)
  return {
    type: ADD_PURCHASE,
    payload: 
  }
}

export const requestBudgetData = () => {
  const data = axios.get('/api/budget-data').then(res => res.data)
  return {
    type: REQUEST_BUDGET_DATA,
    payload: data,
  }
}

export default function budgetReducer(state = initialState, action) {
  switch(action.type){
    case REQUEST_BUDGET_DATA + '_PENDING':
    return {
      ...state,
      loading: true
    }
    case REQUEST_BUDGET_DATA + '_FULFILLED':
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    default: 
      return state;
  }

}