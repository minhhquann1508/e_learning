import { courseService } from "../../../services/CourseService"
import { GET_COURSE_BY_KEYWORD, GET_LIST_COURSE, GET_RELATED_COURSE } from "../../types/ManageCourseType";

export const getListCoursesAction = (type) => {
    if (type === 'bestseller') {
        return async (dispatch) => {
            try {
                const result = await courseService.getAllListCourse();
                dispatch({
                    type: GET_LIST_COURSE,
                    listCourses: result.data
                })
            }
            catch (error) {
                console.log(error);
            }
        }
    }
    else {
        return async (dispatch) => {
            try {
                const result = await courseService.getListCourses(type);
                dispatch({
                    type: GET_LIST_COURSE,
                    listCourses: result.data
                })
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}

export const getRelatedCourseAction = () => {
    return async (dispatch) => {
        try {
            const result = await courseService.getRelatedCourse();
            dispatch({
                type: GET_RELATED_COURSE,
                relatedCourses: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}


export const searchCourseByKeywordAction = (keyword) => {
    return async (dispatch) => {
        try {
            const result = await courseService.getCourseByKeyword(keyword);
            dispatch({
                type: GET_COURSE_BY_KEYWORD,
                findingCourse: result.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}