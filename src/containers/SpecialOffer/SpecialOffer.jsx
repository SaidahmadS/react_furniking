

import './SpecialOffer.scss';
function SpecialOffer() {
    return (  
        <div className="special-offer">
            <h1>special offer</h1>
            <div className="special-cards">
                <div className="special-card card1">
                    <span className='off'>40% off</span>
                    <h3>Living Room Furniture</h3>
                    <p>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</p>
                    <div className="shop-now">
                        <h4 className='newPrice'>$150</h4>
                        <h4 className='oldPrice'>$250</h4>
                        <button>SHOP NOW</button>
                    </div>
                    <div className="times">
                        <div className="date">
                            <span className='num'>10</span>
                            <span className='time'>DAYS</span>
                        </div>
                        <div className="date">
                            <span className='num'>15</span>
                            <span className='time'>HRS</span>
                        </div>
                        <div className="date">
                            <span className='num'>30</span>
                            <span className='time'>MIN</span>
                        </div>
                        <div className="date">
                            <span className='num'>22</span>
                            <span className='time'>SECS</span>
                        </div>
                    </div>
                </div>
                <div className="special-card card2">
                <span className='off'>50% off</span>
                    <h3>Modern chair</h3>
                    <p>Hot chairs of the modern era are now available in our stock.</p>
                    <div className="shop-now">
                        <h4 className='newPrice'>$75</h4>
                        <h4 className='oldPrice'>$150</h4>
                        <button>SHOP NOW</button>
                    </div>
                    <div className="times">
                    <div className="date">
                            <span className='num'>15</span>
                            <span className='time'>DAYS</span>
                        </div>
                        <div className="date">
                            <span className='num'>08</span>
                            <span className='time'>HRS</span>
                        </div>
                        <div className="date">
                            <span className='num'>20</span>
                            <span className='time'>MIN</span>
                        </div>
                        <div className="date">
                            <span className='num'>12</span>
                            <span className='time'>SECS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialOffer;