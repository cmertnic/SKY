'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import style from './footer.module.scss'
import Image from "next/image";
import { useState } from "react";
const Footer = () => {
    return (

        <footer className={style.footer}>
            <div className={style.footer_row}>
                <div className={style.Email}>
                    <input type="email" name="email" placeholder="Your email address" />
                    <svg className={style.Image} width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8349 1.7143C27.1515 2.03755 27.2588 2.51739 27.1109 2.94887L18.9509 26.7489C18.793 27.2094 18.3757 27.5249 17.8981 27.5448C17.4205 27.5647 16.9795 27.2849 16.7853 26.8391L12.3046 16.5473L2.22286 11.9732C1.78609 11.775 1.51207 11.3248 1.53155 10.8372C1.55104 10.3497 1.86007 9.92375 2.3112 9.76256L25.6255 1.43256C26.0482 1.28155 26.5182 1.39105 26.8349 1.7143ZM14.5781 15.9093L17.7216 23.1296L23.2228 7.08452L14.5781 15.9093ZM21.5742 5.40161L5.85664 11.0174L12.9296 14.2264L21.5742 5.40161Z" fill="white" />
                    </svg>
                </div>
                <div className={style.Company}>
                   <h3>Company</h3>
                    <p><Link href="/Design_About_Us">About us</Link></p>
                    <p><Link href="/main">Blog</Link></p>
                    <p><Link href="/main">Contact us</Link></p>
                    <p><Link href="/main">Pricing</Link></p>
                    <p><Link href="/main">Testimonials</Link></p>
                </div>
                <div className={style.Support}>
                <h3>Support</h3>
                <p><Link href="/main">Help center</Link></p>
                <p><Link href="/main">Terms of service</Link></p>
                <p><Link href="/main">Legal</Link></p>
                <p><Link href="/main">Privacy policy</Link></p>
                <p><Link href="/main">Status</Link></p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;