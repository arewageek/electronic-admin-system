import { TUpload, fetchUploads } from '@/actions/uploads.actions'
import { useAuth } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useUploads = () => {
    const [uploads, setUploads] = useState<TUpload[]>()

    const { userId } = useAuth()

    useEffect(() => {
        const syncUploads = async () => {
            const response = await fetchUploads(userId!)
            const files = response.uploads

            setUploads(files)
            console.log({ files })
        }
        syncUploads()
    }, [])

    return { uploads }
}

export default useUploads