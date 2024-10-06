import { verifySession } from '@/actions/user.actions'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Auth = ({ children }: Props) => {

    return (
        <div className='h-screen w-screen bg-gray-200 text-gray-800 flex items-center justify-center px-10'>
            {children}
        </div>
    )
}

export default Auth