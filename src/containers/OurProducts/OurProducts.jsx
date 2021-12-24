import { useState } from 'react'
import Products from './Products';
import { UpArrowLeft, UpArrowRight, ArrowIcon } from '../../assets/icons/icons';

import classes from './OurProducts.module.scss'
function OurProducts() {
    const data = [
        { pathTitle: '/allproducts', title: 'All Products' },
        { pathTitle: '/bestsellers', title: 'Best Sellers' },
        { pathTitle: '/newarrivals', title: 'New Arrivals' },
        { pathTitle: '/todaysdeals', title: 'Todays Deals' }
    ]
    const [ path, setPath ] = useState('')

    const handlePath = (e) => {
        e.preventDefault()
        setPath(e.currentTarget.pathname)
    }

    return (  
        <div className={classes.ourproducts}>
            <h1>OUR PRODUCTS</h1>
            <nav>
                {data.map((item, index) => (
                    <a key={index} className={ item.pathTitle === path ? classes.active : classes.link} href={item.pathTitle} onClick={e => handlePath(e)} >{item.title}</a>
                ))}
            </nav>
            <Products path={path} />
           <div className={classes.pages}>
               <div className={classes.nextPage}>
                   <button>Next page</button>
                   <ArrowIcon/>
               </div>
               <div className={classes.page}>
                   Page
                   <span className={classes.activeNum}>1</span>
                   <span className={classes.maxNum}>of 100</span>
                   <span className={classes.arrows}>
                        <UpArrowLeft/>
                        <UpArrowRight className={classes.upright}/>
                   </span>
               </div>
           </div>
        </div>
    );
}

export default OurProducts;