
import { ReactNode } from 'react'

interface Props {
    title: string,
    children: ReactNode
}

const Auth = ({ title, children }: Props) => {

    // const session = await verifySession()
    // console.log({ session })


    return (
        <div className='h-screen w-screen bg-gray-200 text-gray-800 flex items-center justify-center px-10'>
            <div className='w-full lg:w-1/3 bg-white py-8 px-4 rounded-xl shadow-xl'>
                <h3 className='font-bold text-sm'>
                    {title}
                </h3>
                <div className='mt-4'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Auth