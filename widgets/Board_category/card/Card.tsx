"use client"
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "@/widgets/Board_category/card/Card.module.scss";
interface CardProps {
    img: StaticImageData;
    title: string;
    small_text: string;
    text: string;
}
const Card = ({ img, title, small_text, text }: CardProps) => {

    return (

        <div className={style.Card}>

            <Image className={style.img} src={img} alt={text} />
            <div className={style.Cube}/>
            <div className={style.textdiv}>
                <div>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.text}>
                        <div className={style.small_text}>
                            {small_text}
                        </div>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;