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
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'


const Appbar = () => {
    return (
        <>
            <div className='w-full bg-white shadow py-3 px-5 flex items-center justify-between'>
                <div className='font-semibold'>
                    EAS
                </div>

                <div className='flex items-center gap-x-5'>

                    <div>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton>
                                <Button className='bg-blue-1 rounded font-bold text-white bg-purple-600'>
                                    Signin
                                </Button>
                            </SignInButton>
                        </SignedOut>
                    </div>

                    <Sheet>
                        <SheetTrigger className='lg:hidden'><HamburgerMenuIcon /></SheetTrigger>
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

            </div>



        </>
    )
}

export default Appbar