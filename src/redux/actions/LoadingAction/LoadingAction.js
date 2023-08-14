import { HIDE_LOADING, SHOW_LOADING } from "../../types/Loading"

export const showLoadingAction = () => {
    return dispatch => {
        dispatch({ type: SHOW_LOADING })
    }
}

export const hideLoadingAction = () => {
    return dispatch => {
        dispatch({ type: HIDE_LOADING })
    }
}