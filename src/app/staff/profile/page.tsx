import Address from '@/components/profile/Address'
import Headline from '@/components/profile/Headline'
import PersonalInformation from '@/components/profile/Personal'
import React from 'react'

const ProfilePage = () => {
    return (
        <div className='w-full h-full flex gap-x-8'>
            <div className='bg-white w-full lg:w-3/5 h-full p-10 rounded-2xl flex flex-col gap-y-10'>
                <h3 className='font-bold text-sm'>My Profile</h3>
                <Headline />
                <PersonalInformation />
                <Address />
            </div>
        </div>
    )
}

export default ProfilePage