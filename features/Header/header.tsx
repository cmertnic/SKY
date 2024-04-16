'use client'
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";
import style from './header.module.scss'
import Image from "next/image";
import { useState } from "react";
const Header = () => {
    return (

            <header className={style.header}>
                <div className={style.header_row}>
                  <ul>
                    <li><Link href="/Design_About_Us">About</Link></li>
                    <li><Link href="/main">Shop</Link></li>
                    <li><Link href="/main">Contact</Link></li>
                  </ul>
                  <div className={style.search_profile}>
                  <svg className={style.svg} width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.14015 17.5745L6.10711 17.325L5.14015 17.5745ZM5.14015 10.9689L6.10711 11.2184L5.14015 10.9689ZM25.7434 10.9689L26.7104 10.7194L26.7104 10.7194L25.7434 10.9689ZM25.7434 17.5745L26.7104 17.824L25.7434 17.5745ZM19.0748 23.6368L18.8666 22.6602L19.0748 23.6368ZM11.8087 23.6368L11.6004 24.6135L11.8087 23.6368ZM11.8087 4.90659L11.6004 3.92992L11.6004 3.92992L11.8087 4.90659ZM19.0748 4.90659L19.2831 3.92992L19.2831 3.92992L19.0748 4.90659ZM28.0152 27.0517C28.4233 27.4227 29.0549 27.3926 29.4259 26.9845C29.7969 26.5764 29.7668 25.9448 29.3587 25.5738L28.0152 27.0517ZM6.10711 17.325C5.58881 15.3163 5.58881 13.2271 6.10711 11.2184L4.17318 10.7194C3.57043 13.0555 3.57043 15.488 4.17318 17.824L6.10711 17.325ZM24.7764 11.2184C25.2947 13.2271 25.2947 15.3163 24.7764 17.325L26.7104 17.824C27.3131 15.488 27.3131 13.0555 26.7104 10.7194L24.7764 11.2184ZM18.8666 22.6602C16.6143 23.1404 14.2693 23.1404 12.017 22.6602L11.6004 24.6135C14.1274 25.1523 16.7562 25.1523 19.2831 24.6135L18.8666 22.6602ZM12.017 5.88326C14.2693 5.40297 16.6143 5.40297 18.8666 5.88326L19.2831 3.92992C16.7562 3.39107 14.1274 3.39107 11.6004 3.92992L12.017 5.88326ZM12.017 22.6602C9.0372 22.0247 6.77857 19.9273 6.10711 17.325L4.17318 17.824C5.05403 21.2378 7.96254 23.8377 11.6004 24.6135L12.017 22.6602ZM19.2831 24.6135C22.921 23.8377 25.8295 21.2378 26.7104 17.824L24.7764 17.325C24.105 19.9273 21.8464 22.0247 18.8666 22.6602L19.2831 24.6135ZM18.8666 5.88326C21.8464 6.51869 24.105 8.61613 24.7764 11.2184L26.7104 10.7194C25.8295 7.30564 22.921 4.70568 19.2831 3.92992L18.8666 5.88326ZM11.6004 3.92992C7.96254 4.70568 5.05403 7.30564 4.17318 10.7194L6.10711 11.2184C6.77857 8.61613 9.0372 6.51869 12.017 5.88326L11.6004 3.92992ZM23.1354 22.6155L28.0152 27.0517L29.3587 25.5738L24.4789 21.1377L23.1354 22.6155Z" fill="white" />
</svg>
<svg className={style.svg} width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.50729 21.5269L5.59654 21.9365L5.59654 21.9365L6.50729 21.5269ZM6.04525 14.7471L5.0885 14.4609L5.0885 14.4609L6.04525 14.7471ZM26.5343 14.7471L27.4911 14.4609L27.4911 14.4609L26.5343 14.7471ZM26.0722 21.5269L25.1615 21.1172L25.1615 21.1172L26.0722 21.5269ZM19.0013 26.1222L18.8614 25.1334L18.8614 25.1334L19.0013 26.1222ZM13.5782 26.1222L13.4383 27.111L13.4383 27.111L13.5782 26.1222ZM11.0735 10.317L10.8928 9.33482L11.0735 10.317ZM21.5061 10.317L21.3254 11.2991L21.3254 11.2991L21.5061 10.317ZM12.5812 25.9812L12.7211 24.9924L12.7211 24.9924L12.5812 25.9812ZM6.63098 21.8019L7.54173 21.3922L7.54173 21.3922L6.63098 21.8019ZM19.9983 25.9812L20.1382 26.97L20.1382 26.97L19.9983 25.9812ZM25.9485 21.8019L26.8593 22.2115L26.8593 22.2115L25.9485 21.8019ZM26.4324 14.4064L25.4756 14.6926L25.4756 14.6926L26.4324 14.4064ZM6.14716 14.4064L7.10391 14.6926L7.10391 14.6926L6.14716 14.4064ZM20.5207 10.6079L19.6216 10.1733L19.6216 10.1733L20.5207 10.6079ZM19.3379 10.7601C19.0979 11.2567 19.3059 11.8538 19.8024 12.0938C20.299 12.3338 20.8961 12.1259 21.1361 11.6293L19.3379 10.7601ZM12.0589 10.6079L12.958 10.1733L12.958 10.1733L12.0589 10.6079ZM11.4434 11.6293C11.6834 12.1259 12.2806 12.3338 12.7771 12.0938C13.2737 11.8538 13.4816 11.2567 13.2416 10.7601L11.4434 11.6293ZM15.2817 4.61423L15.4348 5.60106L15.4348 5.60106L15.2817 4.61423ZM15.4381 4.58997L15.285 3.60314L15.285 3.60314L15.4381 4.58997ZM17.1414 4.58996L16.9883 5.57679L16.9883 5.57679L17.1414 4.58996ZM17.2978 4.61423L17.4509 3.62741L17.4509 3.62741L17.2978 4.61423ZM20.8507 7.60911L21.8213 7.37451L21.8213 7.37451L20.8507 7.60911ZM11.7289 7.60911L12.6996 7.84372L12.6996 7.84372L11.7289 7.60911ZM19.8584 24.9924L18.8614 25.1334L19.1412 27.111L20.1382 26.97L19.8584 24.9924ZM13.7181 25.1334L12.7211 24.9924L12.4414 26.97L13.4383 27.111L13.7181 25.1334ZM25.4756 14.6926L25.5775 15.0333L27.4911 14.4609L27.3892 14.1202L25.4756 14.6926ZM25.1615 21.1172L25.0378 21.3922L26.8593 22.2115L26.983 21.9365L25.1615 21.1172ZM7.54173 21.3922L7.41805 21.1172L5.59654 21.9365L5.72022 22.2115L7.54173 21.3922ZM7.00201 15.0333L7.10391 14.6926L5.1904 14.1202L5.0885 14.4609L7.00201 15.0333ZM7.41805 21.1172C6.54325 19.1722 6.39988 17.0464 7.00201 15.0333L5.0885 14.4609C4.34719 16.9394 4.52723 19.559 5.59654 21.9365L7.41805 21.1172ZM25.5775 15.0333C26.1797 17.0464 26.0363 19.1722 25.1615 21.1172L26.983 21.9365C28.0523 19.559 28.2324 16.9394 27.4911 14.4609L25.5775 15.0333ZM18.8614 25.1334C17.1583 25.3744 15.4212 25.3744 13.7181 25.1334L13.4383 27.111C15.327 27.3782 17.2525 27.3782 19.1412 27.111L18.8614 25.1334ZM11.2541 11.2991C14.5741 10.6884 18.0054 10.6884 21.3254 11.2991L21.6868 9.33482C18.1279 8.68013 14.4517 8.68013 10.8928 9.33482L11.2541 11.2991ZM12.7211 24.9924C10.3165 24.6522 8.37538 23.2457 7.54173 21.3922L5.72022 22.2115C6.87378 24.7762 9.45734 26.5478 12.4414 26.97L12.7211 24.9924ZM20.1382 26.97C23.1222 26.5478 25.7057 24.7763 26.8593 22.2115L25.0378 21.3922C24.2041 23.2457 22.263 24.6522 19.8584 24.9924L20.1382 26.97ZM21.3254 11.2991C23.4184 11.6842 24.9823 13.043 25.4756 14.6926L27.3892 14.1202C26.6477 11.6414 24.3965 9.83331 21.6868 9.33482L21.3254 11.2991ZM10.8928 9.33482C8.18302 9.83331 5.93183 11.6414 5.1904 14.1202L7.10391 14.6926C7.59729 13.043 9.16115 11.6842 11.2541 11.2991L10.8928 9.33482ZM19.6216 10.1733L19.3379 10.7601L21.1361 11.6293L21.4198 11.0425L19.6216 10.1733ZM11.1598 11.0425L11.4434 11.6293L13.2416 10.7601L12.958 10.1733L11.1598 11.0425ZM15.4348 5.60106L15.5912 5.57679L15.285 3.60314L15.1286 3.62741L15.4348 5.60106ZM16.9883 5.57679L17.1447 5.60106L17.4509 3.62741L17.2945 3.60314L16.9883 5.57679ZM19.88 7.84372C20.0677 8.62046 19.9808 9.43021 19.6216 10.1733L21.4198 11.0425C21.9764 9.89105 22.1197 8.60883 21.8213 7.37451L19.88 7.84372ZM10.7582 7.37451C10.4599 8.60883 10.6032 9.89105 11.1598 11.0425L12.958 10.1733C12.5988 9.43021 12.5118 8.62046 12.6996 7.84372L10.7582 7.37451ZM15.5912 5.57679C16.0531 5.50513 16.5265 5.50513 16.9883 5.57679L17.2945 3.60314C16.6298 3.49999 15.9498 3.49999 15.285 3.60314L15.5912 5.57679ZM21.8213 7.37451C21.3397 5.38167 19.556 3.95402 17.4509 3.62741L17.1447 5.60106C18.5921 5.82564 19.62 6.768 19.88 7.84372L21.8213 7.37451ZM12.6996 7.84372C12.9596 6.768 13.9874 5.82564 15.4348 5.60106L15.1286 3.62741C13.0236 3.95402 11.2399 5.38167 10.7582 7.37451L12.6996 7.84372Z" fill="white" />
</svg>
<svg className={style.svg} width="33" height="30" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_2001_1356)">
    <path d="M7.55576 26.34C7.55576 23.127 9.81577 20.3902 12.8872 19.8838L13.1638 19.8382C15.6233 19.4327 18.1294 19.4327 20.5888 19.8382L20.8655 19.8838C23.9369 20.3902 26.1969 23.127 26.1969 26.34C26.1969 27.7288 25.1071 28.8546 23.7627 28.8546H9.98993C8.64558 28.8546 7.55576 27.7288 7.55576 26.34Z" stroke="white" stroke-width="1.99727" />
    <path d="M22.3134 10.1303C22.3134 13.0258 19.8791 15.3731 16.8764 15.3731C13.8736 15.3731 11.4394 13.0258 11.4394 10.1303C11.4394 7.23474 13.8736 4.88745 16.8764 4.88745C19.8791 4.88745 22.3134 7.23474 22.3134 10.1303Z" stroke="white" stroke-width="1.99727" />
  </g>
  <defs>
    <clipPath id="clip0_2001_1356">
      <rect width="31.9563" height="29.0511" fill="white" transform="translate(0.898071 0.892944)" />
    </clipPath>
  </defs>
</svg>
                  </div>
                </div>
            </header>

    )
}

export default Header;