import scroll from "../data/data";
import '../css/Bod.css'
import { useState,useCallback} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Bod = () => {
    const [img, setimg] = useState(0);
    const plus = useCallback(
      () => {
        if (img === scroll.length-1) {
          setimg(0)
          }
          else{
            setimg(img+1) 
          }
      })
    
    function minus() {
      if (img === 0) {
      setimg(scroll.length - 1)
      }
      else{
        setimg(img - 1)
      }
    }
  
  return (
    <div  className="slid">
         <Carousel 
         showThumbs={false} 
         autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showStatus={false}
          >
                <div>
                    <img src={scroll[0].url} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={scroll[1].url} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={scroll[2].url} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        {/* <img src={scroll[img].url} alt="." />
        <div className="SlidBtn">
        <button onClick={minus}> 
        <img src="left.svg" alt="" />
        </button> 
        <button onClick={plus}>
            <img src="right.svg" alt="" />
        </button>
        </div> */}
    </div> 
  )
}
export default Bod