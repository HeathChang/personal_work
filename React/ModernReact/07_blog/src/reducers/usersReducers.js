export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]
        // return data를 할때, always need to be new Value => redux가 change 되었는지 확인하기 위해 
        // 안하면, redux가 change되었는지 파악하지 못한다. 
        default:
            return state;
    }

}