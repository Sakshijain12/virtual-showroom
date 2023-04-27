import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';

function OrderView(props) {
    const dispatch = useDispatch();
    const productId = props.productID
    console.log(productId);
    const [Product, setProduct] = useState([])

    useEffect(() => {
        Axios.get(`/api/orderview/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    }, [])

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} xs={24}>
                    <ProductInfo
                        addToCart={addToCartHandler}
                        detail={Product} />
                </Col>
            </Row>
        </div>
    )
}

export default OrderView




// import React from 'react'
// import { Row, Col } from 'antd';
// function OrderView() {
//   return (
//     <div>
//         <Row gutter={[16, 16]} >
//                 <Col lg={12} xs={24}>
//                     <p>
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                     </p>
//                 </Col>
//                 <Col lg={12} xs={24}>
//                 <p>
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                       Hiiiiiii d vdxvf nv v fc vb fdd v
//                       f fddfb df fng bdx vdfn nfv sgf nvb df 
//                     </p>
//                 </Col>
//             </Row>
//     </div>
//   )
// }

// export default OrderView