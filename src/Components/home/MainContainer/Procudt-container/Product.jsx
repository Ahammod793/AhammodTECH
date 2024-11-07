import { Link } from 'react-router-dom';

export default function Product({product}) {
  const {product_image,product_title,price, product_id} = product;
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className='flex flex-col  justify-around'>
        <img src={product_image} alt="" className="w-full h-72 rounded-xl" />
        <h2 className="text-2xl font-semibold text-[#09080F] pt-6">{product_title}</h2>
        <p className="text-xl font-medium text-[#09080F99]/60 py-4">Price: ${price}</p>
        <Link to={`product_details/${product_id}`}><button className="p-4 btn btn-outline btn-primary">View Details</button></Link>
      </div>
    </div>
  )
}
