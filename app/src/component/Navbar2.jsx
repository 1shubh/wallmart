import "../styles/Navbar2.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useState ,useEffect} from 'react'
import { Box, Button, Text,Input,Image, InputGroup, InputRightElement,Flex, Grid } from "@chakra-ui/react";
import { BiSearch, BiHeart, BiUser,BiReceipt,BiDownload,BiHelpCircle,BiGift } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa"
import { AiOutlineAppstore } from "react-icons/ai";
import SignInModal from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { logout } from "../redux/auth/authAction";



export const Navbar2 =() =>{
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
      const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false)
  const [amount, setAmount] = useState(0);
  const [totalitem,setTotalItem] = useState(0)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const cartItem = useSelector((state)=>state.cartManager)
  console.log(cartItem.cart)
  
  const item = cartItem.cart
  const totalPrice = item.reduce((acc,item)=> (acc + +(item.price)),0)
  console.log(totalPrice)

  useEffect(()=>{
     setTotalItem(cartItem.cart.length) 
     setAmount(Math.floor(totalPrice))

  },[cartItem.cart.length,totalPrice])

  //Login 
  const dispatch = useDispatch()
    // const token = localStorage.getItem("token");
    const isAuthenticated = useSelector(
        (state) => state.auth.data.isAuthenticated
      );
      const handleLoginClick = () => {
        if (isAuthenticated) {
          dispatch(logout());
          navigate("/");
        } else {
          navigate("login");
          setShowNavbar(!showNavbar)
        }
      };
  return <>
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu fontSize={"28px"} color="white"/>
        </div>
        <Link to={"/"}>
        <div className="logo">
          <img src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" alt=""/>
        </div></Link>
        <Box w={{ld:"20%",md:"15%"}} display={{lg:"flex",md:"flex",base:"none"}}>
        <Button
          borderRadius={"30px"}
          size={{lg:"md",md:"xs",base:"xs"}}
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
          size={{lg:"md",md:"xs",sm:"xs"}}
          padding="25px"
          color="white"
          variant={"ghost"}
          _hover={{ backgroundColor: "#004f9a" }}
          leftIcon={<AiOutlineAppstore fontSize={{lg:"20px",md:"15px",base:"15px"}} fontWeight="bold" />}
          alignItems="center"
        >
          Services
        </Button>
        </Box>
        <Box id="searchbox" border="0px solid white" w={{lg:"45%",md:"40%",base:"40%"}}>
        <InputGroup size={{lg:"md",md:"sm",sm:"xs"}} w="100%">
          <Input
            borderRadius="20px"
            backgroundColor={"white"}
            placeholder="Search everything at Walmart online and in store"
          />
          <InputRightElement width={{lg:"3rem",md:"2.5rem",base:"1.6rem"}}>
            <Button
              size={{lg:"md",md:"sm",base:"xs"}}
              borderRadius={{lg:"7px",md:"7px",base:"60%"}}
              backgroundColor="#ffc220"
              colorScheme={"#ffc220"}
            >
              <BiSearch fontSize={{lg:"20px",md:"14px",base:"10px"}} color="black" />
            </Button>
          </InputRightElement>
        </InputGroup>
        </Box>
        <Box border="0px solid white" w={{lg:"20%",md:"15%"}} display={{lg:"flex",md:"flex",base:"none"}} justifyContent="space-evenly">
        <Box
          display="flex"
          justifyContent={"space-around"}
          color="white"
          w={{lg:"40%",md:"50%",base:"4%"}}
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
              fontSize={{lg:"16px",md:"12px"}}
              fontFamily="Bogle,Helvetica Neue, Helvetica, Arial, sans-serif"
            >
              My Items
            </Text>
          </Box>
        </Box>
        <SignInModal/>
        </Box>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
           <Flex justifyContent="space-around" alignItems="center" border="0px solid black" paddingLeft="3" display={{lg:"none",md:"none",base:"flex"}}>
             <Image boxSize="10" src="https://www.pngall.com/wp-content/uploads/12/Walmart-Logo-PNG-Image.png" />
             <Button size="sm" colorScheme="yellow" onClick={handleLoginClick}>{isAuthenticated ? "Sign Out" : "Sign in or create Account"}</Button>
           </Flex>
           <hr/>
           <Grid gap="10px" color="white" border="0px solid black" width="50%" paddingLeft="3" display={{lg:"none",md:"none",base:"grid"}}>
               <Flex fontSize="20px" gap="3" alignItems="center"><BiReceipt fontSize="25px"/>Purchase</Flex>
               <Flex fontSize="20px" gap="3" alignItems="center"><BiDownload fontSize="25px"/>My Items</Flex>
               <Flex fontSize="20px" gap="3" alignItems="center"><BiUser fontSize="25px"/>{isAuthenticated ? "Shubham K" : "Profile"}</Flex>
           </Grid>
           <hr/>
           <Flex gap="3" width="50%" paddingLeft="3" color="white" fontSize="20px" alignItems="center" display={{lg:"none",md:"none",base:"flex"}}><BiHelpCircle fontSize="25px"/>Help</Flex>
           <hr/>
           <Grid gap="10px" color="white" border="0px solid black" width="50%" paddingLeft="3" display={{lg:"none",md:"none",base:"grid"}}>
               <Flex fontSize="20px" gap="3" alignItems="center"><BiHeart fontSize="25px"/>Lists</Flex>
               <Flex fontSize="20px" gap="3" alignItems="center"><BiGift fontSize="25px"/>Registries</Flex>
           </Grid>
           <hr/>
           <Grid gap="10px" color="white" border="0px solid black" width="50%" paddingLeft="3" display={{lg:"none",md:"none",base:"grid"}}>
               <Flex fontSize="20px" gap="3" alignItems="center"><AiOutlineAppstore fontSize="25px"/>Dashboard</Flex>
               <Flex fontSize="20px" gap="3" alignItems="center"><AiOutlineAppstore fontSize="25px"/>Services</Flex>
          </Grid>
          <hr/>
          <Flex paddingLeft="3" gap="3" border="0px solid black" color="white" fontSize="20px" alignItems="center" display={{lg:"none",md:"none",base:"flex"}}><FaRegComment fontSize="25px"/>Give Feedback</Flex>
        </div>
        <Link to="cart">
        <Button
          w="5%"
          border={"0px solid black"}
          borderRadius="20px"
          padding={"0px"}
          _hover={{ backgroundColor: "#004f9a" }}
          cursor="pointer"
          variant="ghost"
        >
          <Box margin="auto">
          <Text position={"absolute"} w="6" borderRadius="50%" backgroundColor="#ffc220" border="0px solid black" right={{lg:"1",md:"",base:"0"}} top={""} color="black" padding="0.2px">{totalitem}</Text>
          <BsCart2 color="white" fontWeight="bold" fontSize="28px"/>
          <Text color={"white"} fontSize="x-small">${amount}.00</Text>
          </Box>
        </Button>
        </Link>
      </div>
      <Box id="downNav" backgroundColor={"#0071dc"} borderTop="1px solid white">
        <Box
          w={"40%"}
          gap="10px"
          border={"0px solid black"}
          color={"white"}
          display={{lg:"flex",md:"flex",sm:"none"}}
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
          display={{lg:"flex",md:"flex",sm:"none"}}
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
      </Box>
    </nav>
  </>
}

