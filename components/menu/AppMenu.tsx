import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { HEIGHT_MENU_APP } from "../../constants";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { PageLayout } from "../layout/PageLayout";
import { MenuItem, MENU_DATA } from "../../constants/menu";

const activeLinkStyle = (path: string, href: string): React.CSSProperties => {
    return path === href
        ? {
              color: "#017FFF",
          }
        : {
              color: "#000000",
          };
};

const menuStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    height: HEIGHT_MENU_APP,
    backgroundColor: "#fff",
    boxShadow: "0px 1px 5px #d9d9d9",
    alignItems: "center",
};

export const AppMenu = () => {
    const route = useRouter();
    return (
        <PageLayout containerStyle={menuStyle}>
            <Wrapper>
                <div className="col-md-2">
                    <Link href="/">
                        <a style={activeLinkStyle(route.pathname, "/")}>
                            <Logo src="assets/images/img_logo.png" />
                        </a>
                    </Link>
                </div>
                <MenuWrap className="col-12 col-sm-8 col-md-8">
                    {MENU_DATA.map((menu: MenuItem) => (
                        <Link href={menu.link} key={menu.link}>
                            <ItemMenuLabel
                                className="item-menu-label"
                                style={activeLinkStyle(
                                    route.pathname,
                                    menu.link
                                )}
                            >
                                {menu.name}
                            </ItemMenuLabel>
                        </Link>
                    ))}
                </MenuWrap>
                <LoginButtonWrap className="col-md-2">
                    <LoginButton>login</LoginButton>
                </LoginButtonWrap>
            </Wrapper>
        </PageLayout>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const MenuWrap = styled.div`
    text-align: center;
    line-height: 2.2;
`;

const Logo = styled.img`
    height: 24px;
`;

const LoginButtonWrap = styled.div`
    text-align: right;
`;

const LoginButton = styled(Button)`
    background-image: linear-gradient(180deg, #6065ea, #3a3ea6);
    border: 0px;
    border-radius: 9px;
    height: 36px;
    padding: 0px 20px;
`;

const ItemMenuLabel = styled.a`
    font-size: 16px;
    cursor: pointer;
    text-decoration: none !important;
    height: ${HEIGHT_MENU_APP}px;
    margin: 5px 15px;
`;
