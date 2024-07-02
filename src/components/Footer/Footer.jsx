'use client'

import Logo from '../Logo/Logo'
import React from "react";
import Image from 'next/image'

export default function Footer() {
    const links = [
        { href: '/a-propos', txt: 'Notre équipe' },
        { href: '/services', txt: 'Nos services' },
        { href: '/carrieres', txt: 'Carrière' },
        { href: '/cas-clients', txt: 'Nos accompagnements' },
        { href: '/blog', txt: 'Blog' }
    ]

    return (
        <footer className="bg-white text-my_bordeaux-700 px-5 py-12 lg:p-16 flex flex-col gap-16 rounded-t-[50px] w-full">
            <form className="flex flex-wrap gap-4 flex-row items-start justify-between">
                <div>
                    <h2 className="font-medium">Rejoindre la newsletter</h2>
                    <p>Inscrivez-vous à notre infolettre pour être tenu au courant des nouveautés.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 items-stretch justify-start w-full max-w-[500px]">
                    <div className="">
                        {/*<Input type="email" placeholder={"Entrez votre e-mail"}/>*/}
                    </div>
                    {/*<Button variant={"secondary"} text={"S'inscrire à la newsletter"}/>*/}
                </div>
            </form>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-between items-center">
                <Logo darkMode={false} />

                <div className="flex flex-row justify-center items-center flex-wrap gap-4">
                    {links.map(el => (
                        <a key={el.href} className={`text-my_bordeaux-700`} href={el.href}>{el.txt}</a>
                    ))}
                </div>

                <div className="flex flex-row gap-3">
                    <a href="https://www.facebook.com/BicyCompost-103905754798149">
                        <Image alt="" width={24} height={24} src="/Icon/Facebook.svg"></Image>
                    </a>

                    <a href="https://www.instagram.com/roumagnanchatontropmignon/">
                        <Image alt="" width={24} height={24} src="/Icon/insta.svg"></Image>
                    </a>

                    <a href="https://www.facebook.com/BicyCompost-103905754798149">
                        <Image alt="" width={24} height={24} src="/Icon/linkedin.svg"></Image>
                    </a>
                </div>
            </div>

            <hr className="border-t border-t-gray-400 w-full" />

            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                    <Image src={"/esus.png"} width={45} height={45} alt={""} />
                    <span>Agrément ESUS</span>
                </li>

                <li className="flex items-center gap-2">
                    <Image src={"/ess.png"} width={45} height={45} alt={""} />
                    <span>Membre de l&apos;Économie Sociale et Solidaire</span>
                </li>
            </ul>

            <nav className="flex flex-wrap flex-row gap-3 items-center justify-center lg:justify-start">
                <p>© 2024 BicyCompost. Tous droits réservés</p>
                <a className="underline" href="#">Politique de confidentialité</a>
                <a className="underline" href="#">Mentions légales</a>
                <a className="underline" href="#">RGPD</a>
                <a className="underline" href="#">Espace presse</a>
            </nav>
        </footer>
    )
}
