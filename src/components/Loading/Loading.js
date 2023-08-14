import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
    const { isLoading } = useSelector(state => state.LoadingReducer)
    return (
        <Fragment>
            {isLoading ?
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999, height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="loading" style={{ width: 200 }} />
                </div>
                : ''}
        </Fragment>

    )
}
