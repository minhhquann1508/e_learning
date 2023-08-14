import { BaseService } from './BaseService'

export default class UserService extends BaseService {
    constructor() {
        super()
    }
    login = (userLogin) => {
        return this.post('api/QuanLyNguoiDung/DangNhap', userLogin);
    }
    register = (inputValue) => {
        return this.post('api/QuanLyNguoiDung/DangKy', inputValue);
    }
    getProfile = () => {
        return this.post('api/QuanLyNguoiDung/ThongTinNguoiDung');
    }
    getDetail = (courseId) => {
        return this.get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`);
    }
    registerCourse = (info) => {
        return this.post(`api/QuanLyKhoaHoc/DangKyKhoaHoc`, info);
    }
    cancelRegisterCourse = (info) => {
        return this.post(`api/QuanLyKhoaHoc/HuyGhiDanh`, info);
    }
    updateUserProfile = (newInfo) => {
        return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, newInfo);
    }

}
export const userService = new UserService();