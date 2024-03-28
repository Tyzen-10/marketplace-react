import {takeEvery,call,put} from 'redux-saga/effects'
import { GET_PRODUCTS_FETCH,GET_PRODUCTS_SUCCESS } from './actions'
function productsFetch(){
    // return fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json())
    return fetch('https://dummyjson.com/products?limit=100').then(response=>response.json())
}
function* workGetPostsFetch(){
    const products = yield call(productsFetch);
    //temp debug
    console.log("saga running")
    yield put({type:GET_PRODUCTS_SUCCESS,products:products.products})
}
function* mySaga(){
    yield takeEvery(GET_PRODUCTS_FETCH, workGetPostsFetch)
}
export default mySaga