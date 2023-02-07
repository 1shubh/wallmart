import { Heading, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
// import { Tooltip } from '@chakra-ui/react'
import "../styles/cart.css";
import { ADD_TO_CART } from "../redux/cart/cartActionType";
import { deleteItem } from "../redux/cart/cartAction";
import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const Cart = () => {
  const [amount, setAmount] = useState(0);
  const [totalitem, setTotalItem] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cartManager);
  console.log(cartItem.cart);

  const item = cartItem.cart;
  const totalPrice = item.reduce(
    (acc, item) => acc + +(item.price * item.count),
    0
  );
  console.log(totalPrice);

  useEffect(() => {
    setTotalItem(cartItem.cart.length);
    setAmount(Math.floor(totalPrice));
  }, [cartItem.cart.length, totalPrice]);
  // handle quantity increase

  const handleInc = (product) => {
    setQuantity(quantity + 1);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((cartItem) => {
      if (cartItem.id === product.id) {
        cartItem.count = quantity;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };

  //handle quantity decrease
  const handleDec = (product) => {
    setQuantity(quantity - 1);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach((cartItem) => {
      if (cartItem.id === product.id) {
        cartItem.count = quantity;
      }
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: ADD_TO_CART,
      payload: cart,
    });
  };
  return (
    <div id="cart">
      <Heading fontFamily={"sans-serif"} fontSize="3xl">
        Cart ({totalitem} items)
      </Heading>
      <div
        id="cartComponent"
      >
        {/* cart items box */}
        <Box
          w={{lg:"65%",md:"100%",base:"100%"}}
          border="0px solid blue"
          borderRadius={"10px"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          backgroundColor={"white"}
        >
          <Text padding={"20px"} fontWeight="bold">{`${totalitem} items`}</Text>
          {item.map((ele) => (
            <div
              key={ele.id}
              style={{
                display: "flex",
                border: "0px solid blue",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <img width={"10%"} src={ele.image_src} alt="img" />
              <Text w={"30%"} fontSize={{md:"14px",base:"12px"}}>{ele.product_name}</Text>
              <Text fontWeight={"bold"} fontSize={{md:"14px",base:"12px"}}>{`$ ${ele.price * ele.count}`}</Text>
              <Button leftIcon={<FaRegTrashAlt />} size={{lg:"sm",md:"xs",base:"xs"}} onClick={()=>dispatch(deleteItem(ele))}>
                Remove
              </Button>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <Button onClick={() => handleDec(ele)} size={{lg:"sm",md:"xs",base:"xs"}}>
                  -
                </Button>
                <Text fontSize={{md:"14px",base:"12px"}}>{ele.count}</Text>
                <Button onClick={() => handleInc(ele)} size={{lg:"sm",md:"xs",base:"xs"}}>
                  +
                </Button>
              </Box>
            </div>
          ))}
        </Box>
        {/* Checkout box */}
        <Box
          w={{lg:"30%",md:"100%",base:"100%"}}
          h="fit-content"
          border="0px solid black"
          padding={"20px"}
          display="grid"
          gap={"10px"}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          backgroundColor={"white"}
          // position={"fixed"}
          // marginLeft="52rem"
        >
          <Link to={"checkout"}>
          <Button colorScheme={"blue"} w="100%" disabled={totalitem === 0}>
            Contiue To Checkout
          </Button></Link>
          <Box display="flex" justifyContent={"space-between"}>
            <Text fontWeight={"bold"}>Subtotal ({totalitem} Items)</Text>
            <Text>{`$${amount}.00`}</Text>
          </Box>
          <Box display="flex" justifyContent={"space-between"}>
            <Text>Shipping</Text>
            <Text>Free</Text>
          </Box>
          <Box display="flex" justifyContent={"space-between"}>
            <Text fontWeight={"bold"}>Taxes</Text>
            <Text>Calculated at checkout</Text>
          </Box>
          <Box
            display="flex"
            justifyContent={"space-between"}
            paddingTop="20px"
          >
            <Text fontWeight={"bold"} fontSize="18px">
              Estimated Total
            </Text>
            <Text fontWeight={"bold"} fontSize="18px">{`$${amount}.00`}</Text>
          </Box>
        </Box>
      </div>
    </div>
  );
};
