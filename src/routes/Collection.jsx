import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Nav from '../components/Nav'
import Footer from '../sections/Footer'
import { down_icon } from '../assets/images'
import PopularProductCard from '../components/PopularProductCard'

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext)
  const [showFilter , setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category , setCategory] = useState([])
  const [sortType , setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory( prev => [...prev, e.target.value]);
    }
  }

  useEffect(() =>{
    console.log(category)
  }, [category])

  const applyFilter = () => {
     let productsCopy = products.slice();

     if(showSearch && search){
      productsCopy = productsCopy.filter(item =>item.name.toLowerCase().includes(search.toLowerCase()));
     }

     if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
     }

     setFilterProducts(productsCopy);
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();
    switch(sortType){
      case "low-high":
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)))
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, [products])

  useEffect(() => {
    applyFilter();
  }, [category,search,showSearch])

  useEffect(() =>{
    sortProduct();
  },[sortType])

  return (

    <div>

    <Nav />
    <div className='flex flex-col md:flex-row gap-6 pt-10 border-t px-4 md:px-20 mb-10'>
  {/* Filter Sidebar */}
  <div className='w-full md:min-w-60 md:w-60'>
    <p
      onClick={() => setShowFilter(!showFilter)}
      className='my-2 text-xl flex items-center cursor-pointer gap-2'
    >
      FILTERS
      <img
        className={`h-3 md:hidden transition-transform ${showFilter ? '' : '-rotate-90'}`}
        src={down_icon}
        alt=""
      />
    </p>

    <div className={`border border-gray-300 pl-5 py-3 mt-11 ${showFilter ? '' : 'hidden'} md:block rounded-xl`}>
      <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
      <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'}  onChange={toggleCategory}/> Kids
            </p>
      </div>
    </div>
  </div>

    <div className='flex-1'>
      <div className='flex justify-between text-base sm:text-2xl mb-4'>
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl max-sm:text-2xl justify-center flex font-serif"><span className='text-gray-500 pr-2'>ALL </span>COLLECTIONS</h1>
          <p className="w-6 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
        <select onChange={(e) =>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
          <option value="relevant">Sort by: Relavent</option>
          <option value="low-high">Sort by: Low to High</option>
          <option value="high-low">Sort by: High to Low</option>
        </select>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 sm:gap-4 gap-14'>
        {filterProducts.map((product) => (
          <a href={`product-detail/${product._id}`} key={product._id}>
            <PopularProductCard {...product} />
          </a>
        ))}
      </div>
    </div>
</div>
    <Footer></Footer>
    </div>
  )
}

export default Collection