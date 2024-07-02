'use client'
import React from 'react';
import "@/app/styles/navbar.css";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";
/*
import Link from 'next/link';
import Button from "@/components/Button/Button";
*/

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { href: '/a-propos', txt: 'Notre équipe' },
        { href: '/services', txt: 'Nos services' },
        { href: '/carrieres', txt: 'Carrière' },
        { href: '/cas-clients', txt: 'Nos accompagnements' },
        { href: '/blog', txt: 'Blog' }
    ];

    return (
        <nav className="navbar">
            <div className="flex flex-row justify-between items-center">
                <Logo />
                <div className="nav-links flex flex-row gap-4">
                    {links.map((el) => (
                        <a
                            key={el.href}
                            href={el.href}
                            className={`text-my_bordeaux-700 ${pathname.startsWith(el.href) ? 'underline' : ''}`}
                        >
                            {el.txt}
                        </a>
                    ))}
                </div>
            </div>
            <div className="nav-connexion hidden lg:flex flex-row justify-center items-stretch gap-3">
                {/* <Button text={"Découvrir mon offre"} variant={"regular"} /> */}
                <a href="/connexion" className="p-1 w-[50px] flex justify-center items-center rounded-[8px] h-[50px] bg-[#9B5975]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M10 0C11.3261 0 12.5979 0.526784 13.5355 1.46447C14.4732 2.40215 15 3.67392 15 5C15 6.32608 14.4732 7.59785 13.5355 8.53553C12.5979 9.47322 11.3261 10 10 10C8.67392 10 7.40215 9.47322 6.46447 8.53553C5.52678 7.59785 5 6.32608 5 5C5 3.67392 5.52678 2.40215 6.46447 1.46447C7.40215 0.526784 8.67392 0 10 0ZM10 12.5C15.525 12.5 20 14.7375 20 17.5V20H0V17.5C0 14.7375 4.475 12.5 10 12.5Z"
                            fill="#472935"
                        />
                    </svg>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
