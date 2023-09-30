import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const statusArr = [
    {key:1, value : "Ordered"},
    {key:2, value : "Packed"},
    {key:3, value : "Out for Delivery"},
    {key:4, value : "Delivered"},
]
function OrderList(props) {

  const [Orders, setOrders] = useState([])
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [status, setStatus] = useState()

  useEffect(() => {
        const variables = {
            skip : Skip,
            limit : Limit
        }
        getOrders(variables);
  },[])

    const getOrders = (variables) => {
    Axios.post('/api/order/getOrders', variables)
        .then(response => {
            if (response.data.success) {     
                    setOrders(response.data.Orders)
            } else {
                alert('Failed to fetch order datas')
            }
        })
    }

    const onStatusChange = (event, index, id)=>{
        const variables = {
            orderId : id,
            newStatus : event.currentTarget.value
        }
        Axios.post('https://virtual-showroom.onrender.com/api/order/updateStatus', variables)
        .then(response => {
            if (response.data.success) {    
                const updatedOrders = [...Orders];

                // Update the name of the element at the given index
                updatedOrders[index] = { ...updatedOrders[index], status: variables.newStatus};
            
                // Update the state with the new list
                setOrders(updatedOrders);
            } else {
                alert('Failed to update status')
            }
        })

    }
  return (
    <div style={{ width: '80%', margin: '3rem auto' }}>
      {/* {list.map(c => <Order productId={c}/>)} */}
      <table>
            <thead>
                <tr>
                    <th>Order Id</th>
                    <th>User Name</th>
                    <th>Date of Purchase</th>
                    <th>Status</th>
                </tr>
            </thead>

            <tbody>
                {props.user.userData &&
                    Orders.map((ele, index) => (
                        <tr key={ele._id}>
                            <td><a href = {`/orderview/${ele._id}`}>{ele._id}</a></td>
                            <td>{ele.userID}</td>
                            <td>{ele.createdAt}</td>
                            <td>
                                <select onChange={(event)=>onStatusChange(event, index, ele._id)} value={ele.status}>
                                    {statusArr.map(item => ( 
                                        <option key={item.key} value={item.key}>{item.value} </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default OrderList