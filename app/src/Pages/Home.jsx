import React from "react";
import "../styles/homepage.css";
import { ProductBox } from "../component/Product/product";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import last from "../images/last.png"
import { Link } from "react-router-dom";
// import { Products } from './Products'

let valentinesArray = [
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-66a7/k2-_e26f860b-aa7d-47ab-a1e3-d1c148f26e95.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "Show All",
  },
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-e08e/k2-_70e0719c-d246-4bfe-891a-673c3838486f.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "For Her",
  },
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-f431/k2-_90eb678f-2796-40fa-8306-33132ef7434c.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "For Him",
  },
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-651e/k2-_bc4ce97d-5dc1-4e7c-bc13-982a3fb3a0a7.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "For Kids",
  },
];
let winterArray = [
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-2abf/k2-_a16fbc9e-bea4-47da-ac72-c774b9796ca3.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "25% off select home",
  },
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-9ad2/k2-_0377fcda-85f3-4b27-aae6-fdb36a5f1d7a.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "50% off select fashion",
  },
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-7aa2/k2-_4b9d8697-e221-4a36-9a34-6870159fddf8.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "60% off select beauty",
  },
  {
    img:
      "https://i5.walmartimages.com/dfw/4ff9c6c9-f2ba/k2-_1a07238d-99c2-4859-b9cf-28d6a3ec233e.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF",
    name: "30% off select fitness ",
  },
];
let gameDay = [ 
  {
    img:"https://i5.walmartimages.com/dfw/4ff9c6c9-cd88/k2-_00819e58-026b-4578-aa98-66692faeb8de.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    name:"35% off Select finds"
  },
  {
    img:"https://i5.walmartimages.com/dfw/4ff9c6c9-93e3/k2-_d60121e0-be91-48dc-be36-b6d35e62c464.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    name:"Party Supplies From 3$"
  },
  {
    img:"https://i5.walmartimages.com/dfw/4ff9c6c9-d970/k2-_b4da6acd-c035-40d8-8eac-df267f9b8f0b.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    name:"Kitchen Essentials"
  },
  {
    img:"https://i5.walmartimages.com/dfw/4ff9c6c9-9fb9/k2-_5424b741-f69b-4248-b9d2-dcecb4821655.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF",
    name:"Shop All"
  },
]

export const Home = () => {
  return (
    <div id="homepage">
      <Box margin="auto" border={"0px solid blue"} backgroundColor={"white"} marginTop={{lg:"150px",md:"200px"}}>
        <Box
          display={"grid"}
          gridTemplateColumns={{
            lg: "repeat(3,1fr)",
            md: "repeat(3,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={"10px"}
          padding="20px"
        >
          <Box>
            <Box
              display={"flex"}
              border="0px solid black"
              justifyContent={"space-around"}
              borderRadius="10px"
              height="120px"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              padding={"10px"}
            >
              <Text fontWeight={"bold"} fontSize="xl">
                Reserve pickup or delivery
              </Text>
              <Button variant={"outline"} border="2px solid black">See All</Button>
            </Box>
            <Box
              border={"0px solid black"}
              marginTop="25px"
              borderRadius={"10px"}
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              padding={"15px"}
              display="grid"
              gap={"60px"}
            >
              <Box display={"flex"} justifyContent="space-between">
                <Heading size={"md"}>Top Departments</Heading>
                <Text fontSize={"sm"} textDecoration="underline">
                  View All
                </Text>
              </Box>
              <Box display={"flex"} justifyContent="space-around">
                <div>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-604b/k2-_333bfe34-ceed-44bf-8771-d9eb485f1b74.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF"
                    alt="ele"
                  />
                  <p>Electronics</p>
                </div>
                <div>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-d3cd/k2-_b7498899-8f9d-441c-b170-53cd47e3215b.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF"
                    alt="toys"
                  />
                  <p>Toys</p>
                </div>
                <div>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-7cc4/k2-_0125fcff-d6ae-459c-b7ab-95c1663c54ae.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF"
                    alt="fashion"
                  />
                  <p>Fashion</p>
                </div>
              </Box>
            </Box>
          </Box>
          {/* valentines day */}
          <Box
            borderRadius={"10px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            padding={"20px"}
          >
            <Box display={"flex"} justifyContent="space-between">
              <Heading size={"md"}>Valentine's Day gifts</Heading>
            </Box>
            <Box
              display={"grid"}
              gridTemplateColumns="repeat(2,1fr)"
              gap={"10px"}
            >
              {valentinesArray.map((item) => (
                <div style={{ textAlign: "center", border: "0px solid blue" }}>
                  <Image
                    border={"0px solid black"}
                    display="block"
                    margin={"auto"}
                    src={item.img}
                    alt="img"
                  />
                  <Text border="0px solid black">{item.name}</Text>
                </div>
              ))}
            </Box>
          </Box>
          {/* winter savings */}
          <Box
            borderRadius={"10px"}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            padding={"10px"}
          >
            <Box display={"flex"} justifyContent="space-between">
              <Heading size={"md"}>Winter Savings</Heading>
            </Box>
            <Box display={"grid"} gridTemplateColumns="repeat(2,1fr)">
              {winterArray.map((item) => (
                <div style={{ textAlign: "center", border: "0px solid blue" }}>
                  <Image
                    border={"0px solid black"}
                    display="block"
                    margin={"auto"}
                    src={item.img}
                    alt="img"
                  />
                  <Text border="0px solid black">{item.name}</Text>
                </div>
              ))}
            </Box>
          </Box>
        </Box>
        {/* valentines Day product */}
        <Box id="valentine">
          <Box display={"flex"} justifyContent="space-between">
            <Heading size={"md"}>Valentine’s day top picks</Heading>
            <Text textDecoration={"underline"} cursor="pointer">
              <Link to="product">View All</Link> 
            </Text>
          </Box>
          <ProductBox />
        </Box>
        {/* game day */}
        <Heading size={"md"} padding="20px">Get ready for game day</Heading>
        <Box
        display={{lg:"flex",md:"flex",base:"grid"}}
        gridTemplateColumns={"repeat(2,1fr)"}
        gap="30px"
        justifyContent="space-around"
        >
          {
            gameDay.map((ele)=>(
              <Box textAlign={"center"}>
                 <Image src={ele.img}/>
                 <Text>{ele.name}</Text>
              </Box>
            ))
          }
        </Box>
        {/* last component */}
        <Box w="95%" margin={"auto"} marginTop={"50px"} padding="20px" paddingBottom={"50px"} >
          <Image borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" src={last} />
        </Box>
      </Box>
      <Box textAlign={"center"} marginTop="50px">
        <Text>We’d love to hear what you think!</Text>
        <Button variant={"outline"} border="2px solid black">Give Feedback</Button>
      </Box>
    </div>
  );
};
