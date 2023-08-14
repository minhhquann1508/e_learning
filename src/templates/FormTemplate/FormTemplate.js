import React, { Fragment, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { hideLoadingAction, showLoadingAction } from '../../redux/actions/LoadingAction/LoadingAction'
export default function FormTemplate() {
    const dispatch = useDispatch();
    const location = useLocation()
    useEffect(() => {
        dispatch(showLoadingAction())
        setTimeout(() => {
            window.scrollTo(0, 0)
            dispatch(hideLoadingAction())
        }, 500)
    }, [location])
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    )
}
