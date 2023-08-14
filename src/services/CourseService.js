import { BaseService } from './BaseService'
export default class CourseService extends BaseService {
    constructor() {
        super()
    }
    getAllListCourse = () => {
        return this.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?`)
    }
    getListCourses = (type) => {
        return this.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${type}`)
    }
    getRelatedCourse = () => {
        return this.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?`)
    }
    getCourseByKeyword = (keyword) => {
        return this.get(`api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyword}`)
    }
}

export const courseService = new CourseService();
