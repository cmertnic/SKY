'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import Card_Board_category from '@/widgets/Board_category/card/Card';
import massive_Board_1 from '@/widgets/Board_category/card_massive/massive_Board_category_1';
import massive_Board_2 from '@/widgets/Board_category/card_massive/massive_Board_category_2';
import massive_Board_3 from '@/widgets/Board_category/card_massive/massive_Board_category_3';
import massive_Board_4 from '@/widgets/Board_category/card_massive/massive_Board_category_4';
const FREE_SHAPING = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <div className={style.Block_top}>
          <div className={style.Catalog}>
            <div className={style.Catalog_row}>
              <div className={style.Line} />
              <p>Catalog</p>
            </div >
          </div >
          <h2>Our Most Popular Board category</h2>
          <div className={style.Select}>
            <label className={style.Select_element}>
              <input type="radio" id="All" name="drone" value="option" />
              All
            </label>
            <label className={style.Select_element}>
              <input type="radio" id="Sky" name="drone" value="option" />
              Sky
            </label>
            <label className={style.Select_element}>
              <input type="radio" id="Ski" name="drone" value="option" />
              Ski
            </label>
            <label className={style.Select_element}>
              <input type="radio" id="Boards" name="drone" value="option" />
              Boards
            </label>
            <label className={style.Select_element}>
              <input type="radio" id="Other" name="drone" value="Other" />
              Other
            </label>
          </div>
        </div>
        <div className={style.Cards}>
          {massive_Board_1.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_2.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_3.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_4.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_3.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_4.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_1.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
          {massive_Board_2.map((card, i) => <Card_Board_category img={card.img} title={card.title} text={card.text} small_text={card.small_text} />)}
        </div>
        <button><Link href="/Design_Catalog"> more PRODUCTS</Link></button>
      </div>
    </div>

  );
};

export default FREE_SHAPING;