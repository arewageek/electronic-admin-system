"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { FaExpandAlt, FaFileImage, FaSearch } from 'react-icons/fa'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"
import useUploads from '@/hooks/useUploads'
import Link from 'next/link'

// const files = [
//     { name: "Chidera's Resume", type: "document", size: '304kb', modified: "14 mins ago" },
//     { name: "Signout Photo", type: "image", size: '23mb', modified: "2 hours ago" },
//     { name: "Defense Video", type: "video", size: '120mb', modified: "4 hours ago" },
// ]


const AttachedFiles = () => {

    const { uploads } = useUploads()

    return (
        <div className='bg-white shadow mt-4 p-10 rounded-lg'>
            <div className='flex items-center justify-between flex-col lg:flex-row gap-4'>
                <div>
                    <h3 className='font-bold text-2xl'>Attached Files</h3>
                    <p className='text-xs lg:text-lg text-gray-600'>
                        Files and assets that have been attached by you
                    </p>
                </div>
                <div>
                    <Label className='p-1 rounded-xl border-2 border-gray-400 flex items-center'>
                        <FaSearch className='text-gray-500 mx-2 text-xl' />
                        <Input className='focus-visible:ring-0 text-lg text-gray-600 border-0' placeholder='Search' />
                    </Label>
                </div>
            </div>
            <div className='mt-8'>
                <Table>
                    <TableHeader>
                        <TableRow className='text-sm text-gray-400 font-semibold'>
                            <TableHead className='hidden lg:table-cell'>
                                Name
                            </TableHead>

                            <TableHead className="hidden lg:table-cell">
                                Type
                            </TableHead>

                            <TableHead className='hidden lg:table-cell'>
                                File Size
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {uploads?.map(file => (
                            <TableRow className='text-xs' key={crypto.randomUUID()}>
                                <TableCell>
                                    <div className='flex items-center gap-x-2'>

                                        <div className='text-xl text-purple-600 p-2 bg-white rounded-lg'>
                                            <FaFileImage />
                                        </div>
                                        {file.name}
                                    </div>
                                </TableCell>

                                <TableCell className='hidden lg:table-cell capitalize'>
                                    {file.type}
                                </TableCell>

                                <TableCell className='hidden lg:table-cell'>
                                    {parseInt(file.size).toLocaleString()}kb
                                </TableCell>

                                <TableCell className='font-extrabold flex items-center justify-center cursor-pointer'>
                                    <Link href={file.url} className='p-2 rounded bg-white'>
                                        <FaExpandAlt />
                                    </Link>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AttachedFiles