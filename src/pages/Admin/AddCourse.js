import { useFormik } from 'formik';
import React, { useEffect, useRef } from 'react';
import * as Yup from 'yup';
import moment from 'moment/moment';
import _ from 'lodash';
import { addNewCourseAction } from '../../redux/actions/Admin/AdminCourseAction';
import { useDispatch } from 'react-redux';
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
export const AddCourse = () => {
    const formikRef = useRef(null);
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: 0,
            danhGia: 0,
            hinhAnh: '',
            maNhom: 'GP01',
            ngayTao: moment(Date.now()).format('DD/MM/YYYY'),
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: ''
        },
        validationSchema: SignupSchema,
        validateOnChange: true,
        onSubmit: values => {
            dispatch(addNewCourseAction(values, formik.resetForm))
        },
    });
    useEffect(() => {
        formikRef.current = formik;
    }, [formik]);
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50" >
            <form onSubmit={formik.handleSubmit} className="container flex flex-col mx-auto space-y-12 ">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                    <h1 className='font-bold text-2xl mb-5'>Form thêm khóa học</h1>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Mã khóa học</label>
                            <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.maKhoaHoc} name='maKhoaHoc' type="text" className="px-3 py-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            {formik.touched.maKhoaHoc && formik.values.maKhoaHoc ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.maKhoaHoc}</div>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" className="text-sm">Bí danh</label>
                            <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.biDanh} name='biDanh' type="text" className="px-3 py-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            {formik.touched.biDanh && formik.values.biDanh ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.biDanh}</div>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tên khóa học</label>
                            <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.tenKhoaHoc} name='tenKhoaHoc' type="text" className="px-3 py-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            {formik.touched.tenKhoaHoc && formik.values.tenKhoaHoc ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.tenKhoaHoc}</div>}
                        </div>
                        <div className="col-span-3">
                            <label className="text-sm">Mã nhóm</label>
                            <select className='px-3 py-2 w-full rounded-md' onChange={formik.handleChange} value={formik.values.maNhom} name='maNhom' style={{ border: '1px solid black' }}>
                                <option value="GP01">GP01</option>
                                <option value="GP02">GP02</option>
                                <option value="GP03">GP03</option>
                                <option value="GP04">GP04</option>
                                <option value="GP05">GP05</option>
                            </select>
                            {formik.touched.maNhom && formik.values.maNhom ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.maNhom}</div>}
                        </div>
                        <div className="col-span-full sm:col-span-6">
                            <label className="text-sm">Hình ảnh</label>
                            <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.hinhAnh} name='hinhAnh' type="file" className="px-3 py-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            {formik.touched.hinhAnh && formik.values.hinhAnh ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.hinhAnh}</div>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Mã danh mục khóa học</label>
                            <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.maDanhMucKhoaHoc} name='maDanhMucKhoaHoc' type="text" className="px-3 py-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            {formik.touched.maDanhMucKhoaHoc && formik.values.maDanhMucKhoaHoc ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.maDanhMucKhoaHoc}</div>}
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Tài khoản người tạo</label>
                            <input style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.taiKhoanNguoiTao} name='taiKhoanNguoiTao' type="text" className="px-3 py-2 w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            {formik.touched.taiKhoanNguoiTao && formik.values.taiKhoanNguoiTao ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.taiKhoanNguoiTao}</div>}
                        </div>
                        <div className="col-span-full">
                            <label>Mô tả</label>
                            <textarea style={{ border: '1px solid black' }} onChange={formik.handleChange} value={formik.values.moTa} name='moTa' className='w-full px-3 py-2' rows="5"></textarea>
                            {formik.touched.moTa && formik.values.moTa ? <div className='text-green-600'>Hợp lệ</div> : <div className='text-red-600'>{formik.errors.moTa}</div>}
                        </div>
                        <div className="col-span-full">
                            <button type='submit' className="bg-black text-white px-4 py-2 float-right">Add</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section >
    )
}