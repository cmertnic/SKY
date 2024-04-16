'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import Man_IN_SNOW from "@/public_img/Our_Gallery/Man_IN_SNOW.png";
import Man_and_yellow_skate from "@/public_img/Our_Gallery/Man_and_yellow_skate.png";
import Man_and_green_skate from "@/public_img/Our_Gallery/Man_and_green_skate.png";
import { ROUTER } from "@/router/router.enum";
const FREE_SHAPING = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <h2>Our Gallery</h2>
        <div className={style.Left}>
          <Image className={style.img} src={Man_IN_SNOW} alt='Man_IN_SNOW' />
        </div>
        <div className={style.Right}>
          <Image src={Man_and_yellow_skate} alt='Man_and_yellow_skate' />
          <Image src={Man_and_green_skate} alt='Man_and_green_skate' />
        </div>
      </div>
    </div>

  );
};

export default FREE_SHAPING;