import { TUpload, fetchUploads } from '@/actions/uploads.actions'
import React, { useEffect, useState } from 'react'

const useUploads = () => {
    const [uploads, setUploads] = useState<TUpload[]>()

    useEffect(() => {
        const syncUploads = async () => {
            const response = await fetchUploads()
            const files = response.uploads

            setUploads(files)
            console.log({ files })
        }
        syncUploads()
    }, [])

    return { uploads }
}

export default useUploads