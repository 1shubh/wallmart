import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    // PopoverArrow,
    // PopoverCloseButton,
    // PopoverAnchor,
    Button,
    Portal,
    Box,
    Text
  } from '@chakra-ui/react'
  import { Link, useNavigate } from 'react-router-dom'
  import { BiUser } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authAction';


export default function SignInModal(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
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
        }
      };
    return (
        <>
           <Popover>
                <PopoverTrigger>
                <Box
          display="flex"
          border={"0px solid white"}
          color="white"
          justifyContent={"space-around"}
          w={{lg:"40%",md:"50%",base:"4%"}}
          borderRadius="20px"
          padding={"5px"}
          _hover={{ backgroundColor: "#004f9a" }}
          cursor="pointer"
        >
          <Box display={"flex"} alignItems="center" justifyContent={"center"}>
            <BiUser size={"16px"} />
          </Box>
          <Box>
            <Text fontSize={"12px"}>{isAuthenticated ? "Sign Out" : "Sign In"}</Text>
            <Text
              fontSize={"16px"}
              fontFamily="Bogle,Helvetica Neue, Helvetica, Arial, sans-serif"
            >
              {isAuthenticated ? "Shubham K" : "Account"}
            </Text>
          </Box>
        </Box> 
                </PopoverTrigger>
                <Portal>
                  <PopoverContent width="350px" marginRight={"10px"} marginTop={"10px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                    {/* <PopoverArrow /> */}
                        <PopoverHeader fontFamily={"sans-serif"} fontWeight="bold" fontSize={17}>Members can access discounts and special features</PopoverHeader>
                    {/* <PopoverCloseButton /> */}
                    <PopoverBody textAlign={"center"} display="grid" gap={"5"}>
                      <Button width={80} color={"white"} bgColor={"rgb(14,91,185)"} onClick={handleLoginClick}> {isAuthenticated ? "Sign Out" : "Sign In"}</Button>
                      <Link to="/signup"><p style={{color:"#0e5bb9",cursor:"pointer"}}>Create Free Account</p></Link>
                    </PopoverBody>
                    <PopoverFooter cursor={"pointer"}>Feedback</PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
        </>
    )
}