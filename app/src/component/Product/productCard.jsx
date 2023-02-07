import { Button, Image,Text,Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddToCart } from "../../redux/cart/cartAction";
import { useDispatch } from "react-redux";

export const getTotalItem = (setTotalItem) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  setTotalItem(cart.length);
};
export const ProductCard = (prop) => {
  const { id, product_name, image_src, price, review } = prop;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(AddToCart(prop));
  };
  return (
    <div id="productCard" key={id}>
      <div id="imageBox">
        <Image border={"0px solid black"} boxSize="100%" src={image_src} alt="img" />
      </div>
      <Button colorScheme='blue'onClick={handleClick}>Add+</Button>
      <Box border="0px solid black" marginTop={"10px"} overflow="hidden">
        <Text fontSize={"14px"} overflow="hidden">{product_name}</Text>
         <Text fontWeight={"bold"}>${price}</Text>
         <p>{review} Reviews</p>
      </Box>
    </div>
  );
};
