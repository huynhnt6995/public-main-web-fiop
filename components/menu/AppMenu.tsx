import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { HEIGHT_MENU_APP } from "../../constants";
import { useRouter } from "next/router";
import { PageLayout } from "../layout/PageLayout";
import { MenuItemModel, MENU_DATA } from "../../constants/menu";
import { PriamyButton } from "../button/PriamyButton";

const activeLinkStyle = (path: string, href: string): React.CSSProperties => {
    return path === href
        ? {
              color: "#017FFF",
              backgroundColor: path === "/" ? "#FFF" : "#EDEDED",
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
                <div className="col-md-2 align-self-center">
                    <Link href="/">
                        <a style={activeLinkStyle(route.pathname, "/")}>
                            <Logo src="assets/images/img_logo.png" />
                        </a>
                    </Link>
                </div>
                <MenuWrap className="col-12 col-sm-8 col-md-8">
                    {MENU_DATA.map((menu: MenuItemModel) => (
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
                <LoginButtonWrap className="col-md-2 align-self-center">
                    <PriamyButton
                        label="Login"
                        styles={{ paddingTop: 5, paddingBottom: 5 }}
                    />
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
    margin: 0px;
    padding: 0px;
    height: ${HEIGHT_MENU_APP}px;
`;

const Logo = styled.img`
    height: 24px;
`;

const LoginButtonWrap = styled.div`
    text-align: right;
`;

const ItemMenuLabel = styled.a`
    font-size: 16px;
    cursor: pointer;
    text-decoration: none !important;
    height: ${HEIGHT_MENU_APP}px;
    padding: 15px 15px;
    margin: 0px 1px;
    display: inline-block;
    &:hover {
        background-color: #ededed;
    }
`;
