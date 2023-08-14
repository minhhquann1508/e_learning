import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedCourseAdminAction, findCourseAdminByKeywordAction, getCourseByIdAction, getCourseByPageAction, updateCourseAction } from "../../redux/actions/Admin/AdminCourseAction";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import './ModalAdmin.css'
import { Modal } from 'antd';
import { useFormik } from "formik";
import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    maKhoaHoc: Yup.string()
        .min(4, 'Mã khóa học quá ngắn')
        .max(50, 'Mã khóa học vượt quá số ký tự tối đa')
        .required('Không bỏ trống mục này'),
    biDanh: Yup.string()
        .min(4, 'Bí danh quá ngắn')
        .max(50, 'Bí danh học vượt quá số ký tự tối đa')
        .required('Không bỏ trống mục này'),
    tenKhoaHoc: Yup.string()
        .min(4, 'Tên khóa học quá ngắn')
        .max(50, 'Tên khóa học vượt quá số ký tự tối đa')
        .required('Không bỏ trống mục này'),
    moTa: Yup.string()
        .min(10, 'Mô tả khóa học quá ngắn')
        .max(1000, 'Mô tả khóa học vượt quá số ký tự tối đa')
        .required('Không bỏ trống mục này'),
    luotXem: Yup.number().required(),
    danhGia: Yup.number().required(),
    hinhAnh: Yup.string().required('Không bỏ trống mục này'),
    maNhom: Yup.string().required(),
    ngayTao: Yup.string().required(),
    maDanhMucKhoaHoc: Yup.string().required('Không bỏ trống trường này'),
    taiKhoanNguoiTao: Yup.string().required('Không bỏ trống trường này')
});


export const CourseTab = () => {
    const dispacth = useDispatch();
    const [inputValue, setInputValue] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (maKhoaHoc) => {
        dispacth(getCourseByIdAction(maKhoaHoc, setInputValue, setIsModalOpen))
    };
    useEffect(() => {
        formik.setValues({
            maKhoaHoc: inputValue.maKhoaHoc || '',
            biDanh: inputValue.biDanh || '',
            tenKhoaHoc: inputValue.tenKhoaHoc || '',
            maNhom: inputValue.maNhom || '',
            hinhAnh: inputValue.hinhAnh || '',
            taiKhoanNguoiTao: inputValue?.nguoiTao?.taiKhoan || '',
            maDanhMucKhoaHoc: inputValue?.danhMucKhoaHoc?.maDanhMucKhoahoc || '',
            moTa: inputValue.moTa || '',
            luotXem: inputValue.luotXem,
            danhGia: 0,
            ngayTao: inputValue.ngayTao,
        })
    }, [inputValue])
    const formik = useFormik({
        validationSchema: SignupSchema,
        validateOnChange: true,
        onSubmit: values => {
            dispacth(updateCourseAction(values, setIsModalOpen))
        },
    })
    const handleOk = () => {
        formik.handleSubmit()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [group, setGroup] = useState('GP01')
    let { courseByPage, selectedTab } = useSelector(state => state.AdminTabReducer);
    useEffect(() => {
        dispacth(getCourseByPageAction(group, 1, 1000, ' '))
    }, [group])
    const deletedCourse = (maKhoaHoc) => {
        dispacth(deletedCourseAdminAction(maKhoaHoc))
            .then(() => {
                dispacth(getCourseByPageAction(group, 1, 1000, ' '))
            })
    }
    const renderTableContent = () => {
        if (courseByPage?.length === 0) {
            return (
                <tr>Không có khóa học phù hợp</tr>
            )
        }
        else {
            let categoryPage = courseByPage?.items.filter(course => course.danhMucKhoaHoc.maDanhMucKhoahoc === selectedTab)
            if (categoryPage?.length === 0) {
                return (
                    <tr>Không có khóa học phù hợp</tr>
                )
            }
            else {
                return categoryPage?.map((course, index) => {
                    return (
                        <tr key={index} className="text-left">
                            <td className="p-3">{course?.maKhoaHoc}</td>
                            <td className="p-3">{course?.tenKhoaHoc}</td>
                            <td className="p-3">{course?.soLuongHocVien}</td>
                            <td className="p-3">{group}</td>
                            <td className="p-3">{course?.hinhAnh}</td>
                            <td className="p-3">{course?.ngayTao}</td>
                            <td className="p-3 flex gap-3">
                                <>
                                    <button onClick={() => showModal(course?.maKhoaHoc)} className="bg-green-700 text-white text-lg px-2 py-1 rounded-lg"><EditOutlined /></button>
                                    <Modal title="Basic Modal" open={isModalOpen} onOk={() => handleOk()} onCancel={handleCancel}>
                                        <section className="dark:text-gray-50">
                                            <form className="w-full flex flex-col mx-auto space-y-12">
                                                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-full">
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label for="firstname" className="text-sm">Mã khóa học</label>
                                                            <input disabled='true' style={{ border: '1px solid black' }} name="maKhoaHoc" onChange={formik.handleChange} value={formik.values?.maKhoaHoc} type="text" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                        </div>
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label for="email" className="text-sm">Bí danh</label>
                                                            <input style={{ border: '1px solid black' }} id="email" name="biDanh" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values?.biDanh} type="text" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                            {formik.touched.biDanh || formik.errors.biDanh ? <div className='text-red-600'>{formik.errors.biDanh}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label for="lastname" className="text-sm">Tên khóa học</label>
                                                            <input style={{ border: '1px solid black' }} id="lastname" name="tenKhoaHoc" onChange={formik.handleChange} value={formik.values?.tenKhoaHoc} type="text" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                            {formik.touched.tenKhoaHoc || formik.errors.tenKhoaHoc ? <div className='text-red-600'>{formik.errors.tenKhoaHoc}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                        <div className="col-span-3">
                                                            <label for="address" className="text-sm">Mã nhóm</label>
                                                            <select name="maNhom" style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values?.maNhom} className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900">
                                                                <option value="GP01">GP01</option>
                                                                <option value="GP02">GP02</option>
                                                                <option value="GP03">GP03</option>
                                                                <option value="GP04">GP04</option>
                                                                <option value="GP05">GP05</option>
                                                            </select>
                                                            {formik.touched.maNhom || formik.errors.maNhom ? <div className='text-red-600'>{formik.errors.maNhom}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                        <div className="col-span-3">
                                                            <label for="address" className="text-sm">Hình ảnh</label>
                                                            <input name="hinhAnh" style={{ border: '1px solid black' }} id="address" onChange={formik.handleChange} value={formik.values?.hinhAnh} type="text" placeholder="" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                            {formik.touched.hinhAnh || formik.errors.hinhAnh ? <div className='text-red-600'>{formik.errors.hinhAnh}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label for="city" className="text-sm">Tài khoản người tạo</label>
                                                            <input name="taiKhoanNguoiTao" style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values?.taiKhoanNguoiTao} type="text" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                            {formik.touched.taiKhoanNguoiTao || formik.errors.taiKhoanNguoiTao ? <div className='text-red-600'>{formik.errors.taiKhoanNguoiTao}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label for="state" className="text-sm">Mã danh mục khóa học</label>
                                                            <input name="maDanhMucKhoaHoc" style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values?.maDanhMucKhoahoc} type="text" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                            {formik.touched.maDanhMucKhoaHoc || formik.errors.maDanhMucKhoaHoc ? <div className='text-red-600'>{formik.errors.maDanhMucKhoaHoc}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                        <div className="col-span-full sm:col-span-3">
                                                            <label for="zip" className="text-sm">Mô tả</label>
                                                            <input name="moTa" style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values?.moTa} type="text" className="w-full py-2 px-2 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                                                            {formik.touched.moTa || formik.errors.moTa ? <div className='text-red-600'>{formik.errors.moTa}</div> : <div className='text-green-600'></div>}
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </section>
                                    </Modal>
                                </>
                                <button className="bg-red-600
                                             text-white text-lg px-2 py-1 rounded-lg"
                                    onClick={() => {
                                        deletedCourse(course.maKhoaHoc)
                                    }}
                                ><DeleteOutlined /></button>
                            </td>
                        </tr>
                    )
                })
            }
        }
    }
    return (
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
            <div className="flex items-center mb-4">
                <h2 className="text-2xl font-semibold leadi">{selectedTab}</h2>
                <select onClick={(e) => {
                    let groupValue = e.target.value;
                    setGroup(groupValue)
                }} className="mx-2 px-2 py-1" style={{ border: '1px solid black' }}>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                </select>
                <input style={{ border: '1px solid black' }} type="search" name="search"
                    onChange={(e) => {
                        dispacth(getCourseByPageAction(group, 1, 1000, e.target.value))
                    }}
                    placeholder="Search..." className="w-32 py-1 px-1 pl-2 text-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col className="w-24"></col>
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Mã khóa học</th>
                            <th className="p-3">Tên khóa học</th>
                            <th className="p-3">Số học viên</th>
                            <th className="p-3">Mã nhóm</th>
                            <th className="p-3">Hình ảnh</th>
                            <th className="p-3">Ngày tạo</th>
                            <th className="p-3">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableContent()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
