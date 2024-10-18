import SideBar from '@/components/layout/SideBar'
import { ReactNode } from 'react'

const StaffLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='flex flex-col lg:flex-row w-full'>
            <SideBar />
            <div className='w-full'>
                {children}
            </div>
        </main>
    )
}

export default StaffLayout