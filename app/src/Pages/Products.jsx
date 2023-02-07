import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProduct } from '../redux/product/productAction'
import {Box,Image,Heading} from "@chakra-ui/react"
import { ProductCard } from '../component/Product/productCard'
import "../styles/product.css"
import valentine from "../images/valentine.png"

export const Products = () => {
  const dispatch = useDispatch()
  const {loading,error,data} = useSelector((state)=>state.productManager)

  useEffect(()=>{
     dispatch(getAllProduct())
  },[dispatch])


  if(loading){
    return <Box textAlign={"center"} marginTop="180px">
             <Image margin={"auto"} src='https://i.gifer.com/4wqO.gif'/>
         </Box>
  }else if(error){
    return <Box textAlign={"center"} marginTop="180px">
     <Image margin={"auto"} src='https://t3.ftcdn.net/jpg/04/48/35/42/360_F_448354204_33yPB12jtqzD31robpa85NoPctJ2thRd.jpg'/>
</Box>
  }else
  return (
    <div style={{backgroundColor:"white"}}>
    <Box w="98%" margin={"auto"} marginTop={{lg:"150px",md:"210px"}} >
      <Image src={valentine}/>
    </Box>
    <div id='productBox'>
        {
            data.map((ele)=>(
                <ProductCard key={ele.id} {...ele} />
            ))
        }
    </div>
    </div>
  )
}
