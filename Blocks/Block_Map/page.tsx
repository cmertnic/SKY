'use client'
import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Map from "@/widgets/map/map";
import { ROUTER } from "@/router/router.enum";
const FREE_SHAPING = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <div className={style.Map}>
          <Map />
        </div>
        <div className={style.Map_text_block}>
          <div className={style.Map_text_block_row}>
            <div className={style.Text}>
              <h3>Location of our Hotelos</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
            </div>
            <form className={style.Button}>
              <input required type="email" name="email" placeholder='Enter your email' />
              <button>Contact</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FREE_SHAPING;