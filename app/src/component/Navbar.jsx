import React, { useEffect } from "react";
import "../styles/Navbar.css";
import { Box, Button, Text } from "@chakra-ui/react";
import { AiOutlineAppstore } from "react-icons/ai";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiSearch, BiHeart, BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import SignInModal from "./LoginModal";

export const Navbar = () => {
  const menu = [
    "Deals",
    "Valentine's Day",
    "Game Time",
    "Black History Month",
    "Tech",
    "Home",
    "Grocery & essentials",
    "Walmart+",
  ];
  const [amount, setAmount] = useState(0);
  const [totalitem,setTotalItem] = useState(0)

  const cartItem = useSelector((state)=>state.cartManager)
  console.log(cartItem.cart)
  
  const item = cartItem.cart
  const totalPrice = item.reduce((acc,item)=> (acc + +(item.price)),0)
  console.log(totalPrice)

  useEffect(()=>{

     setTotalItem(cartItem.cart.length) 
     setAmount(Math.floor(totalPrice))

  },[cartItem.cart.length,totalPrice])

  return (
    <div id="navbar" style={{ backgroundColor: "#0071dc",position:"fixed",zIndex:"1" ,width:"100%", margin:"0px"}} >
      <div id="upNav">
        <div id="logo">
          <Link to={"/"}>
          <img
            id="logoImage"
            width={"100%"}
            src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
            alt="logo"
          /></Link>
        </div>
        <Button
          borderRadius={"30px"}
          size={{lg:"md",md:"sm",base:"xs"}}
          padding="25px"
          color="white"
          variant={"ghost"}
          _hover={{ backgroundColor: "#004f9a" }}
          leftIcon={<AiOutlineAppstore fontSize={{lg:"20px",md:"15px",base:"15px"}} fontWeight="bold" />}
          alignItems="center"
        >
          Departments
        </Button>
        <Button
          borderRadius={"30px"}
          size={{lg:"md",md:"sm",base:"xs"}}
          padding="25px"
          color="white"
          variant={"ghost"}
          _hover={{ backgroundColor: "#004f9a" }}
          leftIcon={<AiOutlineAppstore fontSize={{lg:"20px",md:"15px",base:"15px"}} fontWeight="bold" />}
          alignItems="center"
        >
          Services
        </Button>
        <InputGroup size={{lg:"md",md:"sm",base:"xs"}} w={{lg:"45%",md:"30%",base:"20%"}}>
          <Input
            borderRadius="20px"
            backgroundColor={"white"}
            placeholder="Search everything at Walmart online and in store"
          />
          <InputRightElement width="3.5rem">
            <Button
              size={{lg:"sm",md:"xs",base:"xs"}}
              borderRadius={"60%"}
              backgroundColor="#ffc220"
              colorScheme={"#ffc220"}
            >
              <BiSearch size={"16px"} color="black" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Box
          display="flex"
          justifyContent={"space-around"}
          color="white"
          w={{lg:"7%",md:"5%",base:"4%"}}
          borderRadius="20px"
          padding={"5px"}
          _hover={{ backgroundColor: "#004f9a" }}
          cursor="pointer"
        >
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <BiHeart size={"16px"} />
          </Box>
          <Box>
            <Text fontSize={"12px"}>Reorder</Text>
            <Text
              fontSize={"16px"}
              fontFamily="Bogle,Helvetica Neue, Helvetica, Arial, sans-serif"
            >
              My Items
            </Text>
          </Box>
        </Box>
        {/* Login Modal */}
        <SignInModal/>
        {/* Cart modal */}
        <Link to={"cart"}>
        <Box
          border={"0px solid black"}
          borderRadius="20px"
          padding={"10px"}
          _hover={{ backgroundColor: "#004f9a" }}
          cursor="pointer"
        >
          <Text position={"absolute"} right="1.5%" top={"6"} color="#ffc220" padding="0.5px">{totalitem}</Text>
          <BsCart2 position="relative" color="white" fontSize={"25px"} />
          <Text color={"white"} fontSize="x-small">{`$${amount}.00`}</Text>
        </Box>
        </Link>
      </div>
      <div id="downNav">
        <Box
          w={"40%"}
          gap="10px"
          border={"0px solid black"}
          color={"white"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <img
            width={"4%"}
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
            alt="img"
          />
          <Text fontWeight={"bold"}>How do you want your items?</Text> |{""}
          <p>Address</p>
        </Box>
        <Box
          w={"50%"}
          border="0px solid white"
          display={"flex"}
          color="white"
          justifyContent={"space-around"}
        >
          {menu.map((ele) => (
            <Text
              fontWeight={"bold"}
              cursor={"pointer"}
              _hover={{ textDecoration: "underline" }}
  
            >
              {ele}
            </Text>
          ))}
        </Box>
      </div>
    </div>
  );
};
