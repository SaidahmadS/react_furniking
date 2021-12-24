import Furniture from '../../assets/images/Furniture 1.png'
import Chair from '../../assets/images/Chair.png'
import Chair2 from '../../assets/images/Chair 2.png'
import Chair3 from '../../assets/images/Chair 3.png'
import Rectangle from '../../assets/images/Rectangle.png'
import Rectangle1 from '../../assets/images/Rectangle (1).png'
import Rectangle2 from '../../assets/images/Rectangle (2).png'
import MainItemImg from './MainItemImg'
import { useState, useEffect } from 'react'
import classes from './Main.module.scss'
function Main() {
    const [count, setCount] = useState(1)
    const [func, setFunc] = useState(false)

    const data = [
        { id: 1, img: Furniture },
        { id: 2, img: Chair },
        { id: 3, img: Chair2 },
        { id: 4, img: Chair3 },
    ]

    
    useEffect(() => {
        let timer;
        if(count < data.length) {
            timer = setTimeout(() => setCount(a => a + 1), 5000)
        } else {
            timer = setTimeout(() => setCount(() => 1), 5000)
        }
        return () => clearInterval(timer)
    }, [count, data.length])
    

    return (  
        <div className={classes.main}>
            <div className={classes.text}>
                <h3>TOP COLLECTIONS 2022</h3>
                <h1>We Serve Your Dream Furniture</h1>
                <p>Get 50% off all products</p>
                <button>SHOP NOW</button>
            </div>

            <div className={classes.carouselImg}>
                <div className={classes.hideLeft}></div>
                {data.map((item, index) => (
                    <MainItemImg setFunc={setFunc} count={count} item={item} key={index} />
                ))}
                <div className={classes.hideRight}></div>
            </div>

            <div className={classes.imgCard}>
                <div className={classes.cardItem}>
                    <img width={30} height={34} src={Rectangle} alt="" />
                    <p>$ <span>120</span></p>
                    <h6>Office Desk Chair</h6>
                </div>
                <div className={classes.cardItem}>
                    <img width={50} height={38} src={Rectangle1} alt="" />
                    <p>$ <span>180</span></p>
                    <h6>Home Alisa Sofa</h6>
                </div>
                <div className={classes.cardItem}>
                    <img width={38} height={40} src={Rectangle2} alt="" />
                    <p>$ <span>250</span></p>
                    <h6>Modern Chair</h6>
                </div>
            </div>
            <div className={classes.spans}>
                {data.map((i, index) => (
                    <div onClick={() => setCount(() => i.id)} className={classes.dot} key={index}>
                        <span className={count === i.id ? classes.active : ""}></span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;