import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product/Product"


const Products = () => {
    const [products, setProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [bang, setBang] = useState(true)

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
    }, []);
    const pages = Math.ceil(totalProducts / 12)

    const onPageClick = async (pageNum) => {
        setCurrentPage(pageNum);
        const res = await axios.get(`http://localhost:3000/single-page-products?skip=${(pageNum * 12) - 12}`);
        const data = await res.data;
        setProducts(data);
        console.log(data)
    }
    const onPrevClick = () => {
        setCurrentPage(currentPage - 1);
        onPageClick(currentPage - 1);
    }
    const onNextClick = () => {
        setCurrentPage(currentPage + 1);
        onPageClick(currentPage + 1);
    }

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value;
        axios.get(`http://localhost:3000/products-by-name?text=${text}`)
            .then(res => {
                setProducts(res.data)
                // console.log(res.data)
            });
        e.target.search.value = ""
    }
    const handleSort = (e) => {
        if (e.target.value === "low-to-high") {
            const sortedProducts = products.sort(function (a, b) { return a.price - b.price })
            setProducts(sortedProducts);
            setBang(!bang);
            return
        } else if (e.target.value === "high-to-low") {
            const sortedProducts = products.sort(function (a, b) { return b.price - a.price })
            setProducts(sortedProducts);
            setBang(!bang);
            return
        } else if (e.target.value === "newest-first") {
            const sortedProducts = products.sort(function (a, b) { return new Date(b.added_date) - new Date(a.added_date) })
            setProducts(sortedProducts);
            setBang(!bang);
            return
        }
    }

    return (
        <div>
            <h2 className="text-center my-6 text-2xl font-bold">Products</h2>
            <div className="md:flex justify-center items-center gap-10 mb-6">
                <div className="">
                    <h2 className="text-xl font-bold">Search by Product Name</h2>
                    <form onSubmit={handleSearch}>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="search" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                    </form>
                </div>
                <div className=" flex justify-center">
                    <div>
                        <label className="label">
                            <h3 className="font-bold">Sort Products</h3>
                        </label>
                        <select defaultValue={"select"} onChange={handleSort} name="category" className="select select-bordered w-fit">
                            <option disabled value="select">Select</option>
                            <option value="low-to-high">Price Low to High</option>
                            <option value="high-to-low">Price High to Low</option>
                            <option value="newest-first">Newest first</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className="flex justify-center gap-4 my-4">
                {
                    currentPage <= 1 || <button onClick={onPrevClick} className="btn btn-primary">Previous</button>
                }
                {
                    Array.from({ length: pages }).map((_item, index) => <button onClick={() => onPageClick(index + 1)} key={index} className="btn btn-primary">{index + 1}</button>)
                }
                {
                    currentPage >= pages || <button onClick={onNextClick} className="btn btn-primary">Next</button>
                }
            </div>
        </div>
    );
};

export default Products;