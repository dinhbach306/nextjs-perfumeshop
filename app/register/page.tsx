"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex min-h-screen">
            <div className="hidden md:block md:w-1/2 relative bg-amber-50">
                <Image
                    src="/placeholder.svg?height=1080&width=1080&text=Essence"
                    alt="Perfume bottles"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-8 left-8">
                    <Link href="/" className="text-white text-xl font-bold">
                        Essence
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
                <div className="w-full max-w-md space-y-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-black">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to home
                        </Link>
                        <div className="md:hidden text-xl font-bold">Essence</div>
                    </div>

                    <div className="space-y-2 text-center">
                        <h1 className="text-3xl font-bold">Create an account</h1>
                        <p className="text-muted-foreground">Enter your information to get started</p>
                    </div>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-muted-foreground" />
                                    )}
                                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                                </Button>
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                            Create account
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>

                    <Button variant="outline" className="w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="currentColor">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                            <path d="M1 1h22v22H1z" fill="none" />
                        </svg>
                        Sign up with Google
                    </Button>

                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-amber-600 hover:text-amber-700">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
