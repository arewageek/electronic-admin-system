"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { handleNewAccountRequest } from '@/actions/auth.actions';
import { toast } from 'react-toastify';

export default function RequestAccess() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [office, setOffice] = useState('');
    const [password, setPassword] = useState('');
    const [tel, setTel] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const res = await handleNewAccountRequest({ name, email, office, password, tel })
            if (!res.success) {
                toast.error(res.message)
                setIsLoading(false)
                return;
            }
            toast.success(res.message)
            return;

        }
        catch (error: any) {
            toast.error(error.message)
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 dark:from-purple-900 dark:via-gray-900 dark:to-blue-900 p-4">
            <Card className="w-full max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold">Request Access</CardTitle>
                        <Link href="/" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 transition-colors">
                            <ArrowLeft className="h-6 w-6" />
                        </Link>
                    </div>
                    <CardDescription>Fill out this form to request access to the File Review System</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                                required
                                className="bg-white/50 dark:bg-gray-700/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                required
                                className="bg-white/50 dark:bg-gray-700/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tel">Phone Number</Label>
                            <Input
                                id="tel"
                                type="tel"
                                value={tel}
                                onChange={(e: any) => setTel(e.target.value)}
                                required
                                className="bg-white/50 dark:bg-gray-700/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="office">Office</Label>
                            <Input
                                id="office"
                                value={office}
                                onChange={(e: any) => setOffice(e.target.value)}
                                required
                                className="bg-white/50 dark:bg-gray-700/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                                required
                                className="bg-white/50 dark:bg-gray-700/50"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4">
                        <Button disabled={isLoading} type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-lg hover:scale-105">
                            {isLoading ? "Loading..." : "Submit Request"}
                        </Button>
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link href="/login" className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 transition-colors">
                                Login
                            </Link>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}