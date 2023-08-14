import axios from "axios"
import { DOMAIN, TOKEN } from '../../../util/constant/constant'
import { ADD_NEW_COURSE, DELETED_COURSE, FIND_COURSE_ADMIN_BY_KEYWORD, GET_COURSE_BY_ID, GET_COURSE_BY_PAGE, UPDATE_COURSE } from "../../types/Admin"
import { ACCESS_TOKEN } from "../../types/Constant"
import Swal from 'sweetalert2'
import { adminService } from "../../../services/AdminService"
export const getCourseByPageAction = (group, page, pageSize, tenKhoaHoc) => {
    return async (dispacth) => {
        try {
            let result = await axios({
                url: `${DOMAIN}api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${tenKhoaHoc}&page=${page}&pageSize=${pageSize}&MaNhom=${group}`,
                method: "GET",
                headers: {
                    TokenCybersoft: TOKEN
                }
            })
            if (result.status === 200) {
                dispacth({
                    type: GET_COURSE_BY_PAGE,
                    courseByPage: result.data
                })
            }
        }
        catch (error) {
            dispacth({
                type: GET_COURSE_BY_PAGE,
                courseByPage: []
            })
        }
    }
}

export const addNewCourseAction = (value, resetFormik) => {
    return async (dispacth) => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/QuanLyKhoaHoc/ThemKhoaHoc`,
                method: "POST",
                data: value,
                headers: {
                    TokenCybersoft: TOKEN,
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem(ACCESS_TOKEN))}`
                }
            })
            if (result.status === 200) {
                resetFormik()
                await dispacth({
                    type: ADD_NEW_COURSE,
                })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thêm khóa học thành công',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
        catch (error) {
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
}

export const deletedCourseAdminAction = (maKhoaHoc) => {
    return async (dispacth) => {
        try {
            let result = await adminService.deleteCourse(maKhoaHoc)
            if (result.status === 200) {
                await dispacth({
                    type: DELETED_COURSE,
                })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Xóa khoá học thành công',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
        catch (error) {
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
}

export const getCourseByIdAction = (maKhoaHoc, setInputValue, setIsModalOpen) => {
    return async (dispacth) => {
        try {
            let result = await adminService.getCourseById(maKhoaHoc)
            if (result.status === 200) {
                await dispacth({
                    type: GET_COURSE_BY_ID,
                    course: result.data
                })
                await setInputValue(result.data)
                await setIsModalOpen(true)
            }
        }
        catch (error) {
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
}

export const updateCourseAction = (courseDetail, setIsModalOpen) => {
    return async (dispacth) => {
        try {
            let result = await adminService.updateCourse(courseDetail)
            if (result.status === 200) {
                await dispacth({
                    type: UPDATE_COURSE,
                })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cập nhật thành công',
                    showConfirmButton: false,
                    timer: 2000
                })
                await setIsModalOpen(false)
            }
        }
        catch (error) {
            await Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: error.response.data,
                showConfirmButton: false,
                timer: 2000
            })
        }
    }
}
