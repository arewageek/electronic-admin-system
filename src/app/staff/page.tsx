import AllFiles from '@/components/staff/AllFiles'
import Storage from '@/components/staff/Storage'
import StaffIntro from '@/components/staff/intro'
import StaffOverview from '@/components/staff/overview'
import { Input } from '@/components/ui/input'
import React from 'react'
import { FaSearch, FaSearchengin } from 'react-icons/fa'

const StaffPage = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <div className='w-full lg:w-3/5'>
                <StaffIntro />
                <StaffOverview />
                <AllFiles />
            </div>
            <div className='w-full lg:w-2/5  ps-10 mt-10 lg:mt-0'>
                <Storage />
            </div>
        </div>
    )
}

export default StaffPage