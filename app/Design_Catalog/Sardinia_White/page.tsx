'use client'
import style from './Block.module.scss'
import Image from "next/image";
import Link from "next/link";
import Big_skate from "@/public_img/Design_Catalog/Sardinia_White/Big_skate.png";
import Small_skate from "@/public_img/Design_Catalog/Sardinia_White/Small_skate.png";
import Heart from "@/public_img/Design_Catalog/Sardinia_White/Heart.png";
import Header from "@/features/Header_red/header";
import { ROUTER } from "@/router/router.enum";
import React, { useState } from 'react';
const Sardinia_White = () => {
  const [number, setNumber] = useState(0);
  const maxNumber = 100;

  const decreaseNumber = () => {
    setNumber(prevNumber => (prevNumber - 1 >= 0 ? prevNumber - 1 : 0));
  };

  const increaseNumber = () => {
    setNumber(prevNumber => (prevNumber + 1 <= maxNumber ? prevNumber + 1 : prevNumber));
  };
  const [color, setColor] = useState('white');

  const changeColor = () => {
    const newColor = color === 'white' ? 'red' : 'white';
    setColor(newColor);
  };
  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <Header />
        <div className={style.Image_and_text}>
          <div className={style.Images}>
            <div>
              <Image src={Big_skate} alt='Big_skate' />
            </div>
            <div className={style.Small_Images}>
              <Image src={Small_skate} alt='Small_skate' />
              <Image src={Small_skate} alt='Small_skate' />
              <Image src={Small_skate} alt='Small_skate' />
            </div>
          </div>
          <div className={style.Text}>
            <h2>Sardinia White</h2>
            <h3>199,50 </h3>
            <p>Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend </p>
            <div className={style.Buttons}>
              <div className={style.counter}>
                <div className={style.minus} onClick={decreaseNumber} />
                <p>{number}</p>
                <div className={style.plus} onClick={increaseNumber}>
                  <div className={style.top} />
                  <div className={style.left} />
                </div>
              </div>
              <button>Add to cart</button>
              <div className={style.heart}onClick={changeColor}>
                <svg style={{ backgroundColor: 'transparent' }}  width="26" height="26" viewBox="0 0 54 48"  fill={color} xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M27 8.00047C22.2016 2.40841 14.1834 0.680226 8.17128 5.80087C2.15915 10.9215 1.31272 19.4829 6.03408 25.5392C9.95957 30.5744 21.8395 41.1944 25.7331 44.6317C26.1685 45.0162 26.3864 45.2085 26.6405 45.284C26.8621 45.3498 27.1048 45.3498 27.3267 45.284C27.5808 45.2085 27.7984 45.0162 28.2341 44.6317C32.1277 41.1944 44.0075 30.5744 47.9331 25.5392C52.6544 19.4829 51.9112 10.8676 45.7957 5.80087C39.6803 0.734093 31.7984 2.40841 27 8.00047Z" stroke="black" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>

            </div>
            <ul>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>Lorem ipsum dolor sit amet,</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Sardinia_White;