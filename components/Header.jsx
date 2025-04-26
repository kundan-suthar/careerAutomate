
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ChevronDown, FilesIcon, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from "./ui/dropdown-menu"

const Header = () => {

    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href={'/'}>
                    <Image
                        src='/logo.png'
                        width={200}
                        height={60}
                        alt="site logo"
                        className="h-12 py-1 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center gap-2">
                    <SignedIn >
                        <Link href='/dashboard'>
                            <Button variant={"outline"} className={"hover:cursor-pointer"}>
                                <LayoutDashboard />
                                <span className="hidden md:block">Industry insights</span>
                            </Button>
                        </Link>


                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button className={"hover:cursor-pointer"}>
                                    <StarsIcon />
                                    <span className="hidden md:block">Industry insights</span>
                                    <ChevronDown />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    <Link href={'/resume'} className="flex flex-center gap-2 items-center">
                                        <FilesIcon className="h-4 w-4 " />
                                        <span>build resume</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/ai-cover-letter'} className="flex flex-center gap-2 items-center">
                                        <PenBox className="h-4 w-4 " />
                                        <span>Cover letter</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href={'/resume'} className="flex flex-center gap-2 items-center">
                                        <GraduationCap className="h-4 w-4 " />
                                        <span>interview prep</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button className={"hover:cursor-pointer"} variant={"outline"}>Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton

                        />
                    </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header
