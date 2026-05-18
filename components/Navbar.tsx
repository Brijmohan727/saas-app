// import Link from "next/link";
// import Image from "next/image";
// import NavItems from "@/components/NavItems";
// import {SignInButton, SignUpButton,SignedIn,SignedOut, UserButton} from "@clerk/nextjs";
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//         <Link href="/">
//         <div className="flex items-center gap-2.5 cursor-pointer">
//           <Image src="/images/logo.svg"
//           alt="logo"
//           width={46}
//           height={44}/>

//         </div>
//         </Link>
//         <div className="flex items-center gap-8">
//           <NavItems />
          
//           <p>Sign In</p>
//         </div>

//     </nav>
//   )
// }

// export default Navbar
// 
// 
"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs"

import NavItems from "@/components/NavItems"

const Navbar = () => {
  const { isSignedIn, isLoaded } = useUser()
  const router = useRouter()

  // Auto redirect if user is not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in")
    }
  }, [isLoaded, isSignedIn, router])

  // Prevent hydration flicker
  if (!isLoaded) return null

  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
          />

          <span className="text-xl font-bold">
            Converso
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-6">
        <NavItems />

        {!isSignedIn ? (
          <div className="flex items-center gap-4">
            <SignInButton mode="modal">
              <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  )
}

export default Navbar