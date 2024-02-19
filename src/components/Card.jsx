import React from "react";
import Table from "./Table"
import Revenue from "./Revenue";

const Card = ({ Id }) => {

  const totalOrders = [
    {
      order_id: 101,
      order_received: "07 sep 2021 05:13 PM",
      store: "The Moody Chef",
      title: "Total Sales",
      amount: "$30.99",
      status: "Ready",
    },
    {
      order_id: 102,
      order_received: "07 sep 2021 05:13 PM",
      store: "The Moody Chef",
      title: "Total Sales",
      amount: "$30.99",
      status: "Success",
    },
    {
      order_id: 103,
      order_received: "07 sep 2021 05:13 PM",
      store: "The Moody Chef",
      title: "Total Sales",
      amount: "$30.99",
      status: "Ready",
    },
  ];
  const deliverOrders = [
    {
      order_id: 105,
      order_received: "07 sep 2021 05:13 PM",
      store: "The Moody Chef",
      title: "Total Sales",
      amount: "$30.99",
      status: "Success",
    },
    {
      order_id: 107,
      order_received: "07 sep 2021 05:13 PM",
      store: "The Moody Chef",
      title: "Total Sales",
      amount: "$30.99",
      status: "Success",
    },
    {
      order_id: 108,
      order_received: "07 sep 2021 05:13 PM",
      store: "The Moody Chef",
      title: "Total Sales",
      amount: "$30.99",
      status: "Success",
    },
  ];
  const totalCustomers = [
    {
      id: 1,
      enrollMentTime: "27 Aug 2021 11:57 AM",
      name: "Srishti",
      number: "7973742809",
      email: "srishti@siro.com",
    },
    {
      id: 2,
      enrollMentTime: "27 Aug 2021 11:57 AM",
      name: "Karina",
      number: "7973742809",
      email: "srishti@siro.com",
    },
    {
      id: 3,
      enrollMentTime: "27 Aug 2021 11:57 AM",
      name: "Anku",
      number: "7973742809",
      email: "anku@anku.com",
    },
  ];
 const totalCoupons = [
   {
     id: 1,
     code: "SAVE20",
     discount: 20,
     description: "Get 20% off on your purchase",
   },
   {
     id: 2,
     code: "FREESHIP",
     discount: 100,
     description: "Free shipping on orders over $100",
   },
   {
     id: 3,
     code: "BOGO50",
     discount: 50,
     description: "Buy one, get one 50% off",
   },
   // Add more coupon objects as needed
 ];
  const stores = [
    { id: 1, name: "Store A", location: "Location A" },
    { id: 2, name: "Store B", location: "Location B" },
    { id: 3, name: "Store C", location: "Location C" },
  ];
  const totalRunners = [
    { id: 1, name: "John", age: 25, location: "City A" },
    { id: 2, name: "David", age: 30, location: "City B" },
    { id: 3, name: "Emily", age: 28, location: "City C" },
    // Add more objects as needed
  ];

  return (
    <>
      {Id == 1 && <Table data={totalOrders} heading={"Total Orders"} />}
      {Id == 2 && <Table data={deliverOrders} heading={"Delivered Orders"} />}
      {Id == 3 && <Revenue heading={"Monthly Revenue"} />}
      {Id == 4 && <Revenue heading={"Monthly Incomes"} />}
      {Id == 5 && <Table data={totalCustomers} heading={"Total customers"} />}
      {Id == 6 && <Table data={totalCoupons} heading={"Coupons"} />}
      {Id == 7 && <Table data={stores} heading={"Stores"} />}
      {Id == 8 && <Table data={totalRunners} heading={"Total Runners"} />}
    </>
  );
};
export default Card;