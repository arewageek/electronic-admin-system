"use client"

import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { FaPenAlt } from 'react-icons/fa'
import { useAuthStore } from '@/store/auth.store'

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat itaque quod eligendi consectetur laudantium, corrupti doloremque tenetur, officiis quisquam animi minus ipsa pariatur consequatur id omnis, velit in maxime."

const PersonalInformation = () => {

    const { name, email, tel, bio } = useAuthStore()
    return (
        <Card>
            <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-bold'>Personal Information</h3>
                    <Button variant="outline" className='border-[1.5px] flex items-center justify-center gap-x-2'>
                        Edit <FaPenAlt />
                    </Button>
                </div>
                <div className='mt-4 w-full'>
                    <div className='flex flex-col lg:flex-row w-full justify-between flex-wrap overflow-x-auto'>
                        <PersonalInfoBlock title='First Name' content={name} />
                        <PersonalInfoBlock title='Email' content={email} />
                        <PersonalInfoBlock title='Phone' content={tel} />
                        <PersonalInfoBlock title='Bio' content={bio} full={true} />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export const PersonalInfoBlock = ({ title, content, full }: { title: string, content: string, full?: boolean }) => {
    return (
        <div className={`flex flex-col w-full ${full || "lg:w-1/2"} p-3`}>
            <h3 className='text-gray-400 text-sm font-semibold'>
                {title}
            </h3>
            <p className="text-sm lg:text-lg text-gray-900">
                {content}
            </p>
        </div>
    )
}

export default PersonalInformation