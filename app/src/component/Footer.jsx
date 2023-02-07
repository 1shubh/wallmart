import React from "react";
import "../styles/Navbar.css";
import { Text, Box } from "@chakra-ui/react";

export const Footer = () => {
  const links = [
    "All",
    "Departments",
    "Store",
    "Directory",
    "Careers",
    "Our Company",
    "Sell on Walmart.com",
    "Help",
    "COVID-19 Vaccine Scheduler",
    "Product Recalls",
    "Accessibility",
    "Tax Exempt Program",
    "Get the Walmart App",
    "Sign" - "up for Email",
    "Safety Data Sheet",
    "Terms of Use",
    "Privacy & Security",
    "CA Privacy Rights",
    "California Supply Chain Act",
    "Your Privacy Choices",
    "My Personal Information",
    "#IYWYK",
  ];
  return (
    <div id="footer">
      <Box
        color={"white"}
        display="grid"
        gridTemplateColumns={{lg:"repeat(6,1fr)",md:"repeat(4,1fr)",base:"repeat(1,1fr)"}}
        gap="10px"
        width={"80%"}
        margin="auto"
        padding={"50px"}
        border="0px solid white"
      >
        {links.map((link) => (
          <Text _hover={{ textDecoration: "underline", cursor: "pointer" }}>
            {link}
          </Text>
        ))}
      </Box>
    </div>
  );
};
