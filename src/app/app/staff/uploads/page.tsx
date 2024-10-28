"use client";

import { useState } from 'react';
import { Upload, File, X, Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";

export default function UploadsPage() {
    const [dragActive, setDragActive] = useState(false);
    const [files, setFiles] = useState([
        { id: 1, name: 'Q4 Financial Report.pdf', type: 'PDF', size: '2.3 MB', uploadDate: '2023-12-15', status: 'Pending' },
        { id: 2, name: 'Project Proposal.docx', type: 'DOCX', size: '1.5 MB', uploadDate: '2023-12-14', status: 'Approved' },
        { id: 3, name: 'Meeting Minutes.txt', type: 'TXT', size: '0.1 MB', uploadDate: '2023-12-13', status: 'Rejected' },
    ]);
    const [uploadingFiles, setUploadingFiles] = useState<any[]>([]);

    const handleDrag = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(e.dataTransfer.files);
        }
    };

    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            handleFiles(e.target.files);
        }
    };

    const handleFiles = (fileList: any) => {
        const newUploadingFiles = Array.from(fileList).map((file: any) => ({
            id: Date.now() + Math.random(),
            name: file.name,
            progress: 0,
            status: 'Uploading'
        }));
        setUploadingFiles((prev: any) => [...prev, ...newUploadingFiles]);

        // Simulate file upload for each file
        newUploadingFiles.forEach((file: any) => {
            simulateFileUpload(file);
        });
    };

    const simulateFileUpload = (file: any) => {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 10;
            setUploadingFiles((prev: any[]) =>
                prev.map((f: any) =>
                    f.id === file.id ? { ...f, progress: Math.min(progress, 100) } : f
                )
            );

            if (progress >= 100) {
                clearInterval(interval);
                setUploadingFiles((prev: any) =>
                    prev.map((f: any) =>
                        f.id === file.id ? { ...f, status: 'Completed' } : f
                    )
                );
                // Add the completed file to the main files list
                setFiles((prev) => [
                    ...prev,
                    {
                        id: file.id,
                        name: file.name,
                        type: file.name.split('.').pop().toUpperCase(),
                        size: '1.0 MB', // You'd calculate this in a real scenario
                        uploadDate: new Date().toISOString().split('T')[0],
                        status: 'Pending'
                    }
                ]);
                // Remove the file from uploading list after a delay
                setTimeout(() => {
                    setUploadingFiles((prev: any) => prev.filter((f: any) => f.id !== file.id));
                }, 2000);
            }
        }, 500);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">File Uploads</h1>

            <div
                className={`border-2 border-dashed rounded-lg p-8 mb-8 text-center transition-colors ${dragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">Drag and drop your files here, or</p>
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-purple-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 hover:text-purple-500">
                    <span>Select files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} multiple />
                </label>
            </div>

            {uploadingFiles.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Uploading Files</h2>
                    {uploadingFiles.map((file) => (
                        <div key={file.id} className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span>{file.name}</span>
                                <span>{file.status}</span>
                            </div>
                            <Progress value={file.progress} className="w-full" />
                        </div>
                    ))}
                </div>
            )}

            <div className="mb-6 flex justify-between items-center">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search files..."
                        className="pl-10 pr-4 py-2 w-64"
                    />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center">
                            <Filter className="mr-2 h-4 w-4" />
                            Filter
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>All Files</DropdownMenuItem>
                        <DropdownMenuItem>PDF</DropdownMenuItem>
                        <DropdownMenuItem>DOCX</DropdownMenuItem>
                        <DropdownMenuItem>TXT</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>File Name</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Size</TableHead>
                            <TableHead>Upload Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {files.map((file) => (
                            <TableRow key={file.id}>
                                <TableCell className="font-medium">{file.name}</TableCell>
                                <TableCell>{file.type}</TableCell>
                                <TableCell>{file.size}</TableCell>
                                <TableCell>{file.uploadDate}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                    ${file.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                            file.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                                                'bg-yellow-100 text-yellow-800'}`}>
                                        {file.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm">
                                        <File className="h-4 w-4 mr-2" />
                                        View
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                                        <X className="h-4 w-4 mr-2" />
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}