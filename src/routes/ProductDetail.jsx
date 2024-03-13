import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { products } from '../constants';
import ProductDetailsPage from '../Details/ProductDetailsPage';

export async function loader({ params }) {
  const ProductName = products.find((product) => product.name === params.name);
  return { ProductName };
}


const ProductDetail = (params) => {
  const { ProductName } = useLoaderData();
  return (
    <ProductDetailsPage {...ProductName} />
  )
}

export default ProductDetail