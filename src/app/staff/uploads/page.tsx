import AttachedFiles from '@/components/staff/uploads/AttachedFiles'
import UploadIndicator from '@/components/staff/uploads/UploadIndicator'
import UploadZone from '@/components/staff/uploads/UploadZone'
import React from 'react'

const UploadPage = () => {
    return (
        <div>
            <h3 className='font-bold text-2xl lg:text-4xl'>
                Files and assets
            </h3>
            <p className='text-xs lg:text-lg'>Documents and attachments that have been uploaded by you</p>
            <UploadZone />
            {/* <UploadIndicator /> */}
            <AttachedFiles />
        </div>
    )
}

export default UploadPage