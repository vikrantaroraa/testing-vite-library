import React, { useState } from "react";
import { Drawer } from "canary-design";
import closeIcon from "../../assets/close-icon.svg";
import cartIcon from "../../assets/cart.svg";
import wishListIcon from "../../assets/heart.svg";
import userIcon from "../../assets/user.svg";
import menuIcon from "../../assets/menu-icon.svg";
import allProductsIcon from "../../assets/all-products-icon.svg";

const ExampleDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleShowDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const headerItemsArray = [wishListIcon, cartIcon, userIcon];
  const menuItemsArray = [
    { icon: allProductsIcon, label: "All Products" },
    { icon: userIcon, label: "Sign In" },
    { icon: wishListIcon, label: "Wishlist" },
    { icon: cartIcon, label: "Cart" },
  ];

  const mainContainerStyle: React.CSSProperties = {
    border: "2px solid",
    height: "70vh",
    position: "relative",
    width: "100%",
  };

  const appHeaderStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: 500,
  };

  const navMenuStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  };

  const imageContainerStyle: React.CSSProperties = {
    height: 22,
    width: 22,
    cursor: "pointer",
  };

  const imageStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
  };

  const logoAndCloseIconStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#d3d3d3",
    padding: "20px 28px",
    fontSize: "22px",
    fontWeight: 700,
    color: "#3a3838",
    borderBottom: "1px solid #ddd",
  };

  const menuItemsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    padding: "20px 28px",
  };

  const sidebarMenuItem: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    fontSize: "18px",
    fontWeight: 500,
    cursor: "pointer",
    color: "#2c2c2c",
  };

  return (
    <div style={mainContainerStyle}>
      <div style={appHeaderStyle}>
        <span onClick={toggleShowDrawer} title="Click to open menu drawer">
          <span style={imageContainerStyle}>
            <img src={menuIcon} style={imageStyle} />
          </span>
        </span>
        <div style={navMenuStyle}>
          {headerItemsArray.map((icon, index) => {
            return (
              <span style={imageContainerStyle} title="dummy icon" key={index}>
                <img src={icon} style={imageStyle} />
              </span>
            );
          })}
        </div>
      </div>
      <Drawer
        showDrawer={showDrawer}
        slideFrom={"left"}
        style={{
          position: "absolute",
          height: "100%",
        }}
      >
        <div style={logoAndCloseIconStyle}>
          <span>Flipkart</span>
          <span onClick={toggleShowDrawer} title="Click to close menu drawer">
            <span style={imageContainerStyle}>
              <img src={closeIcon} style={imageStyle} />
            </span>
          </span>
        </div>
        <div style={menuItemsContainerStyle}>
          {menuItemsArray.map(({ icon, label }, index) => {
            return (
              <div style={sidebarMenuItem} key={index}>
                <span style={imageContainerStyle}>
                  <img src={icon} style={imageStyle} />
                </span>
                {label}
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export { ExampleDrawer };
