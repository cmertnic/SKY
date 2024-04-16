import style from './Main.module.scss'
import SHOP_NOW from "@/app/main/SHOP_NOW/page";
import FREE_SHAPING from "@/app/main/FREE_SHAPING/page";
import Most_Popular_Board from "@/Blocks/Most_Popular_Board/page";
import Our_Gallery from "@/Blocks/Our_Gallery/page";
import Explore_Our_Product from "@/Blocks/Explore_Our_Product/page";
import Why_choose_Us from "@/Blocks/Why_choose_Us/page";
import Video_about_us from "@/Blocks/Video_about_us/page";
import Block_Map from "@/Blocks/Block_Map/page";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>   
      <SHOP_NOW/>
      <FREE_SHAPING/>
      <Most_Popular_Board/>
      <Our_Gallery/>
      <Explore_Our_Product/>
      <Why_choose_Us/>
      <Video_about_us/>
      <Block_Map/>
      </div>
    </div>
  );
};

export default Main;