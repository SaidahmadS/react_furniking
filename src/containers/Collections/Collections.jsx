import { VectorIcon } from '../../assets/icons/icons';

import './Collections.scss'
function Collections() {
    return (  
        <div className="collections">
            <div className="collection-main">
                <h2>Modern Furniture Collections</h2>
                <h3>Starting from $500</h3>
                <div className="read">
                    <span>Read more</span>
                    <VectorIcon />
                </div>
            </div>
            <div className="collection-item">
                <div className="item1">
                    <h2>Geometric Bookcase</h2>
                    <h3>Up to 20% discount</h3>
                    <div className="read">
                        <span>Read more</span>
                        <VectorIcon />
                    </div>
                </div>
                <div className="item2">
                    <h2>Minimal Sofa collections </h2>
                    <h3>Sale upto 40% discount</h3>
                    <div className="read">
                        <span>Read more</span>
                        <VectorIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collections;