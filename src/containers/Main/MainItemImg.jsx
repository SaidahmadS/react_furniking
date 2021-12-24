import classes from './MainItemImg.module.scss'
function MainItemImg({item, count, setFunc}) {
    let clasname = []
    if(count === item.id) {
        clasname = [classes.active]
    } else if(count < item.id) {
        clasname = [classes.carouselItemRight]
    } else {
        clasname = [classes.carouselItemLeft]
    }

    return (  
        <div className={classes.wrapper}>
            <img onMouseOut={() => setFunc(false)} onMouseMove={() => setFunc(true)} className={clasname} src={item.img} alt="" />
        </div> 
    );
}

export default MainItemImg;