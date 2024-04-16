'use client'
import style from './Block.module.scss'
import Image from "next/image";
import { SetStateAction, useState } from "react";
import Link from "next/link";
import { ROUTER } from "@/router/router.enum";
import Man from "@/public_img/Why_choose_Us/Man.png";
const FREE_SHAPING = () => {

  return (

    <div className={style.Block}  >
      <div className={style.Block_row}>
        <div className={style.Top}>
          <svg width="169" height="53" viewBox="0 0 169 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2001_1516)">
              <path d="M144.427 25.2812V38.5653H148.673V29.7092H164.201V38.5653H168.447V25.2812H144.427ZM148.188 20.9744H164.565C166.87 20.5498 168.508 18.4874 168.993 16.5464H143.76C144.245 18.4874 145.943 20.4892 148.188 20.9744ZM131.507 38.5653C133.63 37.6554 134.782 36.0783 135.267 34.2585H116.16V16.607H111.853V38.5653H131.507ZM80.008 20.9138H95.1725C97.4775 20.2465 99.3579 18.4874 99.8431 16.607H75.8226V29.5879H95.4758V34.1372H80.0686C77.6423 34.8045 75.5799 36.4422 74.5487 38.5653H99.7218V25.2812H80.0686L80.008 20.9138ZM42.6426 20.9744H59.0203C61.3253 20.5498 63.0237 18.4874 63.4483 16.5464H38.1539C38.6392 18.4874 40.3376 20.4892 42.6426 20.9744ZM42.6426 29.6485H59.0203C61.3253 29.2239 63.0237 27.1616 63.4483 25.2205H38.1539C38.6392 27.1616 40.3376 29.1633 42.6426 29.6485ZM42.6426 38.5653H59.0203C61.3253 38.1407 63.0237 36.0783 63.4483 34.1372H38.1539C38.6392 36.0783 40.3376 38.1407 42.6426 38.5653Z" fill="#5E5E5E" />
              <path d="M0 16.607C0.485264 18.5481 2.18369 20.4892 4.42804 20.9744H11.3431L11.707 21.0957V38.5046H16.0137V21.0957L16.3777 20.9744H23.2927C25.5977 20.3678 27.2355 18.5481 27.7207 16.607V16.5464L0 16.607Z" fill="#5E5E5E" />
            </g>
            <defs>
              <clipPath id="clip0_2001_1516">
                <rect width="168.642" height="52.9071" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg width="139" height="53" viewBox="0 0 139 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2001_1517)">
              <path d="M1.33459 13.6489H11.2547C17.5867 13.6489 21.5969 18.7145 21.5969 25.6797C21.5969 29.4789 20.3305 32.856 17.7977 34.9666C16.1092 36.444 13.7874 37.2883 10.8325 37.2883H1.33459V13.6489ZM10.5159 33.1725C15.0539 33.1725 16.7424 30.4287 16.7424 25.7852C16.7424 21.1418 14.7373 17.8702 10.6215 17.8702H6.08358V33.278H10.5159V33.1725ZM22.3356 28.8457C22.3356 23.7801 25.9238 19.8754 31.2004 19.8754C36.4771 19.8754 40.0651 23.7801 40.0651 28.8457C40.0651 33.9112 36.4771 37.816 31.2004 37.816C25.9238 37.816 22.3356 33.8057 22.3356 28.8457ZM35.4217 28.8457C35.4217 25.5741 33.8388 23.2524 31.0949 23.2524C28.351 23.2524 26.768 25.4686 26.768 28.8457C26.768 32.2227 28.2455 34.3334 31.0949 34.3334C33.9443 34.3334 35.4217 32.1172 35.4217 28.8457ZM40.9094 28.8457C40.9094 23.7801 44.181 19.8754 49.3521 19.8754C53.7844 19.8754 56.4227 22.4082 57.056 26.1018H52.6235C52.307 24.6244 51.1461 23.4635 49.5631 23.4635C46.8193 23.4635 45.4473 25.5741 45.4473 28.8457C45.4473 32.0117 46.7137 34.2278 49.4576 34.2278C51.2516 34.2278 52.5181 33.278 52.8346 31.3784H57.267C56.9504 34.9666 54.2066 37.816 49.6687 37.816C44.2865 37.7105 40.9094 33.8057 40.9094 28.8457ZM69.0867 37.2883V35.2832H68.9811C67.8203 36.8662 66.5539 37.7105 64.1266 37.7105C60.3275 37.7105 58.2168 35.2832 58.2168 31.5895V20.2975H62.6492V30.8508C62.6492 32.856 63.4934 33.9112 65.4986 33.9112C67.6092 33.9112 68.8756 32.3283 68.8756 30.1121V20.2975H73.4136V37.1828H69.0867V37.2883ZM95.2588 13.7545H99.7968V17.9758H95.2588V13.7545ZM95.2588 20.2975H99.7968V37.1828H95.2588V20.2975ZM101.591 37.7105H106.023C106.339 38.7657 107.395 39.61 109.4 39.61C111.933 39.61 113.2 38.3437 113.2 36.1274V34.2278H113.094C112.145 35.3887 110.773 36.2329 108.662 36.2329C104.863 36.2329 101.169 33.278 101.169 28.1069C101.169 23.0413 104.229 19.8754 108.45 19.8754C110.561 19.8754 112.145 20.7196 113.094 22.0916H113.2V20.2975H117.526V35.9163C117.526 38.3437 116.787 39.9266 115.521 41.0874C114.149 42.4594 111.933 42.9871 109.4 42.9871C104.968 42.9871 102.118 41.0874 101.591 37.7105ZM113.516 28.0014C113.516 25.5741 112.144 23.4635 109.506 23.4635C107.184 23.4635 105.706 25.2575 105.706 28.1069C105.706 30.9563 107.184 32.6449 109.506 32.6449C112.355 32.6449 113.516 30.5341 113.516 28.0014ZM123.964 22.6193C125.23 20.8252 126.813 19.8754 129.029 19.8754C132.512 19.8754 134.833 22.5137 134.833 26.2073V37.2883H130.295V26.9461C130.295 25.1521 129.24 23.8856 127.341 23.8856C125.336 23.8856 123.858 25.4686 123.858 27.7904V37.3938H119.531V20.5085H123.964V22.6193ZM85.0221 23.0413C81.5396 22.3027 79.9566 21.6694 79.9566 19.7699C79.9566 18.0813 81.645 17.026 84.1778 17.026C86.4996 17.026 88.2937 18.0813 88.7158 20.2975H93.3592C92.8316 15.7596 89.4546 13.2268 84.1778 13.2268C78.9013 13.2268 75.1021 15.654 75.1021 20.2975C75.1021 25.2575 79.0067 26.3129 83.2281 27.2627C86.8161 28.1069 89.0324 28.529 89.0324 30.8508C89.0324 33.067 86.9217 33.9112 84.4944 33.9112C81.1175 33.9112 79.5344 32.7504 79.2178 29.901H74.5744C74.7855 34.8611 78.3736 37.7105 84.8111 37.7105C90.0877 37.7105 93.9925 35.0721 93.9925 30.2176C93.8869 25.2575 89.8766 24.0967 85.0221 23.0413ZM136.733 23.4635C135.783 23.4635 134.939 22.6193 134.939 21.6694C134.939 20.7196 135.783 19.8754 136.733 19.8754C137.683 19.8754 138.528 20.7196 138.528 21.6694C138.528 22.6193 137.683 23.4635 136.733 23.4635ZM136.733 20.1919C135.889 20.1919 135.256 20.8252 135.256 21.6694C135.256 22.5137 135.889 23.1469 136.733 23.1469C137.577 23.1469 138.21 22.5137 138.21 21.6694C138.21 20.8252 137.577 20.1919 136.733 20.1919Z" fill="black" />
              <path d="M136.102 20.72H136.735C136.946 20.72 137.157 20.72 137.262 20.8255C137.368 20.931 137.474 21.0366 137.474 21.2476C137.474 21.5643 137.262 21.6698 137.157 21.7753L137.579 22.5141H137.157L136.84 21.8809H136.419V22.5141H136.102V20.72ZM136.419 21.0366V21.5643H136.735C136.84 21.5643 137.052 21.5643 137.052 21.2476C137.052 21.2476 137.052 21.0366 136.946 21.0366H136.419Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2001_1517">
                <rect width="137.779" height="52.9071" fill="white" transform="translate(0.820068)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="158" height="53" viewBox="0 0 158 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2001_1518)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.46594 39.5172C-0.118413 35.9633 -0.118356 30.2012 3.46605 26.6473L13.2014 16.9946C16.2316 13.9903 20.8531 13.5256 24.3755 15.6007C25.4651 16.2425 25.4555 17.7149 24.5593 18.6034C23.6633 19.4918 22.2004 19.4154 20.9841 19.0626C19.4266 18.611 17.675 18.9941 16.4466 20.2121L6.71115 29.8647C4.91895 31.6418 4.91893 34.5227 6.7111 36.2998C8.50332 38.0768 11.4091 38.0768 13.2013 36.2998L32.672 16.9947C36.2565 13.4408 42.0678 13.4407 45.6524 16.9947L55.3879 26.6473C58.9723 30.2011 58.9723 35.9633 55.3879 39.5172C51.8035 43.0712 45.992 43.0712 42.4074 39.5172L39.1624 36.2998L35.106 40.3217C32.0759 43.326 27.4543 43.7906 23.9318 41.7156C22.8424 41.0737 22.8519 39.6014 23.7481 38.7129C24.6441 37.8244 26.1069 37.9008 27.3233 38.2535C28.8809 38.7053 30.6325 38.3221 31.8608 37.1041L36.0332 32.9673C37.7614 31.2538 40.5633 31.2538 42.2916 32.9673L45.6526 36.2998C47.4448 38.0767 50.3505 38.0767 52.1427 36.2998C53.9349 34.5227 53.9349 31.6418 52.1427 29.8647L42.4072 20.2122C40.615 18.4352 37.7093 18.4353 35.9171 20.2122L16.4465 39.5174C12.862 43.0713 7.05037 43.0713 3.46594 39.5172Z" fill="black" />
              <path d="M94.7374 19.4871C92.482 19.4871 90.7733 20.2947 89.6456 21.91C88.6546 20.2947 87.0826 19.4871 84.9981 19.4871C82.8451 19.4871 81.2731 20.2274 80.2479 21.7417V19.9582H75.8396V36.7839H80.2479V27.3278C80.2479 24.8713 81.5123 23.5253 83.4602 23.5253C85.2714 23.5253 86.3308 24.703 86.3308 26.7222V36.7839H90.7391V27.3278C90.7391 24.8713 91.9011 23.5253 93.9173 23.5253C95.7285 23.5253 96.7878 24.703 96.7878 26.7222V36.7839H101.196V26.4192C101.196 22.2128 98.6674 19.4871 94.7374 19.4871Z" fill="black" />
              <path d="M117.584 21.9436C116.252 20.2947 114.406 19.4871 112.014 19.4871C109.724 19.4871 107.777 20.362 106.136 22.0782C104.53 23.7945 103.71 25.8809 103.71 28.3711C103.71 30.8612 104.53 32.9813 106.136 34.6976C107.777 36.4137 109.724 37.2551 112.014 37.2551C114.406 37.2551 116.252 36.4474 117.584 34.7985V36.7839H121.993V19.9582H117.584V21.9436ZM109.451 31.8035C108.563 30.8949 108.118 29.7507 108.118 28.3711C108.118 26.9913 108.563 25.8472 109.451 24.9723C110.34 24.0637 111.467 23.6262 112.834 23.6262C114.201 23.6262 115.329 24.0637 116.217 24.9723C117.14 25.8472 117.584 26.9913 117.584 28.3711C117.584 29.7507 117.14 30.8949 116.217 31.8035C115.329 32.6785 114.201 33.1159 112.834 33.1159C111.467 33.1159 110.34 32.6785 109.451 31.8035Z" fill="black" />
              <path d="M138.259 22.8521V19.9581H125.444V24.03H132.312L125.101 33.8898V36.7838H138.6V32.712H131.013L138.259 22.8521Z" fill="black" />
              <path d="M157.032 30.1546C157.135 29.5153 157.203 28.9432 157.203 28.3711C157.203 25.8472 156.384 23.7608 154.743 22.0446C153.137 20.3283 151.052 19.4871 148.558 19.4871C145.926 19.4871 143.74 20.3283 142.064 22.0446C140.39 23.7272 139.535 25.8472 139.535 28.3711C139.535 30.9286 140.39 33.0487 142.099 34.7311C143.808 36.4137 146.063 37.2551 148.899 37.2551C152.179 37.2551 154.675 36.0436 156.349 33.6543L152.795 31.6352C151.941 32.7457 150.643 33.3178 148.967 33.3178C146.337 33.3178 144.731 32.2747 144.149 30.1546H157.032ZM144.081 26.7894C144.593 24.6357 146.199 23.3906 148.558 23.3906C150.573 23.3906 152.282 24.5011 152.795 26.7894H144.081Z" fill="black" />
            </g>
            <defs>
              <clipPath id="clip0_2001_1518">
                <rect width="156.517" height="52.9071" fill="white" transform="translate(0.77771)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="80" height="53" viewBox="0 0 80 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2001_1519)">
              <path d="M5.04008 31.8045C5.37552 32.6947 5.83992 33.4558 6.43338 34.0879C7.02684 34.7201 7.72992 35.2038 8.54261 35.5393C9.35538 35.8747 10.2391 36.0424 11.1937 36.0424C12.1226 36.0424 12.9934 35.8682 13.8062 35.5198C14.6189 35.1715 15.3284 34.6813 15.9347 34.0492C16.541 33.417 17.012 32.6624 17.3474 31.7852C17.6828 30.9079 17.8505 29.9275 17.8505 28.8438V12.1245H21.9142V39.2159H17.8892V36.7003C16.9862 37.6548 15.9218 38.3902 14.6963 38.9063C13.4706 39.4223 12.1484 39.6803 10.7293 39.6803C9.28439 39.6803 7.9363 39.4287 6.6849 38.9256C5.43358 38.4225 4.34985 37.7066 3.43397 36.7777C2.51809 35.8488 1.79558 34.733 1.26669 33.43C0.737712 32.127 0.473267 30.6757 0.473267 29.076V12.1245H4.53697V28.8438C4.53697 29.9275 4.70464 30.9143 5.04008 31.8045Z" fill="#010202" />
              <path d="M28.9189 12.1245V21.9935C29.822 21.0905 30.867 20.3745 32.0538 19.8456C33.2406 19.3166 34.5308 19.0521 35.924 19.0521C37.3689 19.0521 38.7233 19.323 39.9877 19.8648C41.2519 20.4067 42.3484 21.142 43.2773 22.0709C44.2062 22.9998 44.9416 24.0963 45.4834 25.3606C46.0252 26.6249 46.2961 27.9666 46.2961 29.3856C46.2961 30.8046 46.0252 32.1399 45.4834 33.3912C44.9416 34.6426 44.2062 35.7327 43.2773 36.6615C42.3484 37.5904 41.2519 38.3257 39.9877 38.8675C38.7233 39.4094 37.3688 39.6802 35.924 39.6802C34.5307 39.6802 33.2342 39.4158 32.0345 38.8868C30.8347 38.3579 29.7833 37.6419 28.8802 36.7389V39.2158H25.0101V12.1245H28.9189ZM29.364 32.056C29.7123 32.8817 30.1961 33.6042 30.8153 34.2234C31.4346 34.8426 32.157 35.3329 32.9826 35.6941C33.8083 36.0553 34.6984 36.2359 35.6531 36.2359C36.582 36.2359 37.4592 36.0553 38.2848 35.6941C39.1104 35.3329 39.8263 34.8427 40.4328 34.2234C41.0391 33.6042 41.5229 32.8817 41.8841 32.056C42.2453 31.2304 42.4259 30.3403 42.4259 29.3856C42.4259 28.431 42.2453 27.5343 41.8841 26.6958C41.5229 25.8572 41.0391 25.1284 40.4328 24.5092C39.8264 23.89 39.1105 23.4062 38.2848 23.0579C37.4591 22.7096 36.5819 22.5353 35.6531 22.5353C34.7243 22.5353 33.847 22.7095 33.0214 23.0579C32.1958 23.4062 31.4734 23.89 30.854 24.5092C30.2349 25.1284 29.7446 25.8572 29.3834 26.6958C29.0222 27.5343 28.8416 28.431 28.8416 29.3856C28.8415 30.3403 29.0157 31.2304 29.364 32.056Z" fill="#010202" />
              <path d="M48.5016 25.3993C49.0176 24.1608 49.7272 23.0707 50.6302 22.129C51.5331 21.1873 52.604 20.4455 53.8425 19.9037C55.081 19.3618 56.4226 19.091 57.8675 19.091C59.2866 19.091 60.6024 19.349 61.8151 19.8649C63.0277 20.381 64.0727 21.097 64.9499 22.013C65.8272 22.9288 66.511 24.0126 67.0011 25.2639C67.4914 26.5153 67.7365 27.8763 67.7365 29.347V30.6242H51.6752C51.8042 31.4241 52.0623 32.1658 52.4493 32.8495C52.8363 33.5332 53.32 34.1266 53.9005 34.6298C54.4811 35.133 55.139 35.5265 55.8744 35.8102C56.6097 36.094 57.3901 36.236 58.2158 36.236C60.5638 36.236 62.4602 35.2684 63.9051 33.3332L66.7303 35.4231C65.7499 36.739 64.5373 37.7711 63.0924 38.5193C61.6475 39.2675 60.022 39.6416 58.2159 39.6416C56.7452 39.6416 55.3713 39.3835 54.0942 38.8676C52.817 38.3516 51.7076 37.6291 50.7658 36.7002C49.8241 35.7713 49.0823 34.6812 48.5405 33.4299C47.9987 32.1786 47.7277 30.8175 47.7277 29.3469C47.7275 27.9536 47.9856 26.6378 48.5016 25.3993ZM53.9392 23.8705C52.8427 24.7865 52.1138 26.0056 51.7526 27.5279H63.789C63.4535 26.0056 62.7375 24.7865 61.641 23.8705C60.5444 22.9546 59.2608 22.4966 57.7901 22.4966C56.3194 22.4966 55.0358 22.9546 53.9392 23.8705Z" fill="#010202" />
              <path d="M75.0511 24.3156C74.2254 25.2187 73.8126 26.4442 73.8126 27.9923V39.216H69.9036V19.4779H73.7738V21.9162C74.2641 21.1163 74.9027 20.4842 75.6896 20.0198C76.4765 19.5553 77.4118 19.323 78.4955 19.323H79.85V22.961H78.2246C76.9346 22.9611 75.8767 23.4126 75.0511 24.3156Z" fill="#010202" />
            </g>
            <defs>
              <clipPath id="clip0_2001_1519">
                <rect width="79.3607" height="52.9071" fill="white" transform="translate(0.473267)" />
              </clipPath>
            </defs>
          </svg>
          <svg width="106" height="53" viewBox="0 0 106 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.1604 16.7869C47.0938 16.4196 49.0271 16.0329 50.9411 15.6656C50.9218 24.2303 50.9218 32.7756 50.9411 41.321C49.0271 40.9343 47.0938 40.5283 45.1798 40.161C45.1218 39.407 45.1604 38.653 45.1604 37.899C45.1411 30.881 45.1411 23.8436 45.1604 16.7869ZM91.9279 20.5763C90.3039 20.6149 88.6412 21.1176 87.3845 22.1616C86.3405 23.0123 85.5865 24.1723 85.1612 25.4483C84.6972 26.821 84.6005 28.3096 84.7745 29.7596C84.9679 31.4223 85.6252 33.0656 86.7852 34.2836C87.6939 35.2503 88.9312 35.927 90.2265 36.217C91.8505 36.5843 93.6099 36.5263 95.1372 35.811C96.2586 35.3083 97.1866 34.419 97.8439 33.375C98.5786 32.1956 98.9459 30.823 99.0619 29.431C99.1972 27.865 99.0232 26.2603 98.4432 24.791C97.9406 23.4763 97.0319 22.2969 95.8139 21.5429C94.6539 20.8276 93.2812 20.5183 91.9279 20.5763ZM91.0772 15.1823C93.8805 14.9889 96.8192 15.5109 99.2359 16.9996C100.589 17.8309 101.749 18.9329 102.658 20.2283C103.451 21.3883 104.031 22.6836 104.437 24.0369C104.862 25.487 105.017 27.0143 105.036 28.5223C105.036 31.287 104.398 34.1096 102.871 36.449C101.537 38.537 99.5066 40.161 97.1866 41.0117C95.6786 41.5723 94.0932 41.843 92.4885 41.8817C89.4725 41.9397 86.3599 41.205 83.9045 39.4263C81.8165 37.9377 80.2892 35.753 79.5158 33.317C78.9745 31.693 78.7618 29.953 78.7812 28.2323C78.8005 25.2356 79.6705 22.1809 81.5458 19.8223C83.0732 17.8696 85.2579 16.4776 87.6359 15.7816C88.7379 15.4336 89.8979 15.2403 91.0772 15.1823ZM8.19499 16.3229C9.587 15.5109 11.1917 15.1243 12.7963 15.1436C15.3483 15.2403 17.8037 16.5549 19.2924 18.6429C20.0464 17.6183 21.0904 16.8256 22.2117 16.2649C24.7444 15.0469 27.8184 14.8536 30.4284 15.9169C31.6464 16.4196 32.7484 17.1929 33.5991 18.1983C34.4691 19.2229 35.0491 20.4603 35.3971 21.7363C35.7644 23.0703 35.8611 24.4623 35.8224 25.835C35.8224 30.997 35.8224 36.1783 35.8224 41.3403C33.9084 40.9537 31.9751 40.5477 30.0417 40.1803C30.0224 35.231 30.0417 30.2816 30.0224 25.3323C30.0417 24.1916 29.6357 23.0316 28.8237 22.2389C27.9537 21.3496 26.6777 20.9243 25.4404 20.9436C24.3384 20.9243 23.217 21.2529 22.347 21.9489C21.361 22.7223 20.839 23.9983 20.839 25.255C20.839 30.6103 20.839 35.985 20.839 41.3403C18.9057 40.9537 16.9723 40.5477 15.039 40.1803C15.0197 38.595 15.039 36.9903 15.0197 35.3856C15.0197 32.0603 15.0197 28.735 15.0197 25.3903C15.0583 24.2496 14.6717 23.0703 13.8597 22.2583C13.1443 21.5236 12.1583 21.0983 11.1723 20.9823C10.225 20.8856 9.25833 20.9629 8.36899 21.3303C7.44099 21.7169 6.64832 22.4516 6.22299 23.3603C5.93299 23.9789 5.79765 24.6556 5.79765 25.3323C5.79765 29.5083 5.79765 33.6843 5.79765 37.8603C5.81699 39.0203 5.77832 40.1803 5.81699 41.3403C3.88365 40.973 1.96964 40.5477 0.0556382 40.1997C0.0169714 39.523 0.0749716 38.827 0.0169714 38.1697C0.0363048 37.3963 0.0363048 36.623 0.0169714 35.8496C0.0749716 35.1343 0.0169714 34.3996 0.0363048 33.6843C0.0363048 31.635 0.0363048 29.5856 0.0363048 27.5363C0.0169714 26.2603 0.0556382 24.9649 0.0169714 23.6889C0.0363048 22.9736 0.0363048 22.2389 0.0169714 21.5236C0.0556382 20.0929 0.0363048 18.6816 0.0363048 17.2509C0.0556382 17.1156 -0.0603621 16.9029 0.094305 16.8256C2.00831 16.4583 3.90298 16.0909 5.81699 15.7236C5.79765 16.5936 5.81699 17.4636 5.81699 18.3336C6.49365 17.5216 7.28632 16.8256 8.19499 16.3229ZM71.2605 15.5303C72.1885 15.3756 73.1358 15.2209 74.0638 15.0663C74.0638 17.0769 74.0638 19.0876 74.0638 21.0983C73.1358 21.2723 72.2078 21.4463 71.2798 21.6009C69.8878 21.8329 68.4378 22.2389 67.3938 23.2443C66.5431 24.0369 66.1371 25.197 66.0598 26.3376C66.0018 27.1496 66.0405 27.9616 66.0405 28.793C66.0405 32.969 66.0405 37.145 66.0405 41.321C64.4358 40.9923 62.8311 40.6637 61.2071 40.3543C60.8978 40.2963 60.6078 40.219 60.2791 40.1803C60.2018 39.7357 60.2598 39.291 60.2405 38.8463C60.2405 34.3996 60.2405 29.9723 60.2405 25.5256C60.2791 24.1336 60.5111 22.7223 61.0911 21.4269C61.6518 20.1316 62.6378 19.0296 63.7978 18.2176C65.3445 17.1543 67.1425 16.5163 68.9598 16.0329C69.7332 15.8589 70.4678 15.6463 71.2605 15.5303ZM47.4804 4.45223C48.4084 4.33623 49.4138 4.4329 50.2064 4.99357C51.1151 5.5929 51.6178 6.67557 51.6371 7.73891C51.6951 8.04824 51.6178 8.37691 51.6178 8.68624C51.5211 9.65291 51.0184 10.5809 50.1871 11.1222C49.3171 11.7023 48.1958 11.7989 47.1711 11.5863C46.3204 11.4122 45.5278 10.8709 45.0444 10.1169C44.4838 9.22758 44.3871 8.10624 44.5998 7.08157C44.7931 6.1149 45.4504 5.22557 46.3398 4.80023C46.7071 4.62623 47.0938 4.51023 47.4804 4.45223Z" fill="#050038" />
          </svg>
          <svg width="188" height="37" viewBox="0 0 188 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M39.8092 3.31313C36.7676 1.89002 33.5153 0.855762 30.1151 0.266846C29.6975 1.02181 29.2097 2.03726 28.8733 2.84505C25.2589 2.30148 21.6776 2.30148 18.1297 2.84505C17.7934 2.03726 17.2944 1.02181 16.8731 0.266846C13.4693 0.855762 10.2133 1.89382 7.17161 3.32067C1.03658 12.5915 -0.626524 21.6321 0.205031 30.5443C4.27411 33.5829 8.21753 35.4289 12.0944 36.6368C13.0516 35.3194 13.9053 33.9189 14.6408 32.443C13.2401 31.9108 11.8985 31.254 10.6309 30.4914C10.9672 30.2423 11.2962 29.9818 11.614 29.7138C19.3456 33.3301 27.7461 33.3301 35.3853 29.7138C35.7069 29.9818 36.0358 30.2423 36.3684 30.4914C35.097 31.2577 33.7518 31.9145 32.3511 32.4468C33.0866 33.9189 33.9366 35.3232 34.8975 36.6405C38.7781 35.4326 42.7252 33.5867 46.7943 30.5443C47.77 20.2128 45.1275 11.2552 39.8092 3.31313ZM15.6941 25.0633C13.3732 25.0633 11.4698 22.8966 11.4698 20.258C11.4698 17.6195 13.3325 15.449 15.6941 15.449C18.0558 15.449 19.9591 17.6157 19.9184 20.258C19.9221 22.8966 18.0558 25.0633 15.6941 25.0633ZM31.3052 25.0633C28.9842 25.0633 27.0809 22.8966 27.0809 20.258C27.0809 17.6195 28.9435 15.449 31.3052 15.449C33.6668 15.449 35.5701 17.6157 35.5295 20.258C35.5295 22.8966 33.6668 25.0633 31.3052 25.0633Z" fill="#23272A" />
            <path d="M63.1477 9.54605H73.2369C75.6691 9.54605 77.7239 9.93484 79.4095 10.7087C81.0907 11.4825 82.3512 12.5621 83.1866 13.9436C84.0214 15.3252 84.4426 16.9068 84.4426 18.6885C84.4426 20.4325 84.0066 22.0141 83.1345 23.4296C82.2623 24.8489 80.9354 25.9701 79.1506 26.7967C77.3657 27.6234 75.1551 28.0386 72.5129 28.0386H63.1477V9.54605ZM72.4092 23.339C74.0466 23.339 75.3071 22.92 76.1864 22.0858C77.0662 21.2478 77.5061 20.1078 77.5061 18.6621C77.5061 17.322 77.1139 16.2538 76.3306 15.4535C75.5474 14.6533 74.3609 14.2494 72.7751 14.2494H69.6189V23.339H72.4092Z" fill="#23272A" />
            <path d="M99.5476 28.0161C98.1506 27.6461 96.89 27.1101 95.7705 26.4042V22.018C96.6169 22.686 97.7512 23.2372 99.174 23.6713C100.597 24.1016 101.972 24.3168 103.302 24.3168C103.923 24.3168 104.393 24.2337 104.71 24.0676C105.028 23.9016 105.188 23.7015 105.188 23.4712C105.188 23.207 105.103 22.9881 104.929 22.8106C104.755 22.6332 104.418 22.486 103.92 22.3614L100.815 21.648C99.0375 21.2253 97.777 20.6401 97.0272 19.889C96.2768 19.1415 95.9032 18.1601 95.9032 16.9446C95.9032 15.9217 96.2285 15.0347 96.8868 14.2759C97.5406 13.5172 98.472 12.9321 99.6803 12.5206C100.889 12.1054 102.301 11.8978 103.923 11.8978C105.372 11.8978 106.699 12.0563 107.908 12.3734C109.116 12.6905 110.114 13.0944 110.909 13.5889V17.7374C110.095 17.2429 109.164 16.8541 108.1 16.5596C107.039 16.269 105.949 16.1255 104.825 16.1255C103.202 16.1255 102.393 16.4086 102.393 16.9711C102.393 17.2353 102.519 17.4316 102.77 17.5637C103.021 17.6958 103.483 17.8317 104.152 17.9752L106.739 18.4508C108.429 18.749 109.689 19.2737 110.516 20.0211C111.345 20.7685 111.758 21.8745 111.758 23.3391C111.758 24.9434 111.075 26.2155 109.703 27.1592C108.332 28.1029 106.388 28.5747 103.868 28.5747C102.386 28.571 100.945 28.386 99.5476 28.0161Z" fill="#23272A" />
            <path d="M117.865 27.461C116.383 26.7211 115.263 25.717 114.517 24.4487C113.77 23.1804 113.393 21.7535 113.393 20.1681C113.393 18.5827 113.781 17.1634 114.557 15.914C115.333 14.6645 116.472 13.6831 117.972 12.9696C119.473 12.2562 121.265 11.9014 123.353 11.9014C125.94 11.9014 128.088 12.4563 129.795 13.566V18.4015C129.193 17.9787 128.49 17.6352 127.688 17.371C126.886 17.1068 126.029 16.9746 125.112 16.9746C123.509 16.9746 122.256 17.2729 121.35 17.873C120.444 18.4732 119.99 19.2546 119.99 20.2247C119.99 21.1759 120.43 21.9536 121.31 22.5651C122.189 23.1728 123.464 23.4786 125.138 23.4786C125.999 23.4786 126.85 23.3502 127.688 23.0973C128.524 22.8407 129.244 22.5274 129.847 22.1574V26.8343C127.951 27.9969 125.752 28.5783 123.25 28.5783C121.143 28.5707 119.347 28.2008 117.865 27.461Z" fill="#23272A" />
            <path d="M136.248 27.4612C134.755 26.7214 133.617 25.7098 132.833 24.4226C132.049 23.1354 131.654 21.701 131.654 20.1155C131.654 18.5302 132.046 17.1146 132.833 15.8727C133.62 14.6308 134.751 13.6569 136.237 12.951C137.718 12.2451 139.489 11.8941 141.54 11.8941C143.591 11.8941 145.361 12.2451 146.843 12.951C148.326 13.6569 149.457 14.6233 150.233 15.8576C151.009 17.092 151.397 18.5075 151.397 20.1118C151.397 21.6972 151.009 23.1316 150.233 24.4188C149.457 25.706 148.322 26.7176 146.829 27.4575C145.336 28.1973 143.573 28.5673 141.537 28.5673C139.5 28.5673 137.737 28.2011 136.248 27.4612ZM144.109 22.773C144.737 22.1313 145.055 21.282 145.055 20.225C145.055 19.1681 144.74 18.3263 144.109 17.7035C143.481 17.0769 142.623 16.7636 141.537 16.7636C140.431 16.7636 139.566 17.0769 138.934 17.7035C138.306 18.3301 137.992 19.1681 137.992 20.225C137.992 21.282 138.306 22.1313 138.934 22.773C139.563 23.4147 140.431 23.7393 141.537 23.7393C142.623 23.7355 143.481 23.4147 144.109 22.773Z" fill="#23272A" />
            <path d="M166.941 12.8755V18.583C166.283 18.1413 165.433 17.9224 164.38 17.9224C163.001 17.9224 161.937 18.349 161.197 19.202C160.455 20.0552 160.085 21.3838 160.085 23.1806V28.0425H153.747V12.5849H159.956V17.4996C160.3 15.7028 160.858 14.3779 161.626 13.521C162.392 12.6679 163.382 12.2414 164.587 12.2414C165.5 12.2414 166.283 12.4528 166.941 12.8755Z" fill="#23272A" />
            <path d="M188 9.01754V28.0424H181.661V24.5809C181.126 25.8832 180.313 26.876 179.219 27.5554C178.125 28.2312 176.772 28.5709 175.168 28.5709C173.734 28.5709 172.485 28.216 171.417 27.5026C170.349 26.7892 169.525 25.8115 168.945 24.5696C168.368 23.3277 168.076 21.9235 168.076 20.3532C168.058 18.7338 168.364 17.2805 168.996 15.9933C169.625 14.7061 170.515 13.7021 171.661 12.981C172.807 12.2601 174.115 11.8977 175.582 11.8977C178.602 11.8977 180.627 13.2377 181.661 15.914V9.01754H188ZM180.716 22.6671C181.363 22.0254 181.684 21.1912 181.684 20.172C181.684 19.1868 181.37 18.3827 180.742 17.7675C180.113 17.1522 179.252 16.8427 178.169 16.8427C177.101 16.8427 176.248 17.156 175.608 17.7825C174.968 18.4092 174.651 19.2207 174.651 20.2248C174.651 21.229 174.968 22.0481 175.608 22.6822C176.248 23.3163 177.09 23.6334 178.143 23.6334C179.211 23.6297 180.069 23.3088 180.716 22.6671Z" fill="#23272A" />
            <path d="M89.7839 14.2303C91.5288 14.2303 92.9439 12.9323 92.9439 11.3312C92.9439 9.73016 91.5288 8.43227 89.7839 8.43227C88.0383 8.43227 86.6238 9.73016 86.6238 11.3312C86.6238 12.9323 88.0383 14.2303 89.7839 14.2303Z" fill="#23272A" />
            <path d="M86.6211 16.2274C88.5573 17.0804 90.9598 17.1182 92.9405 16.2274V28.1254H86.6211V16.2274Z" fill="#23272A" />
          </svg>
        </div>
        <div className={style.Meed}>
          <Image src={Man} alt='Man' />
          <div className={style.Meed_text}>
            <h2>Why choose Us?</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            <p className={style.p}>Read more</p>
          </div>
        </div>
        <div className={style.Bottom}>
          <div className={style.Text}>
            <h3>Service Repiar</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.</p>
          </div>
          <div className={style.Text}>
            <h3>Board Accessories</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.</p>
          </div>
          <div className={style.Text}>
            <h3>Warraty & Guarantee</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit officia.</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FREE_SHAPING;