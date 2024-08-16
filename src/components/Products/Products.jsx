import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product/Product"


const Products = () => {
    const [products, setProducts] = useState();
    const [totalProducts, setTotalProducts] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(res => {
                setTotalProducts(res.data.length);
            })
    }, [])
    useEffect(() => {
        axios.get("http://localhost:3000/single-page-products?skip=0")
            .then(res => {
                setProducts(res.data);
            })
    }, [])
    console.log(totalProducts)
    const pages = Math.ceil(totalProducts / 12)

    const onPageClick = async (pageNum) => {
        const res = await axios.get(`http://localhost:3000/single-page-products?skip=${(pageNum * 12) - 12}`);
        const data = await res.data;
        setProducts(data);
        console.log(data)
    }

    return (
        <div>
            <h2 className="text-center my-10 text-2xl font-bold">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className="flex justify-center gap-4 my-4">
                <button className="btn btn-primary">Previous</button>
                {
                    Array.from({ length: pages }).map((_item, index) => <button onClick={() => onPageClick(index + 1)} key={index} className="btn btn-primary">{index + 1}</button>)
                }
                <button className="btn btn-primary">Next</button>
            </div>
        </div>
    );
};

export default Products;