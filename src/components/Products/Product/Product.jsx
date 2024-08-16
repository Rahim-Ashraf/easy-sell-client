

const Product = ({ product }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product?.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <h4 className="btn btn-primary text-white">${product.price}</h4>
            </div>
        </div>
    );
};

export default Product;