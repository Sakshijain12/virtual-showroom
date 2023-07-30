import React, { useEffect, useState } from 'react';
import Order from './Order';
import Axios from 'axios';
import { Icon, Col, Card, Row } from 'antd';
import OrderView from './OrderView';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = mongoose.Types.ObjectId;

const myObjectId = ObjectId("643e530c5045ceaa275fe25c")

const list = ["643e530c5045ceaa275fe25c", "643e530c5045ceaa275fe25c", "643e530c5045ceaa275fe25c"];

const { Meta } = Card;

function OrderList() {

  const [Orders, setOrders] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [PostSize, setPostSize] = useState()

  useEffect(() => {
    const variables = {
        skip: Skip,
        limit: Limit,
    }
    getProducts(variables)
}, [])

const getProducts = (variables) => {
  Axios.post('/api/order/getOrders', variables)
      .then(response => {
          if (response.data.success) {
              if (variables.loadMore) {
                  setOrders([...Orders, ...response.data.Orders])
              } else {
                  setOrders(response.data.Orders)
              }
          } else {
              alert('Failed to fetch order datas')
          }
      })
}

const onLoadMore = () => {
  let skip = Skip + Limit;

  const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
  }
  getProducts(variables)
  setSkip(skip)
}

const renderCards = Orders.map((order, index) => {

  return <Col lg={6} md={8} xs={24}>
      <Card
          hoverable={true}
          cover={<a href={`/order/${order._id}`} > hi </a>}
      >
          <Meta
              title={order.title}
              description={`Rs${order.price}`}
          />
      </Card>
  </Col>
})
  
  return (
    <div>
      {list.map(c => <Order productId={c}/>)}
      {Orders.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No order yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>
                        {renderCards}
                    </Row>
                </div>
            }
            <br /><br />
            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }
    </div>
  );
};

export default OrderList