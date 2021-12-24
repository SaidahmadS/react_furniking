import { allProducts, bestSellers, newArrivals, todaysDeals } from './allproducts';
import ProductsItem from './ProductsItem';

import './Products.scss'
function Products({path}) {
    let rows = []
    if(path === '/bestsellers') {
        rows = bestSellers
    } else if(path === '/newarrivals') {
        rows = newArrivals
    } else if(path === '/todaysdeals') {
        rows = todaysDeals
    } else {
        rows = allProducts
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