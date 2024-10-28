"use client"

import { LayoutDashboard, Menu, Settings, Upload, UserCircle, X } from 'lucide-react';
import { useState } from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';

const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { name: 'Uploads', icon: Upload, href: '/uploads' },
    { name: 'Profile', icon: UserCircle, href: '/profile' },
    { name: 'Settings', icon: Settings, href: '/settings' },
];


const SideBar = () => {

    const [sidenavOpen, setSidenavOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setSidenavOpen(true)} className='lg:hidden px-3 py-2 shadow w-fit m-3'>
                <Menu />
            </Button>
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidenavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">FRS</span>
                    <Button variant="ghost" size="icon" onClick={() => setSidenavOpen(false)} className="lg:hidden">
                        <X className="h-6 w-6" />
                    </Button>
                </div>
                <nav className="mt-8">
                    {navItems.map((item) => (
                        <Link key={item.name} href={`/app/staff${item.href}`} className="flex items-center px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                            <item.icon className="h-5 w-5 mr-3" />
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>
    )
}

export default SideBar