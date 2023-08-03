import React from 'react'

function HistoryPage(props) {
    const convertTimestampToDate = (timestamp) => {
        const date = new Date(timestamp);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>My Purchases</h1>
            </div>
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>

                    {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map(item => (
                            item.prodList.map(ele =>(
                                <tr key={ele.id}>
                                <td>{item.orderId}</td>
                                <td>{ele.price}</td>
                                <td>{ele.quantity}</td>
                                <td>{convertTimestampToDate(ele.dateOfPurchase)}</td>
                            </tr>
                            ))
                        ))}


                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
