import style from './Design_About_Us.module.scss'
import Most_Popular_Board from "@/Blocks/Most_Popular_Board/page";
import Our_Gallery from "@/Blocks/Our_Gallery/page";
import Explore_Our_Product from "@/Blocks/Explore_Our_Product/page";
import Why_choose_Us from "@/Blocks/Why_choose_Us/page";
import Video_about_us from "@/Blocks/Video_about_us/page";
import About from "../Design_About_Us/About/page";
const Design_About_Us = () => {
  return (
    <div className={style.Design_Catalog}>
      <div className={style.Design_Catalog_row}>   
      <About/>
      <Most_Popular_Board/>
      <Our_Gallery/>
      <Explore_Our_Product/>
      <Why_choose_Us/>
      <Video_about_us/>
      </div>
    </div>
  );
};

export default Design_About_Us;