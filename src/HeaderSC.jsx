import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
import { selectCars } from "./features/carSlice";
import { useSelector } from "react-redux";

function HeaderSC({ isMenuOpen, setIsMenuOpen }) {
    const cars = useSelector(selectCars);
    console.log(cars);
  return (
    <Container>
      <a href="/">
        <img src="/images/Tesla-Logo.svg" alt="Tesla styled logo" />
      </a>
      <Menu>
          {cars && cars.map((car, index) => {
              return (
                <p key={index}><a href="/">{car}</a></p>
              ) 
          })}
        {/* // <p>
        //   <a href="#model-s">Model S</a>
        // </p>
        // <p>
        //   <a href="#model-3">Model 3</a>
        // </p>
        // <p>
        //   <a href="#model-x">Model X</a>
        // </p>
        // <p>
        //   <a href="#model-y">Model Y</a>
        // </p>
        // <p>
        //   <a href="#solar-roof">Solar Roof</a>
        // </p>
        // <p>
        //   <a href="#solar-panel">Solar Panels</a>
        // </p> */}
      </Menu>
      <RightMenu>
        <Link to="/" className={isMenuOpen && "header__link--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
          Account
        </Link>
        <ExpandingMenu onClick={() => setIsMenuOpen(!isMenuOpen)} show={isMenuOpen}>
          {isMenuOpen ? <CloseIcon /> : "Menu"}
        </ExpandingMenu>
      </RightMenu>
    </Container>
  );
}

export default HeaderSC;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  margin-top: -15px;
  min-height: 60px;
  object-fit: contain;
  padding: 0 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  img {
    margin-right: 100px;
  }
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  gap: 15px;
  justify-content: center;

  p {
    border-radius: 50px;
    color: #171a20;
    display: flex;
    font-size: 15px;
    font-weight: 600;
    justify-content: center;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
    width: 100px;
  }

  p:hover {
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
  }

  a {
    width: 100px;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  align-items: center;
  display: flex;
  gap: 15px;

  a {
    border-radius: 50px;
    color: #171a20;
    font-size: 15px;
    font-weight: 600;
    padding: 5px 10px;
    position: relative;
    text-decoration: none;
    /* transition: all 0.2s; */
    z-index: 2;
  }

  a:hover {
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
  }

  .header__link--hidden {
    visibility: hidden;
}
`;

const ExpandingMenu = styled.div`
    border-radius: 50px;
  color: #171a20;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 10px;
  position: relative;
  text-decoration: none;
  z-index: 3;

  &:hover{
    backdrop-filter: blur(16px);
    background-color: hsla(0, 0%, 0%, 0.05);
  }

  .MuiSvgIcon-root {
    color: #171a20;
    cursor: pointer;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 3;
  }
`;
