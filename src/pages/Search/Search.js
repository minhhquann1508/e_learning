import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { searchCourseByKeywordAction } from '../../redux/actions/ManageCourseAction/ManageCourseAction';
import { USER_LOGIN } from '../../redux/types/Constant';

export default function Search() {
    const { keyword } = useParams();
    const navigate = useNavigate()
    const { findingCourse } = useSelector(state => state.ManageCourseReducer)
    const { userLogin } = useSelector(state => state.ManageUserReducer)
    const dispatch = useDispatch();
    const defaultErrorImage = 'https://codelearn.io/Upload/Blog/top-5-trang-web-day-lap-trinh-mien-phi-63727982616.0848.jpg';
    const handleImageError = (e) => {
        e.target.src = defaultErrorImage;
    };
    useEffect(() => {
        dispatch(searchCourseByKeywordAction(keyword))
    }, [keyword])
    const renderListCourses = () => {
        return findingCourse?.map((course, index) => {
            return (
                <div key={index} className="max-w-lg p-4 shadow-md mt-5" style={{ boxShadow: '0 0 4px rgba(0,0,0,0.4)' }}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={course.hinhAnh} alt="Course img" onError={handleImageError} className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        </div>
                        <div className="space-y-2" style={{ minHeight: 140 }}>
                            <a rel="noopener noreferrer" className="block">
                                <h3 className="text-xl font-semibold dark:text-red-400" onClick={() => {
                                    if (localStorage.getItem(USER_LOGIN) !== null) {
                                        navigate(`/detail/${course.maKhoaHoc}`)
                                    }
                                    else {
                                        navigate(`/login`)
                                    }
                                }}>{course.tenKhoaHoc}</h3>
                            </a>
                            <p className="leadi dark:text-gray-400">{course.moTa.slice(0, 100)}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <button type="button" className="px-6 py-2 font-semibold rounded" style={{ backgroundColor: '#5624d0', color: '#fff' }}
                                onClick={() => {
                                    if (userLogin === null) {
                                        navigate('/login')
                                    }
                                }}
                            >Add to cart</button>
                            <span><b>Lượt xem:</b> <span>{course.luotXem} <i className="fa-solid fa-eye"></i></span></span>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="container py-28">
            <h2 className='font-bold text-4xl text-center mb-6'>Danh sách tìm kiếm</h2>
            <div className='grid grid-cols-4 gap-6' style={{ minHeight: 500 }}>
                {renderListCourses()}
            </div>
        </div>
    )
}
