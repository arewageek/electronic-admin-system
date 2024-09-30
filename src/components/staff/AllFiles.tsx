import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { FaExpand, FaExpandAlt, FaFileImage } from 'react-icons/fa'

const AllFiles = () => {
    const files = [
        { name: "Arewa Resume", type: "document", size: '304kb', modified: "14 mins ago" },
        { name: "Signout Photo", type: "image", size: '23mb', modified: "2 hours ago" },
        { name: "Defense Video", type: "video", size: '120mb', modified: "4 hours ago" },
    ]

    return (
        <div className='mt-4'>
            <h3 className='text-sm font-bold'>
                All Files
            </h3>
            <div className='mt-4'>
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

                            <TableHead className=''>
                                Last Modified
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {files.map(file => (
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
                                    {file.size}
                                </TableCell>

                                <TableCell className=''>
                                    {file.modified}
                                </TableCell>

                                <TableCell className='font-extrabold flex items-center justify-center cursor-pointer'>
                                    <div className='p-2 rounded bg-white'>
                                        <FaExpandAlt />
                                    </div>
                                </TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default AllFiles