import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import React from 'react'
import { FaFileAlt, FaFileArchive } from 'react-icons/fa'

const UploadIndicator = () => {
    return (
        <div className='w-full p-10 border-gray-400 border-2 mt-4 rounded-lg bg-white shadow'>
            <div className='w-full flex justify-between'>
                <div className='flex gap-x-4 items-center'>
                    <div className='text-3xl'>
                        <FaFileArchive />
                    </div>
                    <div className=''>
                        <h4 className='font-semibold text-lg'>
                            Thesis for Chidera Nnamani
                        </h4>
                        <p className='text-sm font-medium'>
                            23MB
                        </p>
                    </div>
                </div>
                <div className=''>
                    <Button variant="outline" className='text-xl'>
                        x
                    </Button>
                </div>
            </div>
            <div className='mt-4 px-10 flex items-center justify-between gap-x-4 w-full'>
                <Progress value={70} className='h-4' />
                <p className='text-lg font-bold'>
                    70%
                </p>
            </div>
        </div>
    )
}

export default UploadIndicator