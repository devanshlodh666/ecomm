import scroll from "../data/data";
import '../css/Bod.css'
import { useState,useCallback} from "react";
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
        <img src={scroll[img].url} alt="." />
        <div className="SlidBtn">
        <button onClick={minus}> 
        <img src="left.svg" alt="" />
        </button> 
        <button onClick={plus}>
            <img src="right.svg" alt="" />
        </button>
        </div>
    </div> 
  )
}
export default Bod