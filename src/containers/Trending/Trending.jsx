import { useState } from 'react'
import Products from './Products';

import classes from './Trending.module.scss'
function Trending() {
    const data = [
        { title: 'Top Products', pathTitle: '/topproducts' },
        { title: 'New Arrivals', pathTitle: '/newarrivals' },
        { title: 'Best Sellers', pathTitle: '/bestsellers' }
    ]
    const [ path, setPath ] = useState('')

    const handlePath = (e) => {
        e.preventDefault()
        setPath(e.currentTarget.pathname)
    }

    return (  
        <div className={classes.trending}>
            <h1>TRENDING</h1>
            <nav>
                {data.map((item, index) => (
                    <a key={index} className={ item.pathTitle === path ? classes.active : classes.link} href={item.pathTitle} onClick={e => handlePath(e)} >{item.title}</a>
                ))}
            </nav>
            <Products path={path} />
            <div className={classes.circle}>
                <div className={classes.wrap}>
                    <div className={classes.button}></div>
                </div>
                <div className={classes.wrap}>
                    <div className={classes.button}></div>
                </div>
            </div>
        </div>
    );
}

export default Trending;