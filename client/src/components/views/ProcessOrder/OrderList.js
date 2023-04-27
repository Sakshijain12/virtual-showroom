import React from 'react';
import Order from './Order';
import OrderView from './OrderView';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
ObjectId = mongoose.Types.ObjectId;

const myObjectId = ObjectId("643e530c5045ceaa275fe25c")
//myObjectIdString = myObjectId.toString()

const list = ["643e530c5045ceaa275fe25c", "643e530c5045ceaa275fe25c", "643e530c5045ceaa275fe25c"];
function OrderList() {
  return (
    <div>
      {list.map(c => <Order productId={c}/>)}
    </div>
  );
};

export default OrderList