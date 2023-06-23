"use client"

// import { useRouter } from "next/router"
import { FC, ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import Button from './Button';

interface HeaderProps {
  children: ReactNode,
  className?: string,
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  // const router = useRouter()

  const hundleLogout = () => {

  }
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-violet-900 p-6`, className)}>
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="
          hidden gap-x-2 items-center
          md:flex
          ">
          <div className="flex justify-between items-center gapx-4">
            <>
              <div>
                <Button>
                  sign up
                </Button>
              </div>
            </>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header