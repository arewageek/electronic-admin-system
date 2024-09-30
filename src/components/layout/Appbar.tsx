import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { StaffNavList } from './nav/Staffnav'


const Appbar = () => {
    return (
        <>
            <div className='w-full bg-white shadow py-3 px-5 flex items-center justify-between'>
                <div className='font-semibold'>
                    App bar
                </div>
                <Sheet>
                    <SheetTrigger><HamburgerMenuIcon /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription className='pt-10'>
                                <StaffNavList />
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

            </div>



        </>
    )
}

export default Appbar