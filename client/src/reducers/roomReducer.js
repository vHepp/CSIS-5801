export const RoomInitialState = null;
export const RoomReducer = (state, action) => {
    if (action.type === "ROOM") {
        
        return action.payload
    }
    if (action.type === "CLEAR") {
        return null
    }

    return state
} 