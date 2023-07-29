import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import { useSelector } from "react-redux";

function ProductInfo(props) {

    const [Product, setProduct] = useState({})
    const user = useSelector(state => state.user)
    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    
    if (user.userData && !user.userData.isAuth){
        return (
            <div>
                <Descriptions title="Product Info">
                    <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                    <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                    <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                    <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
                </Descriptions>
    
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" shape="round" type="danger"
                        href='/login'
                    >
                        Add to Cart
                        </Button>
                </div>
            </div>
        )
    }else{
        if(user.userData && !user.userData.isAdmin){
            return (
                <div>
                    <Descriptions title="Product Info">
                        <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                        <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                        <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                        <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
                    </Descriptions>
        
                    <br />
                    <br />
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="large" shape="round" type="danger"
                            onClick={
                                addToCarthandler
                            }
                        >
                            Add to Cart
                            </Button>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <Descriptions title="Product Info">
                        <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                        <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                        <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                        <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
                    </Descriptions>
        
                    <br />
                    <br />
                    <br />
                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="large" shape="round" type="danger"
                            onClick={
                                addToCarthandler
                            }
                        >
                            Add to Cart
                            </Button>
                    </div> */}
                </div>
            )
        }
    }
}

export default ProductInfo
