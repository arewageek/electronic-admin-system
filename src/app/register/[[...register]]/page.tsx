import { SignUp } from '@clerk/nextjs'
import React from 'react'

const RegisterPage = () => {
    return (
        <div className='flex items-center justify-center h-screen w-screen bg-gray-200'>
            <SignUp />
        </div>
    )
}

export default RegisterPage