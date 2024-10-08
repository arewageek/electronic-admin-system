import Appbar from '@/components/layout/Appbar'
import HodNav from '@/components/layout/nav/HodNav'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='bg-gray-200 min-h-screen'>
                <div>
                    <Appbar />
                </div>
                <div className='w-full px-6 py-8 flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[300px]'>
                        <HodNav />
                    </div>
                    <div className='px-4 lg:px-8 py-4 w-full'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout