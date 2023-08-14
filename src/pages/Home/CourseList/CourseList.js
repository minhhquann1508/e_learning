import React, { Component } from "react";
import Slider from "react-slick";
import './CourseList.css';
import { connect } from "react-redux";
import { getRelatedCourseAction } from "../../../redux/actions/ManageCourseAction/ManageCourseAction";
import { ERROR_IMG } from "../../../util/constant/constant";
import { NavLink } from "react-router-dom";
import { USER_LOGIN } from "../../../redux/types/Constant";
class CourseList extends Component {
    constructor(props) {
        super()
    }
    componentDidMount() {
        this.props.getListCourse();
    }
    renderListCourse = () => {
        return this.props.relatedCourses?.slice(7, 14).map((course, index) => {
            return (
                <div key={index}>
                    <div className="max-w-xs p-6 dark:bg-gray-900 dark:text-gray-50">
                        <img src={course.hinhAnh} onError={(e) => e.target.src = ERROR_IMG} style={{ width: '100%', height: '150px', display: 'block', margin: '0 auto' }} alt className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                        <div style={{ minHeight: 100 }}>
                            <div className="my-2">
                                <NavLink to={localStorage.getItem(USER_LOGIN) ? `/detail/${course.maKhoaHoc}` : '/login'} className="text-xl font-bold tracki">{course.tenKhoaHoc}</NavLink>
                            </div>
                            <p className="my-1">{course.moTa.slice(0, 30)}..</p>
                        </div>
                        <NavLink type="button" to={`/detail/${course.maKhoaHoc}`}
                            className="px-4 py-2 font-semibold rounded-lg" style={{ backgroundColor: '#5624d0', color: '#fff' }}>Xem chi tiết</NavLink>
                    </div>
                </div>
            )
        })
    }
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 5,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };
        return (
            <div className="container no-scrollbar py-20">
                <h1 className="text-3xl font-bold text-center pb-10">Best selling courses</h1>
                <Slider {...settings}>
                    {this.renderListCourse()}
                </Slider>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        relatedCourses: state.ManageCourseReducer.relatedCourses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListCourse: () => {
            dispatch(getRelatedCourseAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)