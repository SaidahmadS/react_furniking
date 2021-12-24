import { StarIcon, HeartIcon, ShoppingIcon, RefreshIcon, EyeIcon } from '../../assets/icons/icons';

import './ProductsItem.scss'
function ProductsItem({item}) {
    return (  
        <div className="products-item">
            <div style={{ background: item.color }} className="notice">
                <span className='span'>{item.notice}</span>
            </div>
            <img className='images' src={item.chairImg} alt="" />
            <div className="feature">
                <div className="icon favourite">
                    <HeartIcon />
                </div>
                <div className="icon shop">
                    <ShoppingIcon />
                </div>
                <div className="icon compare">
                    <RefreshIcon />
                </div>
                <div className="icon view">
                    <EyeIcon />
                </div>
            </div>
            <p className='chair'>CHAIR</p>
            <h3 className='chair-name'>{item.chairName}</h3>
            <div className="price-rating">
                <div className="price">
                    <span className='newPrice'>{item.newPrice}</span>
                    <span className='oldPrice'>{item.oldPrice}</span>
                </div>
                <div className="rating">
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star" />
                    <StarIcon className="star5" />
                </div>
            </div>
        </div>
    );
}

export default ProductsItem;