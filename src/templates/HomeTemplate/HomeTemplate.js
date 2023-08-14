import React, { Fragment, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import { useDispatch } from 'react-redux'
import { hideLoadingAction, showLoadingAction } from '../../redux/actions/LoadingAction/LoadingAction'
export default function HomeTemplate(props) {
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
            <div style={{ paddingTop: '96px', width: '100%' }}>
                <Outlet />
                <Contact />
                <Footer />
            </div>
        </Fragment>
    )
}
