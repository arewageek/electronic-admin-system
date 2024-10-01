"use client"

import React, { ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { verifySession } from '@/actions/user.actions'
import { useAuthStore } from '@/store/auth.store'

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [session, setSession] = useState("")
    const [user, setUser] = useState()

    const { updateInfo } = useAuthStore()

    useEffect(() => {
        const sess = Cookies.get("sessionId")
        sess && setSession(sess)
    }, [])

    useEffect(() => {
        console.log("start")
        console.log({ session })
        retrieveDataFromSession()
        console.log('stop')

        // return () => {
        // }
    }, [session])

    const retrieveDataFromSession = async () => {
        const sessionData = await verifySession(session)
        console.log({ sessionData })
        if (sessionData?.user) {
            const { id, name, email, tel, role, bio } = sessionData.user!

            updateInfo({ id, name, email, tel, role, bio })
        }

    }

    return (
        <div>{children}</div>
    )
}

export default AuthProvider