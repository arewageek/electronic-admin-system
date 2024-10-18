"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    BarChart3,
    Users,
    FileText,
    CheckCircle,
    XCircle,
    Clock,
    Search,
    BellRing,
    Menu
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            {/* <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-6 bg-purple-600 dark:bg-purple-800">
                    <span className="text-2xl font-semibold text-white">FRS Admin</span>
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                        <XCircle className="h-6 w-6 text-white" />
                    </Button>
                </div>
                <nav className="mt-6">
                    <a className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700" href="#">
                        <BarChart3 className="h-5 w-5 mr-3" />
                        Dashboard
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
                        <Users className="h-5 w-5 mr-3" />
                        Manage Officials
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
                        <FileText className="h-5 w-5 mr-3" />
                        Review Files
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
                        <CheckCircle className="h-5 w-5 mr-3" />
                        Approve Requests
                    </a>
                </nav>
            </aside> */}

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
                    </div>
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="mr-2">
                            <BellRing className="h-5 w-5" />
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                                        <AvatarFallback>SC</AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">shadcn</p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            m@example.com
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Log out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 py-8">
                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Files
                                    </CardTitle>
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">1,257</div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Approved Files
                                    </CardTitle>
                                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">1,103</div>
                                    <p className="text-xs text-muted-foreground">
                                        87.7% approval rate
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Pending Files
                                    </CardTitle>
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">154</div>
                                    <p className="text-xs text-muted-foreground">
                                        12.3% of total files
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Officials
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">573</div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last year
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-8">
                            <Card className="overflow-hidden">
                                <CardHeader>
                                    <CardTitle>Recent Files</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between mb-4">
                                        <div className="w-1/3">
                                            <Input type="text" placeholder="Search files..." />
                                        </div>
                                        <div>
                                            <Button variant="outline" className="mr-2">Filter</Button>
                                            <Button>Add New</Button>
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                    <th className="px-4 py-3">File Name</th>
                                                    <th className="px-4 py-3">Status</th>
                                                    <th className="px-4 py-3">Official</th>
                                                    <th className="px-4 py-3">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center text-sm">
                                                            <FileText className="h-5 w-5 mr-3 text-gray-500" />
                                                            <div>
                                                                <p className="font-semibold">Annual Report 2023.pdf</p>
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">10.5 MB</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                                            Approved
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        John Doe
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        6/10/2023
                                                    </td>
                                                </tr>
                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center text-sm">
                                                            <FileText className="h-5 w-5 mr-3 text-gray-500" />
                                                            <div>
                                                                <p className="font-semibold">Q2 Financial Statement.xlsx</p>
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">2.3 MB</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:bg-orange-600 dark:text-white">
                                                            Pending
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        Jane Smith
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        6/8/2023
                                                    </td>
                                                </tr>
                                                <tr className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center text-sm">
                                                            <FileText className="h-5 w-5 mr-3 text-gray-500" />
                                                            <div>
                                                                <p className="font-semibold">Project Proposal.docx</p>
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">1.8 MB</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100">
                                                            Rejected
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        Mike Johnson
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        6/7/2023
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}