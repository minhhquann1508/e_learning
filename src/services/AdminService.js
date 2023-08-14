import { BaseService } from './BaseService'
export default class AdminService extends BaseService {
    constructor() {
        super()
    }
    deleteUser = (userName) => {
        return this.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`)
    }
    deleteCourse = (maKhoaHoc) => {
        return this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
    getCourseById = (maKhoaHoc) => {
        return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
    updateCourse = (courseDetail) => {
        return this.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`, courseDetail)
    }
    addNewTeacher = (values) => {
        return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, values)
    }
}

export const adminService = new AdminService();