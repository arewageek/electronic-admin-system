"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    FileText,
    CheckCircle,
    XCircle,
    Clock,
    Search,
    Filter,
    Download,
    Eye,
    ThumbsUp,
    ThumbsDown,
    Menu,
    Bell
} from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function UploadsReviewPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-6 bg-purple-600 dark:bg-purple-800">
                    <span className="text-2xl font-semibold text-white">FRS Admin</span>
                    <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
                        <XCircle className="h-6 w-6 text-white" />
                    </Button>
                </div>
                <nav className="mt-6">
                    <a className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="/admin/dashboard">
                        <FileText className="h-5 w-5 mr-3" />
                        Dashboard
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700" href="#">
                        <FileText className="h-5 w-5 mr-3" />
                        Review Uploads
                    </a>
                    {/* Add other navigation items here */}
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="lg:hidden mr-2" onClick={() => setIsSidebarOpen(true)}>
                            <Menu className="h-6 w-6" />
                        </Button>
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Review Uploads</h1>
                    </div>
                    <div className="flex items-center">
                        <Button variant="ghost" size="icon" className="mr-2">
                            <Bell className="h-5 w-5" />
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

                {/* Uploads Review Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 py-8">
                        <Card className="mb-8">
                            <CardHeader>
                                <CardTitle>Upload Statistics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Total Uploads
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                1,257
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Approved
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                1,103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Pending
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                154
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                                        <div className="p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500">
                                            <XCircle className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Rejected
                                            </p>
                                            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                                23
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Review Uploads</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0">
                                    <div className="flex-1 max-w-md">
                                        <div className="relative">
                                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                            <Input placeholder="Search files..." className="pl-8" />
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Filter by status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="all">All</SelectItem>
                                                <SelectItem value="pending">Pending</SelectItem>
                                                <SelectItem value="approved">Approved</SelectItem>
                                                <SelectItem value="rejected">Rejected</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Button>
                                            <Filter className="mr-2 h-4 w-4" /> Filter
                                        </Button>
                                    </div>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                <th className="px-4 py-3">File Name</th>
                                                <th className="px-4 py-3">Uploaded By</th>
                                                <th className="px-4 py-3">Date</th>
                                                <th className="px-4 py-3">Status</th>
                                                <th className="px-4 py-3">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                            {[
                                                { name: "Annual Report 2023.pdf", uploader: "John Doe", date: "2023-06-10", status: "Approved" },
                                                { name: "Q2 Financial Statement.xlsx", uploader: "Jane Smith", date: "2023-06-08", status: "Pending" },
                                                { name: "Project Proposal.docx", uploader: "Mike Johnson", date: "2023-06-07", status: "Rejected" },
                                                { name: "Marketing Plan.pptx", uploader: "Sarah Brown", date: "2023-06-05", status: "Pending" },
                                                { name: "Budget Forecast.csv", uploader: "Tom Wilson", date: "2023-06-03", status: "Approved" },
                                            ].map((file, index) => (
                                                <tr key={index} className="text-gray-700 dark:text-gray-400">
                                                    <td className="px-4 py-3">
                                                        <div className="flex items-center text-sm">
                                                            <FileText className="h-5 w-5 mr-3 text-gray-500" />
                                                            <div>
                                                                <p className="font-semibold">{file.name}</p>
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">2.3 MB</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        {file.uploader}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        {file.date}
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${file.status === 'Approved' ? 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100' :
                                                            file.status === 'Pending' ? 'text-orange-700 bg-orange-100 dark:bg-orange-600 dark:text-white' :
                                                                'text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100'
                                                            }`}>
                                                            {file.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <div className="flex space-x-2">
                                                            <Button variant="outline" size="sm">
                                                                <Eye className="h-4 w-4 mr-1" /> View
                                                            </Button>
                                                            <Button variant="outline" size="sm">
                                                                <Download className="h-4 w-4 mr-1" /> Download
                                                            </Button>
                                                            {file.status === 'Pending' && (
                                                                <>
                                                                    <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                                                                        <ThumbsUp className="h-4 w-4 mr-1" /> Approve
                                                                    </Button>
                                                                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                                                        <ThumbsDown className="h-4 w-4 mr-1" /> Reject
                                                                    </Button>
                                                                </>
                                                            )}
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </div>
    )
}