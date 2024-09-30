"use client"

import { authenticate } from '@/actions/user.actions'
import Auth from '@/components/layout/Auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/auth.store'

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const { updateInfo } = useAuthStore()

    const handleSignin = async (e: any) => {
        // prevent page from reloading
        e.preventDefault()
        // change form loading state to true
        setIsLoading(true)

        // user signin in implementation
        const auth = await authenticate({ email, password })

        if (auth.status == 404) {
            // display an error notification if email or password is wrong
            toast.error(auth.message)
            // change loading state
            setIsLoading(false)
        }
        else if (auth.status == 200) {
            // return a notification to user if login is successful
            toast.success(auth.message)
            // create a client cookie for session id
            Cookies.set('sessionId', auth.sessionId!, { path: '' })
            // add user's information to zustand state
            updateInfo(auth.user!)
            // redirect user to appropriate dashboard
            router.push(`/${auth.user?.role}`)
        }
        else {
            // display an error notification if authentication state is unknown
            toast.error(auth.message)
            // change loading state
            setIsLoading(false)
        }
    }

    return (
        <Auth title="Login">
            <form onSubmit={handleSignin}>
                <div className='w-full flex flex-col gap-y-5'>
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
                            Password
                        </span>
                        <div className='flex border-[1.5px] rounded border-gray-800'>
                            <Input onChange={e => setPassword(e.target.value)} type={showPassword ? "text" : "password"} className='border-0 focus-visible:ring-0' />
                            <div onClick={() => setShowPassword(prev => !prev)} className='flex items-center rounded-r justify-center p-3 bg-gray-300'>
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </Label>


                    <Button className='bg-black py-6 hover:bg-black/90 transition'>
                        {isLoading ? <div>
                            <div className='w-5 h-5 border-white border-2 border-t-0 border-l-0 rounded-full animate-spin'></div>
                        </div>
                            : "Sign In"}
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