import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios config/axiosInstance";
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosInstance
            .get("products")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>

            <div className="container-fluid mt-4">
                {products.map((product) => {
                    return (
                        <div key={product.id} className="card mt-4" style={{ width: 'calc(95%/3)', display: 'inline-block', margin: '6px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <img
                                src={product.image}
                                style={{ height: "200px",width:'90%',margin:'3%' }}
                                className="card-img-top"
                                alt="..."
                            />                    <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: 'center', color: 'red', fontWeight: 'bold' }}>{product.title}</h4>
                                <p className="card-text" style={{margin:'3%'}}>{product.description}</p>
                                <a className="btn btn-outline-primary" href={`/details/${product.id}`} style={{marginLeft:'30%'}}>Product Details</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Products;