export default (state = null, action) => {  // initial state will be undefined, so force null
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
