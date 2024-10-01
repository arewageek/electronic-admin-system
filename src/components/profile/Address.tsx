import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { PersonalInfoBlock } from './Personal'
import { FaPenAlt } from 'react-icons/fa'

const Address = () => {
    return (
        <Card>
            <CardContent className='p-6'>
                <div className='flex items-center justify-between'>
                    <h3 className='font-bold'>Address</h3>
                    <Button variant="outline" className='border-[1.5px] flex items-center justify-center gap-x-2'>
                        Edit <FaPenAlt />
                    </Button>
                </div>
                <div className='mt-4 w-full'>
                    <div className='flex flex-col lg:flex-row w-full justify-between flex-wrap'>
                        <PersonalInfoBlock title='Street' content='Street Name and number' />
                        <PersonalInfoBlock title='City' content='Keffi' />
                        <PersonalInfoBlock title='State' content='Nasarawa State' />
                        <PersonalInfoBlock title='Country' content='Nigeria' />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Address