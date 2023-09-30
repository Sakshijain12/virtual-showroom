import React, { useEffect, useState, Image } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
//import { useDispatch } from 'react-redux';

function OrderView(props) {
  const orderId = props.match.params.orderId
  const [Order, setOrder] = useState({})
  const [prodList, setProdList] = useState([])
  const [Num, setNum] = useState(3)
  let products = []

  console.log("order_id", orderId);

  useEffect(() => {
    getOrder(orderId);
  }, [])

  useEffect(() => {
    console.log("set_order", Order)
    if (Order && Order.productList && Order.productList.length > 0) {
      getProductList();
    }
  }, [Order])

  const getOrder = async (order_id) => {
    const res = await Axios.get(`https://virtual-showroom.onrender.com/api/order/get_order_by_id?id=${order_id}`);
    setOrder(res.data);
  }

  const getProductList = async () => {
    await Promise.all(
      Order.productList.map(async (productItem) => { getProduct(productItem.id) })
    );
    console.log("prodList", products);
    setTimeout(() => {
      setProdList(products);
    }, 2000);
  };


  const getProduct = async (prod_id) => {
    Axios.get(`https://virtual-showroom.onrender.com/api/product/products_by_id?id=${prod_id}&type=single`)
      .then(response => {
        console.log("prod", response.data[0]);
        products.push(response.data[0]);
        return response.data[0];
      })
  }

  const showData = () => {
    return <table>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {prodList.map((val, key) => {
        return (
          <tr key={key}>
            <td>{prodList[key].title}</td>
            <td>{Order.productList[key].quantity}</td>
            <td>{prodList[key].price}</td>
          </tr>
        )
      })}
    </table>
  }

  const renderImage = () => {
    let images = []
    prodList.map((prod) => {
      prod.images.map((img) => {
        images.push(img)
      })
    })
    return images.map((img, i_idx) => (
      <Col key={i_idx} lg={6} md={8} xs={24}>
        <img
          style={{ maxWidth: "150px",minWidth:'150px', minHeight:'150px', maxHeight: '150px' , border:'solid'}}
          src={img}
          alt={`productImage-${i_idx}`}
        />
      </Col>
    ));
  }



  console.log("p", prodList)
  return (
    <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Process the order</h1>
      </div>

      <br />

      <Row gutter={[16, 16]} >
        <Col lg={12} xs={48}>
          <h2>Order Information</h2>
          {prodList.length == 0 || prodList[0] == undefined ?
            <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
              <h2>loading...</h2>
            </div> :
            <div>
              <Row gutter={[16, 16]} >
                {renderImage()}
              </Row>
              <br />
              <br />
              {showData()}
            </div>
          }
        </Col>
        <Col lg={12} xs={48}>
          <h2>Process Order</h2>
          <label>
            Enter the number of workers to be assigned:
            <br />
            <input value={Num} onChange={e => setNum(e.target.value)} />
          </label>
          <br />
          <br />
          {/* <button onClick={handleSearch}>Assign</button> */}
          <button>Assign</button>

        </Col>
      </Row>
    </div>
  )
}

export default OrderView