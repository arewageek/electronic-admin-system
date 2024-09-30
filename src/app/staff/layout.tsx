import Appbar from '@/components/layout/Appbar'
import Staffnav from '@/components/layout/nav/Staffnav'
import AuthProvider from '@/providers/AuthProvider'
import React from 'react'

const StaffLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <div className='bg-gray-200 min-h-screen'>
                <div>
                    <Appbar />
                </div>
                <div className='w-full px-6 py-8 flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[300px]'>
                        <Staffnav />
                    </div>
                    <div className='px-4 lg:px-8 py-4 w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </AuthProvider>
    )
}

export default StaffLayout