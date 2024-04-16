'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import flask from "@/public_img/Explore_Our_Product/flask.png";
import linze from "@/public_img/Explore_Our_Product/linze.png";
import skate from "@/public_img/Explore_Our_Product/skate.png";
import { ROUTER } from "@/router/router.enum";
const FREE_SHAPING = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <div className={style.Text}>
          <h2>Explore Our Product</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className={style.Images_group}>
          <div className={style.Left}>
            <div className={style.linze}>
              <Image className={style.Image} src={linze} alt='linze' />
              <div className={style.linze_row}>
                <svg className={style.svg} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0941 1.00007C19.0941 0.586868 18.7575 0.2519 18.3423 0.2519H11.5759C11.1607 0.2519 10.8241 0.586868 10.8241 1.00007C10.8241 1.41328 11.1607 1.74824 11.5759 1.74824H17.5905V7.73362C17.5905 8.14682 17.9271 8.48179 18.3423 8.48179C18.7575 8.48179 19.0941 8.14682 19.0941 7.73362L19.0941 1.00007ZM1.6659 18.6535L18.8739 1.52911L17.8107 0.471035L0.602658 17.5955L1.6659 18.6535Z" fill="#1B1A1F" />
                </svg>
                <div className={style.tovar_text}>
                  <h3>$60</h3>
                  <p>Road helmet</p>
                </div>
              </div>
            </div>
            <div className={style.skate}>
              <Image className={style.Image} src={skate} alt='skate' />
              <div className={style.skate_row}>

                <div className={style.tovar_text}>
                  <p>Tire repair kit</p>
                  <h3>$120</h3>
                </div>
                <svg className={style.svg} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0941 1.00007C19.0941 0.586868 18.7575 0.2519 18.3423 0.2519H11.5759C11.1607 0.2519 10.8241 0.586868 10.8241 1.00007C10.8241 1.41328 11.1607 1.74824 11.5759 1.74824H17.5905V7.73362C17.5905 8.14682 17.9271 8.48179 18.3423 8.48179C18.7575 8.48179 19.0941 8.14682 19.0941 7.73362L19.0941 1.00007ZM1.6659 18.6535L18.8739 1.52911L17.8107 0.471035L0.602658 17.5955L1.6659 18.6535Z" fill="#1B1A1F" />
                </svg>
              </div>
            </div>

          </div>
          <div className={style.Right}>
            <div className={style.flask}>
              <Image className={style.Image} src={flask} alt='flask' />
              <div className={style.flask_row}>
                <svg className={style.svg} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0941 1.00007C19.0941 0.586868 18.7575 0.2519 18.3423 0.2519H11.5759C11.1607 0.2519 10.8241 0.586868 10.8241 1.00007C10.8241 1.41328 11.1607 1.74824 11.5759 1.74824H17.5905V7.73362C17.5905 8.14682 17.9271 8.48179 18.3423 8.48179C18.7575 8.48179 19.0941 8.14682 19.0941 7.73362L19.0941 1.00007ZM1.6659 18.6535L18.8739 1.52911L17.8107 0.471035L0.602658 17.5955L1.6659 18.6535Z" fill="#1B1A1F" />
                </svg>
                <div className={style.tovar_text}>
                  <h3>$60</h3>
                  <p>Bike water bottle</p>
                </div>

              </div>
            </div>
            <button><Link href="/Design_Catalog"> more PRODUCTS</Link></button>
          </div>
        </div>

      </div>
    </div>

  );
};

export default FREE_SHAPING;