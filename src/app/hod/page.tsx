import AllSubmissions from '@/components/hod/AllSubmissions'
import HodOverview from '@/components/hod/HodOverview'
import Storage from '@/components/staff/Storage'
import React from 'react'

const HODPage = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <div className='w-full lg:w-3/5'>
                <HodOverview />
                <AllSubmissions />
            </div>
            <div className='w-full lg:w-2/5  lg:p-10 mt-10 lg:mt-0'>
                <Storage />
            </div>
        </div>
    )
}

export default HODPage