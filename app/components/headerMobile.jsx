"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/logo.svg";
import Sidebar from "./sidebar";
import { useState } from "react";

export default function MobileHeader() {
const [active, setActive] = useState(false)
    return (
    
<>
            <div className="mobile-header">
 <div className="mobile-header__logo">
          <Image src={Logo} alt="" />
          <h1>Galadio</h1>
        </div>

        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
        onClick={() => setActive(!active)}
        >
<path d="M21.5 5.25H3.5C3.09 5.25 2.75 4.91 2.75 4.5C2.75 4.09 3.09 3.75 3.5 3.75H21.5C21.91 3.75 22.25 4.09 22.25 4.5C22.25 4.91 21.91 5.25 21.5 5.25Z" fill="#292D32"/>
<path d="M21.5 10.25H3.5C3.09 10.25 2.75 9.91 2.75 9.5C2.75 9.09 3.09 8.75 3.5 8.75H21.5C21.91 8.75 22.25 9.09 22.25 9.5C22.25 9.91 21.91 10.25 21.5 10.25Z" fill="#292D32"/>
<path d="M21.5 15.25H3.5C3.09 15.25 2.75 14.91 2.75 14.5C2.75 14.09 3.09 13.75 3.5 13.75H21.5C21.91 13.75 22.25 14.09 22.25 14.5C22.25 14.91 21.91 15.25 21.5 15.25Z" fill="#292D32"/>
<path d="M21.5 20.25H3.5C3.09 20.25 2.75 19.91 2.75 19.5C2.75 19.09 3.09 18.75 3.5 18.75H21.5C21.91 18.75 22.25 19.09 22.25 19.5C22.25 19.91 21.91 20.25 21.5 20.25Z" fill="#292D32"/>
</svg>

            </div>
            <Sidebar active={active} setActive={setActive} />
            </>
    )
}