import * as types from "./actionTypes";

export function setOpen(open){
    return (dispatch) =>{
        if(open){
            dispatch({type: types.SIDE_NAV_OPEN});
        }else{
            dispatch({type: types.SIDE_NAV_CLOSE});
        }

    };
}