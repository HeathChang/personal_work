export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload

        default:
            return state;
    }
}

//1st arg (state) returned from the same reducer th last time it ran 