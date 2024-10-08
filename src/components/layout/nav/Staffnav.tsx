import { Separator } from '@/components/ui/separator'
import { DashboardIcon, PersonIcon, UploadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

const Staffnav = () => {
    return (
        <div className='w-full h-full rounded-xl bg-white shadow py-8 px-5 hidden lg:block'>
            <div className='text-sm font-bold flex items-center gap-x-4 text-purple-700'>
                <FaCloudUploadAlt className='text-2xl' />
                Electronic Admin System
            </div>
            <StaffNavList />
        </div>
    )
}


export const StaffNavList = () => {
    const menu = [
        { name: "Dashboard", icon: <DashboardIcon />, path: "/staff/" },
        { name: "Profile", icon: <PersonIcon />, path: "/staff/profile" },
        { name: "My Uploads", icon: <UploadIcon />, path: "/staff/uploads" },
    ]

    return (
        <div className='mt-10 px-4 gap-y-4 flex flex-col h-full'>
            {menu.map(link => (
                <Fragment key={crypto.randomUUID()}>
                    <Link href={link.path} className='flex gap-x-3 items-center hover:text-purple-700 transition font-semibold lg:font-medium'>
                        <div className='text-purple-700 p-1.5  rounded-sm'>
                            {link.icon}
                        </div>
                        {link.name}
                    </Link>
                    <Separator />
                </Fragment>
            ))}
        </div>
    )
}

export default Staffnav