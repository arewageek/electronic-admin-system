"use client"
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Input } from '../ui/input'
import { useClerk } from '@clerk/nextjs'

const StaffIntro = () => {
    const { user } = useClerk()
    return (
        <>
            <div className='font-bold text-lg'>
                {user?.fullName}'s Cloud
            </div>
            <div className='w-full lg:w-full mt-6 pr-5'>
                <div className='rounded-full p-0 bg-white shadow flex items-center h-fit px-4 py-2'>
                    <div className='flex items-center justify-center text-xl text-purple-700/30'>
                        <FaSearch />
                    </div>
                    <Input className='w-full border-0 rounded-full focus-visible:ring-0' />
                    <button className='text-xs font-semibold bg-transparent border-0 text-purple-700'>
                        Search
                    </button>
                </div>
            </div>
        </>
    )
}

export default StaffIntro