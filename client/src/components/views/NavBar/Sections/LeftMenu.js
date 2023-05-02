import React from 'react';
import { Menu } from 'antd';
import { useSelector } from "react-redux";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  const user = useSelector(state => state.user)
  if (user.userData && !user.userData.isAuth){
    return (
      <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>About Us</span>}>
        <MenuItemGroup title="Who are we ?">
          <Menu.Item key="setting:1"><a href="/team">Team</a></Menu.Item>
          <Menu.Item key="setting:2"><a href="/service">Our Services</a></Menu.Item>
          <Menu.Item key="setting:3"><a href="/reviews">Reviews</a></Menu.Item>
          <Menu.Item key="setting:4"><a href="/contacts">Contact Us</a></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
    )
  }else{
    if(user.userData && user.userData.isAdmin){
      return (
        <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/">Home</a>
        </Menu.Item>
        <SubMenu title={<span>About Us</span>}>
          <MenuItemGroup title="Who are we ?">
            <Menu.Item key="setting:1"><a href="/team">Team</a></Menu.Item>
            <Menu.Item key="setting:2"><a href="/service">Our Services</a></Menu.Item>
            <Menu.Item key="setting:3"><a href="/reviews">Reviews</a></Menu.Item>
            <Menu.Item key="setting:4"><a href="/contacts">Contact Us</a></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="setting:5">
          <a href="/orderlist">Orders</a>
        </Menu.Item>
      </Menu>
      )
    }else{
      return (
        <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/">Home</a>
        </Menu.Item>
        <SubMenu title={<span>About Us</span>}>
          <MenuItemGroup title="Who are we ?">
            <Menu.Item key="setting:1"><a href="/team">Team</a></Menu.Item>
            <Menu.Item key="setting:2"><a href="/service">Our Services</a></Menu.Item>
            <Menu.Item key="setting:3"><a href="/reviews">Reviews</a></Menu.Item>
            <Menu.Item key="setting:4"><a href="/contacts">Contact Us</a></Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
      )
    }
  }
}

export default LeftMenu