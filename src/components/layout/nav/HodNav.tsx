import { Separator } from '@/components/ui/separator'
import { DashboardIcon, PersonIcon, UploadIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaUsers } from 'react-icons/fa'

const HodNav = () => {
    const menu = [
        { name: "Dashboard", icon: <DashboardIcon />, path: "/hod/" },
        // { name: "Profile", icon: <PersonIcon />, path: "/hod/profile" },
        { name: "My Team", icon: <FaUsers />, path: "/hod/team" },
        { name: "My Uploads", icon: <UploadIcon />, path: "/hod/uploads" },
    ]

    return (
        <div className='mt-10 lg:mt-0 px-4 gap-y-4 flex flex-col h-full bg-white rounded-xl py-10'>
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

export default HodNav