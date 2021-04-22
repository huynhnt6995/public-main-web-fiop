import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { HEIGHT_MENU_APP } from "../../constants";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";

const activeLinkStyle = (path: string, href: string): React.CSSProperties => {
    return path === href
        ? {
              color: "#017FFF",
          }
        : {
              color: "#000000",
          };
};

export const AppMenu = () => {
    const route = useRouter();
    const { t } = useTranslation();
    return (
        <Wrapper>
            <div className="col-3 col-sm-2">
                <Logo src="assets/images/img_logo.png" />
            </div>
            <MenuWrap className="col-6 col-sm-8">
                <Link href="/">
                    <ItemMenuLabel
                        className="item-menu-label"
                        style={activeLinkStyle(route.pathname, "/")}
                    >
                        {t("home")}
                    </ItemMenuLabel>
                </Link>
            </MenuWrap>
            <LoginButtonWrap className="col-3 col-sm-2">
                <Button>login</Button>
            </LoginButtonWrap>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: ${HEIGHT_MENU_APP}px;
    background-color: #fff;
    box-shadow: 0px 1px 5px #d9d9d9;
    align-items: center;
    justify-content: space-between;
`;

const MenuWrap = styled.div`
    text-align: center;
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
`;
