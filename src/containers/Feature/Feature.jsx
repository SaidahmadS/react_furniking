import { ShippingIcon, GiftIcon, PaymentIcon, SupportIcon } from '../../assets/icons/icons';
import './Feature.scss'

function Feature() {
    return (  
        <div className="feature">
            <div className="feature-item">
                <div className="icon">
                    <ShippingIcon />
                </div>
                <div className="title">
                    <h2>Free Shipping</h2>
                    <p>Orders over $100</p>
                </div>
            </div>
            <div className="feature-item">
            <div className="icon">
                    <GiftIcon />
                </div>
                <div className="title">
                    <h2>Smart Gift Card</h2>
                    <p>Buy $1000 to get card</p>
                </div>
            </div>
            <div className="feature-item">
            <div className="icon">
                    <PaymentIcon />
                </div>
                <div className="title">
                    <h2>Quick Payment</h2>
                    <p>100% secure payment</p>
                </div>
            </div>
            <div className="feature-item">
            <div className="icon">
                    <SupportIcon />
                </div>
                <div className="title">
                    <h2>24/7 Support</h2>
                    <p>Quick support</p>
                </div>
            </div>
        </div>
    );
}

export default Feature;