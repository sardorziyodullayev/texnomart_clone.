import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import c from './Products.module.css';
import { BsCart3, BsHeart } from 'react-icons/bs';
import { MdCompareArrows } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setCountIndicator } from '../../store/action/basketAction';

const Products = () => {
    const count = useSelector((i) => i.count);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setCountIndicator(count + 1));
    };

    const [allProductsData, setAllProductsData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/v2/allproducts')
            .then((response) => setAllProductsData(response.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={c.container}>
            <h2 className={c.productsTitle}>Zo'r narx</h2>
            <div className={c.productsBox} key={uuidv4}>
                {allProductsData.map((product) => (
                    <div className={c.productsWrapper}>
                        <div className={c.productsItem}>
                            <img className={c.productImg} src={product?.image[0]?.url} alt="" />
                            <h2 className={c.productName}>{product.name}</h2>
                            <p className={c.productPrice}>{product.price} $</p>
                            <div className={c.productCartBox}>
                                <button className={c.productCartBtn} onClick={handleChange}>
                                    <BsCart3 />
                                    <span className={c.productBtnText}>Savatchaga</span>
                                </button>
                                <BsHeart className={c.productBtnIcon} />
                                <MdCompareArrows className={c.productBtnIcon} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
