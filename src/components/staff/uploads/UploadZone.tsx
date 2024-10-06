"use client"
import React, { useRef, useState } from 'react'
import { FaFileUpload } from 'react-icons/fa'
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify'
import { getFile, uploadFile } from '@/lib/storage'
import { useAuth } from '@clerk/nextjs'

const UploadZone = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploaded, setUploaded] = useState<string | null>(null);
    const inputRef = useRef(null);

    const { userId } = useAuth()

    const handleUpload = async (file: File) => {
        try {
            const folder = `/${userId}`;
            const imagePath = await uploadFile(file, folder, userId!);
            const imageUrl = await getFile(imagePath);
            setUploaded(imageUrl);

            toast.success("Upload complete")
        }
        catch (error) {
            toast.error("Could not upload file")
            console.log({ error })
        }
    };


    return (
        <Dropzone onDrop={acceptedFiles => {
            console.log({ acceptedFiles })
            handleUpload(acceptedFiles[0])
        }
        }>
            {({ getRootProps, getInputProps }) => (

                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div className='w-full p-10 border-2 border-dashed border-gray-400 mt-4 rounded-lg flex items-center justify-center bg-white shadow cursor-pointer hover:border-purple-500 transition'>
                            <div className='p-4 flex flex-col gap-y-3 text-center w-full'>
                                <div className='flex items-center justify-center text-6xl '>
                                    <FaFileUpload />
                                </div>
                                <p className='text-md lg:text-md'>
                                    <span className='underline font-bold'>Click to upload</span> or drag and drop
                                </p>
                                <p className='text-xs'>
                                    Maximum file size 50MB
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


            )}
        </Dropzone>
    )
}

export default UploadZone