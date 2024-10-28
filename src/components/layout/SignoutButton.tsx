"use client"
import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'
import { signout } from '@/actions/auth.actions'

const SignoutButton = () => {
    const handleSignout = async () => {
        await signout()
    }

    return (
        <Button onClick={handleSignout} variant="ghost" size="icon" asChild className='p-1 cursor-pointer'>
            <LogOut className="h-5 w-5" />
        </Button>
    )
}

export default SignoutButton