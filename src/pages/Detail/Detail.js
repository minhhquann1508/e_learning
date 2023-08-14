import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { getDetailCourse, registerNewCourseAction } from '../../redux/actions/ManageUserAction/ManageUserAction';
import { getRelatedCourseAction } from '../../redux/actions/ManageCourseAction/ManageCourseAction';
import { ERROR_IMG } from '../../util/constant/constant';
import Swal from 'sweetalert2'
export default function Detail() {
    const { courseId } = useParams();
    const { detailCourse, userLogin, responseData } = useSelector(state => state.ManageUserReducer);
    const { relatedCourses } = useSelector(state => state.ManageCourseReducer);
    const dispatch = useDispatch();
    const location = useLocation();
    const [popup, setPopup] = useState(false);
    useEffect(() => {
        setPopup(false)
    }, [location])
    useEffect(() => {
        dispatch(getDetailCourse(courseId))
        dispatch(getRelatedCourseAction())
    }, [courseId])
    //xử lý sự kiện đăng ký khóa học
    const handleRegisterCourse = () => {
        let info = {
            maKhoaHoc: courseId,
            taiKhoan: JSON.parse(userLogin).taiKhoan
        };
        setPopup(true)
        dispatch(registerNewCourseAction(info))
    }
    useEffect(() => {
        if (popup && responseData) {
            Swal.fire(responseData)
        }
    }, [popup, responseData])
    const renderRelatedCourse = () => {
        const random = Math.floor(Math.random() * 20 + 4)
        return relatedCourses?.slice((random - 4), random).map((course, index) => {
            return (
                <article key={index} className="flex flex-col dark:bg-gray-900">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="anh" className="object-cover w-full h-52 dark:bg-gray-500" src={course.hinhAnh} onError={(e) => e.target.src = ERROR_IMG} />
                    </a>
                    <div className="flex flex-col flex-1 py-6">
                        <NavLink to={`/detail/${course.maKhoaHoc}`} className="flex-1 py-2 text-lg font-semibold leadi underline cursor-pointer hover:font-extrabold">{course.tenKhoaHoc}</NavLink>
                        <p className='text-gray-700'>Mô tả : {course.moTa.slice(0, 50)}</p>
                        <p><b>Views:</b>{course.luotXem} <i className='fa-solid fa-eye'></i></p>
                    </div>
                </article>
            )
        })
    }
    return (
        <Fragment>
            {/* phần chi tiết */}
            <div className=' w-full flex justify-center py-20' style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}>
                <div div style={{ width: '70%' }} className='flex justify-between'>
                    <div style={{ width: '60%' }}>
                        <h3 className='text-purple-400 font-bold text-xl'>Detail</h3>
                        <h1 className='text-white font-bold text-4xl'>{detailCourse.tenKhoaHoc}</h1>
                        <p className='text-white font-bold text-2xl'>{detailCourse.moTaKhoaHoc}</p>
                        <p className='text-white text-xl pt-5'><b className='text-purple-400'>Danh mục</b>: {detailCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
                        <p className='text-white text-lg pt-2'>
                            Đào tạo cho mọi đối tượng từ người trái ngành, người mới bắt đầu, sinh viên công nghệ thông tin đến các bạn đã có có nghề lập trình.
                            Đào tạo ra những lập trình viên tài năng, phát huy tố chất, tư duy lập trình, có định hướng để trở thành những lập trình chuyên nghiệp.
                            Giáo trình được may đo và biên soạn dành riêng cho các bạn học lập trình.
                        </p>
                    </div>
                    <div className="max-w-xs shadow-md dark:bg-gray-900 dark:text-gray-100" style={{ minWidth: '350px', border: '1px solid #fff', boxShadow: '0 0 4px rgba(0,0,0,0.4)' }}>
                        <img src={detailCourse.hinhAnh} onError={(e) => e.target.src = ERROR_IMG} alt="anh" className="object-cover object-center rounded-t-md w-full h-40 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8 bg-white">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracki">500.000 đ</h2>
                            </div>
                            <div className='flex justify-between gap-3'>
                                <button type="button" onClick={() => handleRegisterCourse()} className="flex items-center justify-center w-full p-2 font-semibold tracki dark:bg-red-400 dark:text-gray-900 bg-purple-600 text-white">GHI DANH</button>
                            </div>
                            <div className='flex justify-between pb-2 border-b-2'>
                                <p><b>Ghi danh</b>: {detailCourse.soLuongHocVien} học viên</p>
                                <i className='fa-solid fa-user'></i>
                            </div>
                            <div className='flex justify-between pb-2 border-b-2'>
                                <p><b>Thời gian</b>: 20 buổi</p>
                                <i className='fa-solid fa-clock'></i>
                            </div>
                            <div className='flex justify-between pb-2 border-b-2'>
                                <p><b>Bài học</b>: 50</p>
                                <i className='fa-solid fa-book'></i>
                            </div>
                            <div className='flex justify-between pb-2 border-b-2'>
                                <p><b>Trình độ</b>: Mới bắt đầu</p>
                                <i className="fa-solid fa-layer-group"></i>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            {/* phần feature */}
            <div className='container flex justify-center py-10'>
                <div style={{ width: '80%', border: '1px solid black' }}>
                    <section className="dark:bg-gray-800 dark:text-gray-100">
                        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                            <div>
                                <h2 className="text-3xl font-bold tracki text-center sm:text-5xl dark:text-gray-50">What you'll learn</h2>
                            </div>
                            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                <div>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Become an advanced, confident, and modern React developer from scratch</h4>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Advanced React features: useReducer, Context API, cloneElement, portals, etc.</h4>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Become job-ready by working with libraries and tools used in professional projects</h4>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leadi dark:text-gray-50">Build real-world app features: authentication, data sorting, filtering and pagination, dark mode, charts, etc.</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                    <img src="https://gifdb.com/images/high/cat-learning-from-book-dgwkkad9vyxf2x2g.gif" alt="anh" className="mx-auto dark:bg-gray-500" />
                                </div>
                            </div>
                            <div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div className="lg:col-start-2">
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi dark:text-gray-50">Join my other 1,500,000+ happy students on this journey</h4>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi dark:text-gray-50">React fundamentals: components, JSX, props, events, state, forms</h4>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi dark:text-gray-50">Understand how React actually works behind the scenes: virtual DOM, reconciliation, fiber tree, key prop, etc.</h4>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-red-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi dark:text-gray-50">Performance optimization with memo, useMemo, useCallback, and code splitting</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                        <img src="https://www.pngitem.com/pimgs/m/211-2110388_cartoon-computer-png-cartoon-man-on-computer-transparent.png" alt="" className="mx-auto dark:bg-gray-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* danh sách khóa học liên quan */}
            <div className="container">
                <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                    <div className="container mx-auto space-y-8 px-0" style={{ width: '80%' }}>
                        <div className="space-y-2 text-center">
                            <h2 className="text-3xl font-bold">Students also bought</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            {renderRelatedCourse()}
                        </div>
                    </div>
                </section>
            </div>
        </Fragment >
    )
}
