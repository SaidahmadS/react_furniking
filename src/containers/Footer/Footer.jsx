import { LogoIcon, FacebookIcon, TwitterIcon, InstagramIcon, PinterestIcon } from '../../assets/icons/icons';
import './Footer.scss'
function Footer() {
    const footerData = [
        { text: 'Help', LI: [
            { title: 'Privacy Policy' },
            { title: 'Shipping & Delivery' },
            { title: 'Refund Policy' },
            { title: 'Track Your Order' },
        ] },
        { text: 'Store', LI: [
            { title: 'Furniture' },
            { title: 'Table' },
            { title: 'Sofa' },
            { title: 'Other' },
        ] },
        { text: 'Supports', LI: [
            { title: 'Feedback' },
            { title: 'Contact us' },
            { title: 'Download up' },
            { title: 'Terms conditions' },
        ] },
    ]

    return (  
        <div className="footer">
            <div className="footer-left">
                <div className="footer-logo">
                    <LogoIcon/>
                    <span>Furniking</span>
                </div>
                <p>Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div className="networks">
                    <div className="network face">
                        <FacebookIcon/>
                    </div>
                    <div className="network twit">
                        <TwitterIcon/>
                    </div>
                    <div className="network insta">
                        <InstagramIcon/>
                    </div>
                    <div className="network pinter">
                        <PinterestIcon/>
                    </div>
                </div>
            </div>
            <div className="footer-right">
                {footerData.map((item, index) => (
                    <ul key={index}>
                        <li>
                            <a href="#">{item.text}</a>
                            {item.LI.map((i, ind) => (
                                <a key={ind+1} href="#">{i.title}</a>
                            ))}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Footer;