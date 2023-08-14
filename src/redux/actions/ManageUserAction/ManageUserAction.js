import { userService } from "../../../services/UserService";
import { CANCLE_REGISTED_COURSE, GET_DETAIL_COURSE, GET_USER_PROFILE, LOGIN, REGISTER, REGISTER_NEW_COURSE, UPDATE_USER_INFO } from '../../types/ManageUserType'
import Swal from 'sweetalert2'
export const loginAction = (userLogin) => {
    return async (dispatch) => {
        try {
            let result = await userService.login(userLogin);
            if (result.status === 200) {
                await dispatch({
                    type: LOGIN,
                    userLogin: result.data
                })
                await Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công',
                })
            }
        }
        catch (error) {
            await Swal.fire({
                icon: 'error',
                title: error.response.data,
            })
        }
    }
}

export const getProfileUserAction = () => {
    return async (dispatch) => {
        try {
            let result = await userService.getProfile();
            if (result.status === 200) {
                dispatch({
                    type: GET_USER_PROFILE,
                    userProfile: result.data
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const getDetailCourse = (courseId) => {
    return async (dispatch) => {
        try {
            let result = await userService.getDetail(courseId);
            if (result.status === 200) {
                dispatch({ type: GET_DETAIL_COURSE, detailCourse: result.data })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const registerNewCourseAction = (info) => {
    return async (dispatch) => {
        try {
            let result = await userService.registerCourse(info);
            if (result.status === 200) {
                await dispatch({ type: REGISTER_NEW_COURSE, nofication: result.data })
            }
        }
        catch (error) {
            dispatch({
                type: REGISTER_NEW_COURSE,
                nofication: error.response.data
            })
        }
    }
}

export const cancleRegisterCourseAction = (info) => {
    return async (dispatch) => {
        try {
            let result = await userService.cancelRegisterCourse(info);
            if (result.status === 200) {
                await dispatch({ type: CANCLE_REGISTED_COURSE, nofication: result.data })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const updateUserProfile = (newInfo) => {
    return async (dispatch) => {
        try {
            let result = await userService.updateUserProfile(newInfo);
            if (result.status === 200) {
                await dispatch({ type: UPDATE_USER_INFO })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thông tin đã được cập nhật',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            window.location.reload();
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const signInUserAction = (inputValue) => {
    return async (dispatch) => {
        try {
            let result = await userService.register(inputValue);
            console.log(result);
            if (result.status === 200) {
                await dispatch({ type: REGISTER })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Bạn đã đăng ký thành công',
                    showConfirmButton: false,
                    timer: 2000
                })
                    .then(() => {
                        window.location.href = '/login'
                    })
            }
        }
        catch (error) {
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 3000
            })
        }
    }
}