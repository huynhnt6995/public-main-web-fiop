import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { DailyNewsModel } from ".";

interface Props {
    news: DailyNewsModel;
}

export const DailyNewItem = ({ news }: Props) => {
    const { t } = useTranslation();
    return (
        <div style={{ marginBottom: 40 }}>
            <Time>March 20, 2020 - {t(news.category)}</Time>
            <Title>{t(news.title)}</Title>
        </div>
    );
};

const Time = styled.p`
    text-transform: uppercase;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    text-transform: uppercase;
    color: #999999;
    margin-bottom: 10px;
`;

const Title = styled.label`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 18px;
    line-height: 200%;
    color: #303030;
`;
