import { legacy_createStore } from "redux";
import { loadState } from './localstorage';
const persistedState = loadState();

const initialStore = {
    cart: [],
    amount: 0,
    total: 0,
  }
  
function reducer(state = initialStore, action) {
    if (action.type === 'ADD_ITEM') {
        if(state.cart.length > 0){
            const check = state.cart.every(ele => ele.id !== action.payload.id)
            if(!check){
                console.log(check);
                return state
            }else{
                return {...state ,cart: state.cart.concat(action.payload)}
            }
        }else{
            return {...state ,cart: state.cart.concat(action.payload)}
        }
    }
    if (action.type === 'DECREASE') {
        return {
        ...state, cart: state.cart.map((item) => {
            if (item.id === action.payload) {
                if (item.amount === 0) {
                    return item;
                } else {
                    item.amount--;
                }
            }
            return item;
        })
        }
    }
    if (action.type === 'INCREASE') {
            return {...state, cart: state.cart.map((item) => {
                if (item.id === action.payload) {
                item.amount++;
                }
                return item;
            })
        }
    }
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] };
    }
    if (action.type === 'REMOVE') {
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)}
    }
    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        cartTotal.amount += amount;
        cartTotal.total += Math.floor(amount * price);
        return cartTotal;
        }, { amount: 0, total: 0 });
        return { ...state, total, amount };
    }
    return state;
}


export const store = legacy_createStore(reducer, persistedState);

