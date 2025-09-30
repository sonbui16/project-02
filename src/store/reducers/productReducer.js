const initState = {
    list: []
}

const productReducer = (state = initState, action) => {
    console.log("12",state, action);
    
    switch (action.type) {
        case "product::set-list":

            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}
export default productReducer