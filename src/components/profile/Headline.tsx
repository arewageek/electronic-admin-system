"use client"

import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import { FaPenAlt } from 'react-icons/fa'
import { useAuthStore } from '@/store/auth.store'

const Headline = () => {

    const { name } = useAuthStore()

    return (
        <Card>
            <CardContent className='p-6 flex gap-x-5'>
                <div className='flex flex-col lg:flex-row gap-5 items-center w-full justify-between'>
                    <div className='flex flex-col lg:flex-row text-center lg:text-left items-center justify-start gap-5'>
                        <Image alt="avatar" src={"/images/avatar.avif"} height={200} width={200} className='rounded-full h-[100px] w-[100px]' />
                        <div>
                            <h3 className='font-bold text-xl'>
                                {name}
                            </h3>
                            <p className='font-bold text-gray-500 text-lg'>
                                Lecturer
                            </p>
                            <p className='font-medium text-gray-500 text-sm'>
                                Computer Science Department, Nasarawa State University
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <Button variant="outline" className='border-[1.5px] flex items-center justify-center gap-x-2'>
                            Edit <FaPenAlt />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Headline