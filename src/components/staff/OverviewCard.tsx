import React from 'react'
import { FaFileImage, FaImage } from 'react-icons/fa'

const OverviewCard = ({ type, count, classes }: { type: "image" | "videos" | "documents" | "others", count: number, classes: string }) => {
    return (
        <div className='p-3'>
            <div className='bg-white p-4 py-8 rounded-xl flex flex-col gap-y-1 items-center justify-center'>
                <div className='text-4xl'>
                    <FaFileImage className={classes} />
                </div>
                <div className='text-center'>
                    <div className='capitalize font-semibold text-black/80'>
                        {type}
                    </div>
                    <div className='text-sm text-gray-500'>
                        {count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard