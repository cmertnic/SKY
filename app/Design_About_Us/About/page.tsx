'use client'
import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Big_skate from "@/public_img/Design_Catalog/Sardinia_White/Big_skate.png";
import Small_skate from "@/public_img/Design_Catalog/Sardinia_White/Small_skate.png";
import snowman from "@/public_img/Design_About_Us/About/snowman.png";
import Header from "@/features/Header_red/header";
import { ROUTER } from "@/router/router.enum";

const Sardinia_White = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <Header />
        <div className={style.Image_and_text}>
          <div className={style.text}>
            <div className={style.text_row}>
              <h2>About Us</h2>
              <p>Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo.
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className={style.Image}>
            <Image src={snowman} alt='snowman' />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sardinia_White;