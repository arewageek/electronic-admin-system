import SideBar from '@/components/layout/SideBar'
import StaffHeader from '@/components/layout/staff/Header'
import { ReactNode } from 'react'

const StaffLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <StaffHeader />
            <div className='flex flex-col lg:flex-row w-full'>
                <SideBar />
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default StaffLayout