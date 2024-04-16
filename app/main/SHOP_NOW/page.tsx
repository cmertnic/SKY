'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Skate from "@/public_img/main_page/SHOP_NOW/Skate.png";
import Header from "@/features/Header/header";
import { ROUTER } from "@/router/router.enum";
const SHOP_NOW = () => {
  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <Header />
        <div className={style.text_images}>
          <div className={style.Lines}>
            <div className={style.Line} />
            <div className={style.Line2} />
            <div className={style.Line} />
          </div>
          <div className={style.button_and_text}>
            <div className={style.text}>
              <p>We build only the best, customized to your exacting demands</p>
              <h1>SKY & SKI</h1>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
        <svg className={style.svg} width="204" height="68" viewBox="0 0 204 68" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.33334 0L6.50353 2.30328L5.29262 6.03005H1.37405L0.163145 2.30328L3.33334 0Z" fill="white" />
  <path d="M36.6666 0L39.8368 2.30328L38.6259 6.03005H34.7073L33.4964 2.30328L36.6666 0Z" fill="white" />
  <path d="M70 0L73.1702 2.30328L71.9593 6.03005H68.0407L66.8298 2.30328L70 0Z" fill="white" />
  <path d="M103.333 0L106.503 2.30328L105.293 6.03005H101.374L100.163 2.30328L103.333 0Z" fill="white" />
  <path d="M3.33328 30.6667L6.50347 32.97L5.29256 36.6967H1.37399L0.163088 32.97L3.33328 30.6667Z" fill="white" />
  <path d="M36.6665 30.6667L39.8367 32.97L38.6258 36.6967H34.7072L33.4963 32.97L36.6665 30.6667Z" fill="white" />
  <path d="M69.9999 30.6667L73.1701 32.97L71.9592 36.6967H68.0406L66.8297 32.97L69.9999 30.6667Z" fill="white" />
  <path d="M103.333 30.6667L106.503 32.97L105.293 36.6967H101.374L100.163 32.97L103.333 30.6667Z" fill="white" />
  <path d="M3.33328 61.3333L6.50347 63.6366L5.29256 67.3634H1.37399L0.163088 63.6366L3.33328 61.3333Z" fill="white" />
  <path d="M36.6665 61.3333L39.8367 63.6366L38.6258 67.3634H34.7072L33.4963 63.6366L36.6665 61.3333Z" fill="white" />
  <path d="M69.9999 61.3333L73.1701 63.6366L71.9592 67.3634H68.0406L66.8297 63.6366L69.9999 61.3333Z" fill="white" />
  <path d="M103.333 61.3333L106.503 63.6366L105.293 67.3634H101.374L100.163 63.6366L103.333 61.3333Z" fill="white" />
  <path d="M134 0L137.17 2.30328L135.959 6.03005H132.041L130.83 2.30328L134 0Z" fill="white" />
  <path d="M167.333 0L170.504 2.30328L169.293 6.03005H165.374L164.163 2.30328L167.333 0Z" fill="white" />
  <path d="M200.667 0L203.837 2.30328L202.626 6.03005H198.707L197.496 2.30328L200.667 0Z" fill="white" />
  <path d="M134 30.6667L137.17 32.97L135.959 36.6967H132.041L130.83 32.97L134 30.6667Z" fill="white" />
  <path d="M167.333 30.6667L170.504 32.97L169.293 36.6967H165.374L164.163 32.97L167.333 30.6667Z" fill="white" />
  <path d="M200.667 30.6667L203.837 32.97L202.626 36.6967H198.707L197.496 32.97L200.667 30.6667Z" fill="white" />
  <path d="M134 61.3333L137.17 63.6366L135.959 67.3634H132.041L130.83 63.6366L134 61.3333Z" fill="white" />
  <path d="M167.333 61.3333L170.504 63.6366L169.293 67.3634H165.374L164.163 63.6366L167.333 61.3333Z" fill="white" />
  <path d="M200.667 61.3333L203.837 63.6366L202.626 67.3634H198.707L197.496 63.6366L200.667 61.3333Z" fill="white" />
</svg>
        <Image className={style.Image} src={Skate} alt='Skate' />
      </div>
    </div>

  );
};

export default SHOP_NOW;