import React from 'react'
import styled from 'styled-components'
import {PageLayout} from '../../layout/PageLayout'
import {useTranslation} from 'react-i18next'
import { CloudOnPremItem } from "./CloudOnPremItem";

export interface CoudOfPremModel {
    imgUrl: string;
    title: string;
    unlineImageUrl: string;
    discription: string;
}
const cloudServices: CoudOfPremModel[] = [
    {
        discription: "industry_page.for_end_users_content",
        imgUrl: "assets/images/img_for_end_users.png",
        title: "industry_page.for_end_users",
        unlineImageUrl: "assets/images/img_underline_purple.png",
    },
    {
        discription: "industry_page.secure_content",
        imgUrl: "assets/images/img_security.png",
        title: "industry_page.secure",
        unlineImageUrl: "assets/images/img_underline_yellow.png",
    },
    {
        discription: "industry_page.local_interface_content",
        imgUrl: "assets/images/img_local_interface.png",
        title: "industry_page.local_interface",
        unlineImageUrl: "assets/images/img_underline_purple.png",
    },
];


export const Streams = () =>{
    const {t} = useTranslation()
    return (
    <PageLayout containerStyle ={{backgroundColor : '#ffff'}}>
        <Wrapper>
            <Button>
                <Icon width = '12.67px' src = "assets/icons/ic_comming_soon.png"/>
                {t("button.comming_soon")}
            </Button>
            <img src = "assets/images/img_comming_soon.png" />
            <Title>{t("industry_page.the_streams_bridge")}</Title>
        </Wrapper>
        <WrapperItem>
            <div className="row">
                {cloudServices.map((service) => (
                    <div
                        className="col-12 col-sm-6 col-md-4"
                        style={{ marginTop: 20 }}
                        key={service.title}
                    >
                        <CloudOnPremItem cloud={service} />
                    </div>
                ))}
            </div>
        </WrapperItem>
    </PageLayout>)
}
const Wrapper = styled.div`
    width : 50%;
    margin : auto;
    padding-top : 125px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
const Button = styled.button`
    background: #E6E7FF;
    border-radius: 8px;
    margin: 16px 0px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #5156D3;
    border:none;
    padding : 5px 6px;
`
const Icon = styled.img`
    margin-right :  5px;
`
const Title = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    
    line-height: 54px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #303030;
    @media (min-width: 350px) {
        font-size: 15px;
    }
    @media (min-width: 576px) {
        font-size: 20px;
    }
    @media (min-width: 768px) {
        font-size: 25px;
    }
    @media (min-width: 992px) {
        font-size: 30px;
    }
    @media (min-width: 1376px) {
        font-size: 36px;
    }

`
const WrapperItem = styled.div`
    margin-top : 40px;
    padding-bottom : 120px;
`
