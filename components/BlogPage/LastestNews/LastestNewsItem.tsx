import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { LastestNewsModels } from ".";

interface Props {
    news: LastestNewsModels;
}

export const LastestNewsItem = ({ news }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="col-12 col-sm-6" style={{ marginBottom: 50 }}>
            <img className="w-100" src={news.imgUrl} />
            <Category>{t(news.category)}</Category>
            <Title>{t(news.title)}</Title>
            <Content>{t(news.shortContent)}</Content>
            <Time>March 20, 2020</Time>
        </div>
    );
};

const Category = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #999999;
    margin: 15px 0px;
    text-transform: uppercase;
`;

const Title = styled.label`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 18px;
    line-height: 175%;
    color: #303030;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 90px;
    cursor: pointer;
`;

const Content = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    line-height: 200%;
    color: #606060;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 55px;
    cursor: pointer;
`;

const Time = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    line-height: 200%;
    color: #999999;
`;
