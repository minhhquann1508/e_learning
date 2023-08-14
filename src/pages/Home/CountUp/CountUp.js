import React from 'react'
import CountUp from 'react-countup';
export default function CountUpHome() {
    return (
        <section className="p-6">
            {/* <div className="container p-4 mx-auto text-center">
            </div> */}
            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                <div className="flex justify-center flex-col items-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 gap-5">
                    <i className="fa-solid fa-user" style={{ fontSize: 50 }} />
                    <div className='flex flex-col justify-between'>
                        <CountUp delay={3} duration={3} end={5236} className='text-4xl text-center font-bold' />
                        <h1 className='text-2xl text-center'>Students</h1>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 gap-5">
                    <i className="fa-solid fa-book" style={{ fontSize: 50 }} />
                    <div className='flex flex-col justify-between'>
                        <CountUp delay={3} duration={3} end={50} className='text-4xl text-center font-bold' />
                        <h1 className='text-2xl text-center'>Courses</h1>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 gap-5">
                    <i className="fa-solid fa-clock" style={{ fontSize: 50 }} />
                    <div className='flex flex-col justify-between'>
                        <CountUp delay={3} duration={3} end={1000} className='text-4xl text-center font-bold' />
                        <h1 className='text-2xl text-center'>Learn hours</h1>
                    </div>
                </div>
                <div className="flex justify-center flex-col items-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 gap-5">
                    <i className="fa-solid fa-person-chalkboard" style={{ fontSize: 50 }} />
                    <div className='flex flex-col justify-between'>
                        <CountUp delay={3} duration={3} end={100} className='text-4xl text-center font-bold' />
                        <h1 className='text-2xl text-center'>Lecturers</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
