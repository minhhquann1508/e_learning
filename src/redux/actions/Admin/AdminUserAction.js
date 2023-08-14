import axios from "axios"
import { DOMAIN, GROUP_ID, TOKEN } from '../../../util/constant/constant'
import { ADD_NEW_TEACHER, DELETED_USER, GET_USER_BY_PAGE } from "../../types/Admin"
import { adminService } from "../../../services/AdminService"
import Swal from 'sweetalert2'
export const getUserByPageAction = (group, page, pageSize, keyword) => {
    return async (dispacth) => {
        try {
            if (keyword !== '') {
                let result = await axios({
                    url: `${DOMAIN}api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${group}&tuKhoa=${keyword}&page=${page}&pageSize=${pageSize}`,
                    method: "GET",
                    headers: {
                        TokenCybersoft: TOKEN
                    }
                })
                if (result.status === 200) {
                    dispacth({
                        type: GET_USER_BY_PAGE,
                        userByPage: result.data
                    })
                }
            }
            else {
                let result = await axios({
                    url: `${DOMAIN}api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${group}&page=${page}&pageSize=${pageSize}`,
                    method: "GET",
                    headers: {
                        TokenCybersoft: TOKEN
                    }
                })
                if (result.status === 200) {
                    dispacth({
                        type: GET_USER_BY_PAGE,
                        userByPage: result.data
                    })
                }
            }
            // let result = await axios({
            //     url: `${DOMAIN}api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${group}&tuKhoa=${keyword}&page=${page}&pageSize=${pageSize}`,
            //     method: "GET",
            //     headers: {
            //         TokenCybersoft: TOKEN
            //     }
            // })
            // if (result.status === 200) {
            //     dispacth({
            //         type: GET_USER_BY_PAGE,
            //         userByPage: result.data
            //     })
            // }
        }
        catch (error) {
            console.log(error);
        }
    }
}


export const deletedUserAction = (userName) => {
    return async (dispacth) => {
        try {
            let result = await adminService.deleteUser(userName)
            if (result.status === 200) {
                await dispacth({
                    type: DELETED_USER,
                })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Xóa người dùng thành công',
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

export const addNewTeacherAction = (values, setIsModalOpen, setIsFormSubmitted, resetFormik) => {
    return async (dispacth) => {
        try {
            let result = await adminService.addNewTeacher(values)
            if (result.status === 200) {
                await resetFormik()
                await dispacth({
                    type: ADD_NEW_TEACHER,
                })
                await Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thêm giảng viên thành công',
                    showConfirmButton: false,
                    timer: 2000
                })
                await setIsFormSubmitted(true);
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