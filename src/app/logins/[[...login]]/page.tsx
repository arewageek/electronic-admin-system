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
import { SignIn } from '@clerk/nextjs'

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

        <div className='h-screen w-screen flex items-center justify-center'>
            <SignIn />
        </div>
    )
}

export default LoginPage