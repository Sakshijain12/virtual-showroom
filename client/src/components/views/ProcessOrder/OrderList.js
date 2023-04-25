import React from 'react';
import Order from './Order';


const list = ["ord#001","ord#002","ord#003","ord#004"];
function OrderList() {
  return (
    <div>
      {list.map(c => <Order orderID={c} />)}
    </div>
  );
};

export default OrderList