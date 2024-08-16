

const Product = ({ product }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={product.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <div className="flex justify-between">
                    <p>Brand: {product.brand_name}</p>
                    <p>Category: {product.category_name}</p>
                </div>
                <p>Upload Date: {product.added_date}</p>
                <h4 className="btn btn-primary text-white">${product.price}</h4>
            </div>
        </div>
    );
};

export default Product;