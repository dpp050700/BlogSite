import React from 'react';
import style from './index.module.scss';
import imgUrl from '../../assets/images/1.png';
import bigImgUrl from '../../assets/images/big.jpg';
import bigImgUrl2 from '../../assets/images/big2.png';

export default function Header() {
  return (
    <div className={style.header}>
      <div className="p-30px">Vite App</div>
      <img src={imgUrl} />
      <img src={bigImgUrl} />
      <img src={bigImgUrl2} />
    </div>
  );
}
