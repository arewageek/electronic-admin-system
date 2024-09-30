import React from 'react'
import OverviewCard from './OverviewCard'

const StaffOverview = () => {
    return (
        <div className='mt-8'>
            <h3 className='font-bold text-sm'>
                Overview
            </h3>
            <div className='w-full grid grid-cols-2 lg:grid-cols-4'>
                <div className='lg:p-4'>
                    <OverviewCard type="image" count={302} classes="text-purple-500" />
                </div>

                <div className='lg:p-4'>
                    <OverviewCard type="videos" count={302} classes="text-purple-500" />
                </div>

                <div className='lg:p-4'>
                    <OverviewCard type="documents" count={302} classes="text-purple-500" />
                </div>

                <div className='lg:p-4'>
                    <OverviewCard type="others" count={302} classes="text-purple-500" />
                </div>
            </div>
        </div>
    )
}

export default StaffOverview