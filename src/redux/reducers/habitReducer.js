const habitReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case 'SET_HABITS':
            return payload;
        default:
            return state;
    }
}

export default habitReducer;