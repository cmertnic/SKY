
'use client'
import style from "@/widgets/map/map.module.scss";
import Image from "next/image";
import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
const MAPS = () => {

    return (

        <YMaps>
            <div className={style.Ymap} >
                <Map defaultState={{ center: [48.589471, 38.001988], zoom: 21 }} className={style.map} />
            </div>
        </YMaps>

    );
};

export default MAPS;