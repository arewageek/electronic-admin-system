"use client"

import Auth from '@/components/layout/Auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <Auth title="Login">
            <form>
                <div className='w-full flex flex-col gap-y-5'>
                    <Label className='flex gap-y-1 flex-col'>
                        <span>
                            Email
                        </span>
                        <div className='flex border-[1.5px] rounded border-gray-800'>
                            <Input type='email' className='border-0 focus-visible:ring-0' />
                            <div className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                <FaEnvelope />
                            </div>
                        </div>
                    </Label>



                    <Label className='flex gap-y-1 flex-col'>
                        <span>
                            Password
                        </span>
                        <div className='flex border-[1.5px] rounded border-gray-800'>
                            <Input type={showPassword ? "text" : "password"} className='border-0 focus-visible:ring-0' />
                            <div onClick={() => setShowPassword(prev => !prev)} className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </Label>


                    <Button className='bg-black py-6 hover:bg-black/90 transition'>
                        Sign In
                    </Button>

                    <div>
                        <div className='text-gray-600 text-sm'>
                            New here? <Link href="/register" className='text-black font-medium'>Create an account</Link>
                        </div>
                    </div>
                </div>
            </form>
        </Auth>
    )
}

export default LoginPage