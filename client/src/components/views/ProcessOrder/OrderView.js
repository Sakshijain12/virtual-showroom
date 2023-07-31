import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
//import { useDispatch } from 'react-redux';
import logo from "./ROOM.jpg"

//import csv from 'csvtojson';


function OrderView(props) {
    //const dispatch = useDispatch();
    const productId = props.productID
    console.log(productId);
    const [Product, setProduct] = useState([])
    const [Num, setNum] = useState(3)

  //   const onNumChange = (event) => {
  //     setNum(event.currentTarget.value)
  // }
    useEffect(() => {
        Axios.get(`/api/orderview/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })

    })

    // const addToCartHandler = (productId) => {
        
    // }

    
    // ##################3 Image rendering #######################
    const listImg = [logo,logo,logo,logo,logo,logo,logo];
    const renderImage = listImg.map((add) =>{
        return <Col lg={6} md={8} xs={24}>
        <img style={{ width: "150px", maxHeight: '150px' }}
             src={logo}
             alt="productImage" />
          </Col>
      })

    // Order details
    const data = [
      { name: "Sofa",  type: "Cabriol Sofa", quantity: 2},
      { name: "Table", type: "Study Table", quantity: 1},
      { name: "Chair", type: "Arm Chair", quantity: 3},
    ]

    // ############### csv File handeling ######################
    //const [File, setFile] = useState([]);
    //const [searchType, setSearchType] = useState('sette');

    // useEffect(() => {
    //   async function fetchData() {
    //     const csvFilePath = './virtual-showroom - Almirah.csv';
    //     const jsonArray = await csv().fromFile(csvFilePath);
    //     console.log(jsonArray);
    //     setFile(jsonArray);
    //   }
    //   fetchData();
    // }, []);

    function handleSearch() {
      // const row = File.find(row => row.type == searchType);
      // console.log(File);
      // Do something with the row

    }


    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Product.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={48}>
                <h2>Order Information</h2>
                  <Row gutter={[16, 16]} >
                      {renderImage}
                  </Row>
                  <br />
                  <br />
                  <table>
                    <tr>
                      <th>Product Name</th>
                      <th>Type</th>
                      <th>Quantity</th>
                    </tr>
                    {data.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.name}</td>
                          <td>{val.type}</td>
                          <td>{val.quantity}</td>
                        </tr>
                      )
                    })}
                  </table>

                </Col>
                <Col lg={12} xs={48}>
                <h2>Process Order</h2>
                  <label>
                    Enter the number of workers to be assigned:
                    <br/>
                    <input value={Num} onChange={e => setNum(e.target.value)} />
                  </label>
                  <br/>
                  <br/>
                  <button onClick={handleSearch}>Assign</button>

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
