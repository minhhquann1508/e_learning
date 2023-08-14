import { ADD_NEW_COURSE, CHANG_ADMIN_TAB, DELETED_COURSE, DELETED_USER, GET_COURSE_BY_ID, GET_COURSE_BY_PAGE, GET_USER_BY_PAGE } from "../../types/Admin"

const initialState = {
    selectedTab: '',
    userByPage: null,
    courseByPage: null,
    course: null
}

export const AdminTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANG_ADMIN_TAB: {
            state.selectedTab = action.selectedTab;
            return { ...state }
        }
        case GET_USER_BY_PAGE: {
            state.userByPage = action.userByPage
            return { ...state };
        }
        case GET_COURSE_BY_PAGE: {
            state.courseByPage = action.courseByPage
            return { ...state };
        }
        case ADD_NEW_COURSE: {
            return { ...state };
        }
        case DELETED_USER: {
            return { ...state };
        }
        case DELETED_COURSE: {
            return { ...state };
        }
        case GET_COURSE_BY_ID: {
            state.course = action.course
            return { ...state };
        }
        default: {
            return state
        }
    }
}
