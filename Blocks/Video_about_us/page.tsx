'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";

const FREE_SHAPING = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <div className={style.Top}>
          <h2>Video about us</h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className={style.Video}>
          <video width="678" height="370" controls preload="none">
            <source src="@/video/skiVideo.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>

  );
};

export default FREE_SHAPING;