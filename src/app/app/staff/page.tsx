"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FileText, Upload, CheckCircle, XCircle, Clock, Search, Bell, LogOut, MoreVertical } from 'lucide-react'

// Mock data for the dashboard
const recentFiles = [
    { id: 1, name: 'Budget Report 2023.pdf', status: 'Approved', date: '2023-04-01' },
    { id: 2, name: 'Project Proposal.docx', status: 'Pending', date: '2023-03-28' },
    { id: 3, name: 'Meeting Minutes.pdf', status: 'Rejected', date: '2023-03-25' },
    { id: 4, name: 'Financial Statement.xlsx', status: 'Approved', date: '2023-03-20' },
];

const fileStatusData = [
    { name: 'Approved', value: 65, color: '#10B981' },
    { name: 'Pending', value: 20, color: '#F59E0B' },
    { name: 'Rejected', value: 15, color: '#EF4444' },
];

export default function Dashboard() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Files</CardTitle>
                                <FileText className="h-4 w-4 opacity-70" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">245</div>
                                <p className="text-xs opacity-70">+20% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
                                <CheckCircle className="h-4 w-4 opacity-70" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">75%</div>
                                <p className="text-xs opacity-70">+5% from last month</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                                <Clock className="h-4 w-4 opacity-70" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">12</div>
                                <p className="text-xs opacity-70">-3 from last week</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>File Status Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={fileStatusData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {fileStatusData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <CardTitle>Recent Files</CardTitle>
                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="text"
                                        placeholder="Search files..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="max-w-sm"
                                    />
                                    <Button size="icon" variant="ghost">
                                        <Search className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="all" className="w-full">
                                <TabsList className="grid w-full grid-cols-4 mb-4">
                                    <TabsTrigger value="all">All Files</TabsTrigger>
                                    <TabsTrigger value="approved">Approved</TabsTrigger>
                                    <TabsTrigger value="pending">Pending</TabsTrigger>
                                    <TabsTrigger value="rejected">Rejected</TabsTrigger>
                                </TabsList>
                                <TabsContent value="all">
                                    <div className="space-y-4">
                                        {recentFiles.filter(file =>
                                            file.name.toLowerCase().includes(searchTerm.toLowerCase())
                                        ).map((file) => (
                                            <div key={file.id} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                                <div className="flex items-center space-x-4">
                                                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full">
                                                        <FileText className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">{file.name}</p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-400">{file.date}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${file.status === 'Approved' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' :
                                                        file.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100' :
                                                            'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                                                        }`}>
                                                        {file.status === 'Approved' && <CheckCircle className="w-3 h-3 mr-1" />}
                                                        {file.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                                                        {file.status === 'Rejected' && <XCircle className="w-3 h-3 mr-1" />}
                                                        {file.status}
                                                    </span>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreVertical className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </TabsContent>
                                {/* Add similar TabsContent for other tabs (approved, pending, rejected) */}
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}