"use client"

import { createAccount } from '@/actions/user.actions'
import Auth from '@/components/layout/Auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaAt, FaEnvelope, FaEye, FaEyeSlash, FaPhone, FaPhoneAlt, FaUser, FaUserAlt } from "react-icons/fa"
import { toast } from 'react-toastify'

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)

        if (password != cPassword) {
            setPasswordError("Password Not Match")
            setLoading(false)
            return;
        }
        const created = await createAccount({ name, email, tel, password })
        console.log({ created })

        if (created == 400) {
            toast.error("Email already exists")
            setLoading(false)
        }
        else if (created == 201) {
            toast.success("Account created")
            router.push("/login")
        }
        else {
            toast.error("An error occurred creating your account")
            setLoading(false)
        }
    }

    return (
        <>
            <Auth title="Register">
                <form onSubmit={handleSubmit}>
                    <div className='w-full flex flex-col gap-y-5'>
                        <Label className='flex gap-y-1 flex-col'>
                            <span>
                                Name
                            </span>
                            <div className='flex border-[1.5px] rounded border-gray-800'>
                                <Input onChange={e => setName(e.target.value)} type='text' className='border-0 focus-visible:ring-0' />
                                <div className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                    <FaUserAlt />
                                </div>
                            </div>
                        </Label>

                        <Label className='flex gap-y-1 flex-col'>
                            <span>
                                Email
                            </span>
                            <div className='flex border-[1.5px] rounded border-gray-800'>
                                <Input onChange={e => setEmail(e.target.value)} type='email' className='border-0 focus-visible:ring-0' />
                                <div className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                    <FaEnvelope />
                                </div>
                            </div>
                        </Label>

                        <Label className='flex gap-y-1 flex-col'>
                            <span>
                                Phone Number
                            </span>
                            <div className='flex border-[1.5px] rounded border-gray-800'>
                                <Input onChange={e => setTel(e.target.value)} type='text' className='border-0 focus-visible:ring-0' />
                                <div className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                    <FaPhoneAlt />
                                </div>
                            </div>
                        </Label>

                        <Label className='flex gap-y-1 flex-col'>
                            <span>
                                Password
                            </span>
                            <div className='flex border-[1.5px] rounded border-gray-800'>
                                <Input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className='border-0 focus-visible:ring-0' />
                                <div onClick={() => setShowPassword(prev => !prev)} className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </Label>

                        {passwordError && <div>
                            <p className='text-red-500 text-sm font-medium'>
                                {passwordError}
                            </p>
                        </div>}

                        <Label className='flex gap-y-1 flex-col'>
                            <span>
                                Confirm Password
                            </span>
                            <div className='flex border-[1.5px] rounded border-gray-800'>
                                <Input onChange={e => setCPassword(e.target.value)} type={showPassword ? "text" : "password"} className='border-0 focus-visible:ring-0' />
                                <div onClick={() => setShowPassword(prev => !prev)} className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                        </Label>

                        <Button className='bg-black py-6 hover:bg-black/90 transition'>
                            {loading ? <div>
                                <div className='w-5 h-5 border-white border-2 border-t-0 border-l-0 rounded-full animate-spin'></div>
                            </div>
                                : "Create Account"}
                        </Button>

                        <div>
                            <div className='text-gray-600 text-sm'>
                                Already have an account? <Link href="/login" className='text-black font-medium'>Sign me in</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </Auth>
        </>

    )
}

export default RegisterPage