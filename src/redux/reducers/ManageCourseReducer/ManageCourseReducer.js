import { GET_COURSE_BY_KEYWORD, GET_LIST_COURSE, GET_RELATED_COURSE } from "../../types/ManageCourseType";

const initialState = {
    listCourses: [],
    relatedCourses: [],
    findingCourse: null
}

export const ManageCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_COURSE: {
            state.listCourses = action.listCourses;
            return { ...state };
        }
        case GET_RELATED_COURSE: {
            state.relatedCourses = action.relatedCourses
            return { ...state };
        }
        case GET_COURSE_BY_KEYWORD: {
            state.findingCourse = action.findingCourse
            return { ...state };
        }
        default: {
            return state
        }
    }
}
