"use client"

import  Image  from "next/image"

interface DashboardHeaderProps {
    heading: string
    src?: string
    text?: string
    children?: React.ReactNode
}

export function DashboardHeader({
    heading,
    text,
    src,
    children
}: DashboardHeaderProps) {

    return (
        <header className=" inset-x-0 top-0 z-50 ring-2 bg-primary">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">{text}</span>
                        {src&& <Image
                            className="h-10 w-auto"
                            src={src}
                            width={30}
                            height={30}
                            alt=""
                        />
                        }
                    </a>
                </div>

                <div className=" lg:flex lg:gap-x-12">
                    
                        <h1  className=" text-2xl font-bold text-white ">
                            {heading}
                        </h1>
                
                </div>
                <div className=" lg:flex lg:flex-1 lg:justify-end">
                  {children}
                </div>
            </nav>

        </header>
    )
}