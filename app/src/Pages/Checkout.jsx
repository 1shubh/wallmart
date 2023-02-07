import React from 'react'
import "../styles/checkout.css"
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Box,Image,Text,Heading,Button, useFormControlStyles,Input,Select,Flex} from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'



import { OrderModal } from '../component/orderModal';


export const Checkout = () => {
  const [amount, setAmount] = useState(0);
  const [totalitem, setTotalItem] = useState(0);
  const [payment,setPay] = useState("cash")
  // const [quantity, setQuantity] = useState(1);

  // const dispatch = useDispatch();

    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const date =   Date(timestamp);
    console.log(date)



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

  const handleChange = (e) => {
    let selected = e.target.value;
    setPay(selected)
}

  return (
    <div id='checkout'>
        <div
          id="checoutComponent"
        >
        {/* Address Form box */}
        <Box
          w={{lg:"65%",md:"100%",base:"100%"}}
          border="0px solid blue"
          borderRadius={"10px"}
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          backgroundColor={"white"}
        >
          <Box display={"flex"} justifyContent="center" alignItems={"center"} border="0px solid black" padding={"20px"} backgroundColor="#f2f8fd" borderTopRadius={"10px"}>
            <Image border="0px solid black" w="100px" height={"100px"} src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" alt="" />
            <Heading size={"md"}>Free shipping, arrives by {date}</Heading>
          </Box>
          {/* Form */}
          <Box id='form' padding={"20px"}>
               <Text color={"#74767c"} fontSize={"14px"}>*Required Field</Text>
               <Text fontWeight={"bold"} fontSize="16px">Shipping Address</Text>
               <Text  color={"#74767c"} fontSize={"14px"}>Where Should we deliver your order?</Text>
               <FormControl display={"grid"} gridTemplateColumns="repeat(2,1fr)" gap={"10px"}>
                 <FormLabel>First name</FormLabel>
                 <Input placeholder='First name' />
                 <FormLabel>Last name</FormLabel>
                 <Input placeholder='Last name' />
                 <FormLabel>Street Address</FormLabel>
                 <Input placeholder='Street Address' />
                 <FormLabel>City</FormLabel>
                 <Input placeholder='City' />
                 <FormLabel>State</FormLabel>
                 <Input placeholder='State' />
                 <FormLabel>Zip Code</FormLabel>
                 <Input placeholder='Zip Code' type={"number"} />
                 <FormLabel>Country</FormLabel>
                 <Input placeholder='Country' />
                 <FormLabel>Mobile Number</FormLabel>
                 <Input placeholder='Mobile Number' type={"number"} />
               </FormControl>
               
               <Text padding={"20px"} fontWeight="bold">{`${totalitem} items`}</Text>
               <Box w={"50%"} display={"grid"} gridTemplateColumns="repeat(4,1fr)">
                {
                  item.map((ele)=><Image w={"70%"} src={ele.image_src} />)
                }</Box>
               <Text fontWeight={"bold"} fontSize="20px">Payment Option</Text>
                <Select w={"50%"} onChange={handleChange} borderColor={"black"} placeholder="Select Pay Method">
                    <option value="cash">Cash On Delivery</option>
                    <option value="card">Card</option>
                </Select>
               <FormControl width={"50%"} marginTop="20px" display={"grid"} gap="10px">
                   <FormLabel fontSize={"20px"} fontWeight="bold">Enter Card Details</FormLabel>
                   <Select placeholder='Select Card' borderColor={"black"} disabled={payment==="cash"}>
                    <option value="Visa">Visa</option>
                    <option value="Rupay">Rupay</option>
                    <option value="MasterCard">Master Card</option>
                   </Select>
                   <Input type="text" placeholder='Card Holder Name' borderColor={"black"} disabled={payment==="cash"} />
                   <Input type={"number"} placeholder="Card Number" borderColor={"black"} disabled={payment==="cash"} />
                   <Flex gap={2}>
                   <Input type={"month"} placeholder="Expiry Date" borderColor={"black"} disabled={payment==="cash"}/>
                   <Input type="number" placeholder='CVV' borderColor={"black"} disabled={payment==="cash"}/>
                   </Flex>
                   {/* <Button colorScheme={"blue"}>{payment === "cash" ? "Pay on Delivery" : "Pay"}</Button> */}
                   <OrderModal totalItem={totalitem} amount={amount} payment={payment} />
                </FormControl>
          </Box>
          
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
            <Text>Included</Text>
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
  )
}
