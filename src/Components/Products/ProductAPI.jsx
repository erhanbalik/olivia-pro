import {useEffect, useContext} from 'react';
import DataContext from '../../Context/Context';

const ProductAPI = () => {
    const {setProduct} = useContext(DataContext);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProduct(json))
    },[]);
}

export default ProductAPI;