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
    Menu,
    UserPlus,
    Mail,
    Phone,
    Building
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OfficialsManagementPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false)

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
                        <BarChart3 className="h-5 w-5 mr-3" />
                        Dashboard
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700" href="/admin/uploads">
                        <FileText className="h-5 w-5 mr-3" />
                        Review Uploads
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700" href="#">
                        <Users className="h-5 w-5 mr-3" />
                        Manage Officials
                    </a>
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
                        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Manage Officials</h1>
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

                {/* Officials Management Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
                    <div className="container mx-auto px-6 py-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">Officials Overview</h2>
                            <Button onClick={() => setIsCreateUserModalOpen(true)}>
                                <UserPlus className="mr-2 h-4 w-4" /> Create New User
                            </Button>
                        </div>

                        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Officials
                                    </CardTitle>
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">573</div>
                                    <p className="text-xs text-muted-foreground">
                                        +49 from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Officials
                                    </CardTitle>
                                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">549</div>
                                    <p className="text-xs text-muted-foreground">
                                        95.8% of total officials
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Pending Requests
                                    </CardTitle>
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">24</div>
                                    <p className="text-xs text-muted-foreground">
                                        +12 since last week
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Departments
                                    </CardTitle>
                                    <Building className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">15</div>
                                    <p className="text-xs text-muted-foreground">
                                        Across 3 regions
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Manage Officials</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="active" className="w-full">
                                    <TabsList>
                                        <TabsTrigger value="active">Active Officials</TabsTrigger>
                                        <TabsTrigger value="pending">Pending Requests</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="active">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="w-1/3">
                                                <div className="relative">
                                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                                    <Input placeholder="Search officials..." className="pl-8" />
                                                </div>
                                            </div>
                                            <Select>
                                                <SelectTrigger className="w-[180px]">
                                                    <SelectValue placeholder="Filter by department" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Departments</SelectItem>
                                                    <SelectItem value="finance">Finance</SelectItem>
                                                    <SelectItem value="hr">Human Resources</SelectItem>
                                                    <SelectItem value="it">IT</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                        <th className="px-4 py-3">Name</th>
                                                        <th className="px-4 py-3">Email</th>
                                                        <th className="px-4 py-3">Department</th>
                                                        <th className="px-4 py-3">Status</th>
                                                        <th className="px-4 py-3">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                    {[
                                                        { name: "John Doe", email: "john@example.com", department: "Finance", status: "Active" },
                                                        { name: "Jane Smith", email: "jane@example.com", department: "HR", status: "Active" },
                                                        { name: "Mike Johnson", email: "mike@example.com", department: "IT", status: "Inactive" },
                                                    ].map((official, index) => (
                                                        <tr key={index} className="text-gray-700 dark:text-gray-400">
                                                            <td className="px-4 py-3">
                                                                <div className="flex items-center text-sm">
                                                                    <Avatar className="mr-3">
                                                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${official.email}`} />
                                                                        <AvatarFallback>{official.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                                    </Avatar>
                                                                    <div>
                                                                        <p className="font-semibold">{official.name}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                {official.email}
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                {official.department}
                                                            </td>
                                                            <td className="px-4 py-3 text-xs">
                                                                <span className={`px-2 py-1 font-semibold leading-tight rounded-full ${official.status === 'Active' ? 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100' : 'text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100'
                                                                    }`}>
                                                                    {official.status}
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                <Button variant="outline" size="sm">Edit</Button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="pending">
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                        <th className="px-4 py-3">Name</th>
                                                        <th className="px-4 py-3">Email</th>
                                                        <th className="px-4 py-3">Department</th>
                                                        <th className="px-4 py-3">Requested On</th>
                                                        <th className="px-4 py-3">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                    {[
                                                        { name: "Alice Johnson", email: "alice@example.com", department: "Marketing", requestedOn: "2023-06-15" },
                                                        { name: "Bob Williams", email: "bob@example.com", department: "Sales", requestedOn: "2023-06-14" },
                                                        { name: "Carol Brown", email: "carol@example.com", department: "Operations", requestedOn: "2023-06-13" },
                                                    ].map((request, index) => (
                                                        <tr key={index} className="text-gray-700 dark:text-gray-400">
                                                            <td className="px-4 py-3">
                                                                <div className="flex items-center text-sm">
                                                                    <Avatar className="mr-3">
                                                                        <AvatarImage src={`https://i.pravatar.cc/150?u=${request.email}`} />
                                                                        <AvatarFallback>{request.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                                                    </Avatar>
                                                                    <div>
                                                                        <p className="font-semibold">{request.name}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                {request.email}
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                {request.department}
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                {request.requestedOn}
                                                            </td>
                                                            <td className="px-4 py-3 text-sm">
                                                                <div className="flex space-x-2">
                                                                    <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                                                                        <CheckCircle className="h-4 w-4 mr-1" /> Approve
                                                                    </Button>
                                                                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                                                        <XCircle className="h-4 w-4 mr-1" /> Reject
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>

            {/* Create User Modal */}
            <Dialog open={isCreateUserModalOpen} onOpenChange={setIsCreateUserModalOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New User</DialogTitle>
                        <DialogDescription>
                            Add a new official to the system. They'll receive an email with login instructions.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                                Email
                            </Label>
                            <Input id="email" type="email" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="department" className="text-right">
                                Department
                            </Label>
                            <Select>
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select a department" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="finance">Finance</SelectItem>
                                    <SelectItem value="hr">Human Resources</SelectItem>
                                    <SelectItem value="it">IT</SelectItem>
                                    <SelectItem value="marketing">Marketing</SelectItem>
                                    <SelectItem value="operations">Operations</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Create User</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}