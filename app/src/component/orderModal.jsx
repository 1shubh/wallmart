import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
    // Flex
  } from '@chakra-ui/react'
  // import {Link} from "react-router-dom"
  import { useNavigate } from 'react-router-dom'
  import {CgCheckR} from "react-icons/cg"
  
 


export const OrderModal = ({payment,amount,totalItem,name}) => {

    const navigate = useNavigate()

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = useState(<OverlayOne/>)

     const handleClick = () => {
         localStorage.removeItem("cart")
         navigate("/")
     }
     
  return (
    <div>
     <Button
       
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
          w="100%"
          backgroundColor={"#0a438b"} color="white"
        >
         {payment==="cash"? "Pay on Delivery" : "Pay Now"}
    </Button>
     <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent backgroundColor={"#0a438b"} color="white">
            <ModalHeader display={"flex"} justifyContent="space-around" width={"50%"} alignItems="center"><CgCheckR fontSize={"20px"}/>Congratulations</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box borderRadius="10px" padding={"20px"} fontWeight="bold">
                    <Text>order Id : {Math.random()}</Text>
                    <Text>Total {totalItem} items for ${amount} Amount</Text>
                    <Text>You order Is Confirmed</Text>
                </Box>
            </ModalBody>
            <ModalFooter>
             <Button onClick={handleClick} backgroundColor="white" color={"#0a438b"}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </div>
  )
}
