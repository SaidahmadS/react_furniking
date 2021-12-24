import { topChairs, newChairs, bestChairs } from './chairs';
import ProductsItem from './ProductsItem';
import './Products.scss'
function Products({path}) {
    let rows = []
    if(path === '/bestsellers') {
        rows = bestChairs
    } else if(path === '/newarrivals') {
        rows = newChairs
    } else {
        rows = topChairs
    }

    return (  
        <div className="products">
            {rows.map((item, index) => (
                <ProductsItem 
                    item={item}
                    key={index}
                />
            ))}
        </div>
    );
}

export default Products;