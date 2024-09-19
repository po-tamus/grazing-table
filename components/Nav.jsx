"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect} from "react"
import logo from "@components/assets/yipee.png"

const Nav = () => {

    const [toggleDropdown, setToggleDropdown] = useState(false)
    
    return (

        <nav className="flex-between w-full mb-5 pt-3">

            <Link href={"/"} className="flex gap-2 flex-center">
                <p className="logo_text ml-8">GRAZING TABLE</p>
            </Link>

            
            {/* this is for large devices (navbar is hidden on small devices) */}
            <div className="sm:flex hidden">
                <div className="flex gap-3 md:gap-3">
                        <Link href={"/contact"} className="outline_btn">
                            Contact
                        </Link>

                        <Link href={"/menus"} className="outline_btn">
                            Menus
                        </Link>

                        <Link href={"/about-us"} className="outline_btn">
                            About
                        </Link>
                    </div>
                
            </div>

            {/* mobile device */}
            <div className="sm:hidden flex relative">

                <div className="flex">
                        <Image 
                            alt={"hamburger menu"}
                            src={logo}
                            width={37}
                            height={37}
                            className="rounded-full"
                            onClick = {() => {
                                setToggleDropdown(!toggleDropdown);
                            }}
                            />

                            {/*
                            checks if the dropdown is toggled
                            if so, 
                            */}

                            {toggleDropdown &&
                            <div className="dropdown">
                                <Link 
                                href = "/contact"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                                >
                                    Contact
                                </Link>
                                <Link 
                                href = "/menus"
                                className="dropdown_link"
                                onClick={() => setToggleDropdown(false)}
                                >
                                    Menus
                                </Link>

                                <button
                                    type = "button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut;
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    SIGN TF OUT
                                </button>
                            </div>
                            }
                    </div>
            </div>
        </nav>
    )

}

export default Nav;