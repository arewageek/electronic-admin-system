import { Button } from '@/components/ui/button'
import { Bell, LogOut } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SignoutButton from '../SignoutButton'

const StaffHeader = () => {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">File Review Dashboard</h1>
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                    </Button>
                    <SignoutButton />
                </div>
            </div>
        </header>
    )
}

export default StaffHeader