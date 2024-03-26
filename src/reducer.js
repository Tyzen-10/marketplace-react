import { GET_PRODUCTS_SUCCESS } from "./actions"

const myFirstReducer = (state={products:[]},action)=>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {...state , products: action.products}
        // case DELETE_POST:
        //     return {...state, posts: state.posts.filter((post)=>post.id!==action.postId)}
        default:
            return state
    }
}
export default myFirstReducer