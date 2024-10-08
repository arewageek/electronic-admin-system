"use client"
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { FaExpandAlt, FaFileImage, FaSearch } from 'react-icons/fa'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import useUploads from '@/hooks/useUploads'
import Link from 'next/link'

const AllSubmissions = () => {
    const { uploads } = useUploads()

    return (
        <div className='bg-white shadow mt-4 p-10 rounded-lg'>
            <div className='flex items-center justify-between flex-col lg:flex-row gap-4'>
                <div>
                    <h3 className='font-bold text-2xl'>All Sumissions</h3>
                    <p className='text-xs lg:text-lg text-gray-600'>
                        Documents submitted for my review and approval
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

export default AllSubmissions