import { USER_LOGIN, ACCESS_TOKEN } from "../../types/Constant"
import { UPDATE_USER_INFO, GET_DETAIL_COURSE, GET_USER_PROFILE, LOGIN, REGISTER_NEW_COURSE, REGISTER } from "../../types/ManageUserType"
let user = {};
if (localStorage.getItem(USER_LOGIN) !== null) {
    user = localStorage.getItem(USER_LOGIN)
}
const initialState = {
    userLogin: user,
    selectedUserKey: '1',
    userProfile: {
        "chiTietKhoaHocGhiDanh": [],
        "taiKhoan": "",
        "matKhau": "",
        "hoTen": "",
        "soDT": "",
        "maLoaiNguoiDung": "",
        "maNhom": "",
        "email": ""
    },
    detailCourse: {
        "maKhoaHoc": "",
        "biDanh": "",
        "tenKhoaHoc": "",
        "moTa": "",
        "luotXem": 0,
        "hinhAnh": "",
        "maNhom": "",
        "ngayTao": "",
        "soLuongHocVien": 0,
        "nguoiTao": {
            "taiKhoan": "",
            "hoTen": "",
            "maLoaiNguoiDung": "",
            "tenLoaiNguoiDung": ""
        },
        "danhMucKhoaHoc": {
            "maDanhMucKhoahoc": "",
            "tenDanhMucKhoaHoc": ""
        }
    },
    responseData: '',
}

export const ManageUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            state.userLogin = action.userLogin;
            localStorage.setItem(USER_LOGIN, JSON.stringify(state.userLogin));
            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(state.userLogin.accessToken));
            window.location.reload();
            return { ...state };
        }
        case 'CHANGE_USER_TAB': {
            state.selectedUserKey = action.key;
            return { ...state };
        }
        case GET_USER_PROFILE: {
            state.userProfile = action.userProfile;
            return { ...state };
        }
        case GET_DETAIL_COURSE: {
            state.detailCourse = action.detailCourse;
            return { ...state };
        }
        case REGISTER_NEW_COURSE: {
            state.responseData = action.nofication;
            return { ...state };
        }
        case UPDATE_USER_INFO: {
            return { ...state };
        }
        case REGISTER: {
            return { ...state };
        }
        default: {
            return state
        }
    }
}
