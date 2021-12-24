import Card from '../../assets/images/Card.png'
import Card1 from '../../assets/images/Card (1).png'
import Card2 from '../../assets/images/Card (2).png'
import Card3 from '../../assets/images/Card (3).png'
import { TagIcon } from '../../assets/icons/icons'

import './Articles.scss'
function Articles() {
    const data = [
        { bgImg: Card, tag: 'Furniture', title: 'Begineer guide buying minimal sofa'},
        { bgImg: Card1, tag: 'TABLE', title: 'Buying best minimal computer table'},
        { bgImg: Card2, tag: 'Bench', title: 'How to choose best modern bench'},
        { bgImg: Card3, tag: 'Chair', title: 'Best Summer Outfit Style in this Country'},
    ]

    return (  
        <div className="articles">
            <h1>Our Latest Articles</h1>
            <div className="cards">
                {data.map((item, index) => (
                    <div key={index} className="card">
                        <img className='img' src={item.bgImg} alt="" />
                        <div className="card-item">
                            <div className="tag-date">
                                <div className="tag">
                                    <TagIcon/>
                                    <span>{item.tag}</span>
                                </div>
                                <div className="date">
                                    23 September 2022
                                </div>
                            </div>
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="read-more">
                                Read more
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Articles;