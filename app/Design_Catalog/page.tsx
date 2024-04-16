import style from './Design_Catalog.module.scss'
import Most_Popular_Board from "@/Blocks/Most_Popular_Board/page";
import Our_Gallery from "@/Blocks/Our_Gallery/page";
import Explore_Our_Product from "@/Blocks/Explore_Our_Product/page";
import Why_choose_Us from "@/Blocks/Why_choose_Us/page";
import Video_about_us from "@/Blocks/Video_about_us/page";
import Sardinia_White from "../Design_Catalog/Sardinia_White/page";
const Design_Catalog = () => {
  return (
    <div className={style.Design_Catalog}>
      <div className={style.Design_Catalog_row}>   
      <Sardinia_White/>
      <Most_Popular_Board/>
      <Our_Gallery/>
      <Explore_Our_Product/>
      <Why_choose_Us/>
      <Video_about_us/>
      </div>
    </div>
  );
};

export default Design_Catalog;