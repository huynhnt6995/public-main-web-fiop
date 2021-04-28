import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CoudOfPremModel } from ".";

interface Props {
    cloud: CoudOfPremModel;
}

export const CloudOnPremItem = ({ cloud }: Props) => {
    const { t } = useTranslation();
    return (
        <WrapperService key={cloud.title}>
            <ServiceImage src={cloud.imgUrl} />
            <div>
                <ServiceTitle>{t(cloud.title)}</ServiceTitle>
                <img src={cloud.unlineImageUrl} width="100%" />
            </div>
            <ServiceCotent>{t(cloud.discription)}</ServiceCotent>
        </WrapperService>
    );
};

const WrapperService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 15px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06),
        0px 16px 114px rgba(0, 1, 28, 0.08);
    border-radius: 8px 80px 8px 8px;
`;

const ServiceImage = styled.img`
    margin-bottom: 30px;
`;

const ServiceTitle = styled.p`
    text-align: left;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 1px;
    color: #303030;
`;

const ServiceCotent = styled.label`
    font-family: "Poppins";
    font-size: 15px;
    color: #606060;
    text-align: left;
`;
