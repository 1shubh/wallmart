
import React from 'react'
import "../Product/ProductBox.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/product/productAction'
import { ProductCard } from './productCard'
import { Heading,Box,Image } from '@chakra-ui/react'

export const ProductBox = () => {
    const dispatch = useDispatch()
    const {loading,error,data} = useSelector((state)=>state.productManager)

    useEffect(()=>{
       dispatch(getProduct())
    },[dispatch])
    // console.log(data)

  if(loading){
    return <Box>
        <Image src='https://i.gifer.com/4wqO.gif'/>
    </Box>
  }else if(error){
    return <Heading>Error.......</Heading>
  }else
  return (
    <div id='productBox'>
        {
            data.map((ele)=>(
                <ProductCard key={ele.id} {...ele} />
            ))
        }
    </div>
  )
}
