import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  ComposedChart,
  XAxis,
  Legend,
  Line,
  Tooltip,
  YAxis,
  CartesianAxis,
  CartesianGrid,
} from "recharts";
import Banner from "../home/Banner";
export default function Statisticks() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="flex flex-col  my-6 items-center justify-center"> 
    <Banner title={'Statistics'} subtitle={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></Banner>
     <div className="flex items-start text-start justify-start my-8 "> <h1 className="flex items-start text-start font-bold text-[24px] text-black">Statistics</h1></div>
      <ComposedChart width={920} height={250} data={data}>
        <XAxis dataKey="product_title" />
        <YAxis dataKey='price'/>
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="rating" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#9538E2" />
        <Line type="monotone" dataKey="reviews" stroke="#ff7300" />
      </ComposedChart>
    </div>
  );
}
