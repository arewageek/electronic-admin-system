"use client"
import { } from 'react'
import Cookies from 'js-cookie'

const useAuth = () => {
  const sessionToken = Cookies.get('sessionId')
  console.log(sessionToken)

  return { data: sessionToken }

}

export default useAuth