const initialState = {
    photos: [],
    bool: false,
    auth: false
}

const rootReducer = (state = initialState, option) => {
    switch (option.type) {
        case 'GET_PHOTO':
        const pho = option.payload;
        const mitad = parseInt(option.payload.length / 2);
        console.log(parseInt(mitad))

        const arr = []
        for(var i = 0; i < mitad; i++){
            arr.push(pho[i])
        }

        
        console.log(arr)
        const arr2 = []
        for(var i = mitad; i < pho.length; i++){
            arr2.push(pho[i])
        }
        console.log(arr2)
        const arr3 = []
         arr3.push(arr,arr2)
            return{
                ...state,
                photos: arr3
            }
        case 'ADD_PHOTO':
            return{
                ...state,
                bool: option.payload
            }
        case 'AUTH_USER':
            return{
                ...state,
                auth: option.payload
            }    
    
        default:
            return state
    }
}

export default rootReducer;