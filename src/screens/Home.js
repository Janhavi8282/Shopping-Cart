import products from "../data";
import './Home.css';
import ProductCard from "../Components/ProductCard";

const Home = () =>{
    return(
        <div className = 'products_wrapper'>
            {products.map((product)=>(
            <ProductCard key={product.id} product={product}/>
                
            ))}
        </div>
    )
}
export default Home;