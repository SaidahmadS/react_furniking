import { NavigateRightIcon, NavigateLeftIcon } from '../../assets/icons/icons';
import personImg from '../../assets/images/Image.jpg';
import Human from '../../assets/images/Human.jpeg'
import Human2 from '../../assets/images/Human2.jpg'
import Human3 from '../../assets/images/Human3.jpg'
import Human4 from '../../assets/images/Human4.jpg'
import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Customer.scss'
function Customer() {
    const [count, setCount] = useState(1)
    const humanData = [
        { humanName: 'Angelina Joly', humanImg: personImg, profession: 'Co-Founder' },
        { humanName: 'Lucas', humanImg: Human, profession: 'Entrepreneur' },
        { humanName: 'James', humanImg: Human2, profession: 'Doctor' },
        { humanName: 'William', humanImg: Human3, profession: 'Sofware enginer' },
        { humanName: 'John Parker', humanImg: Human4, profession: 'Teacher' },
    ]

    const handleP = () => {
        if(count < humanData.length) {
            setCount(a => a + 1)
        } else {
            setCount(() => 1)
        }
    }

    const handleN = () => {
        if(count > 1) {
            setCount(a => a - 1)
        } else {
            setCount(() => humanData.length)
        }
    }


    return (  
        <div className="customer">
            <h1>What Our Customer Says</h1>
            <div className="persons">
                <div onClick={handleP} className="navigate-icon">
                    <NavigateLeftIcon/>
                </div>
                <TransitionGroup>
                    {humanData.map((item, index) => (
                        count === index + 1 
                        ? <CSSTransition key={index} timeout={500} classNames="item">
                            <div className="person">
                                <img src={item.humanImg} alt="" />
                                <p>
                                    I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan.
                                </p>
                                <h3>{item.humanName}</h3>
                                <p>{item.profession}</p>
                            </div>
                        </CSSTransition>
                        : null
                    ))}
                </TransitionGroup>
                <div onClick={handleN} className="navigate-icon">
                    <NavigateRightIcon/>
                </div>
            </div>
        </div>
    );
}

export default Customer;