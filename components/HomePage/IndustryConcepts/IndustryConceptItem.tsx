import React from "react";
import styled from "styled-components";
import { IndustryConceptModel } from ".";

interface Props {
    cloud: IndustryConceptModel;
}

export const IndustryConceptItem = ({ cloud }: Props) => {
    return (
        <WrapperService key={cloud.title}>
            <IndustryImage src={cloud.imgUrl} />
            <IndustryTitle>{cloud.title}</IndustryTitle>
            <IndustryCotent>{cloud.discription}</IndustryCotent>
        </WrapperService>
    );
};

const WrapperService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06),
        0px 16px 114px rgba(0, 1, 28, 0.08);
    border-radius: 8px 100px 8px 8px;
`;

const IndustryImage = styled.img`
    margin-bottom: 30px;
    width: 100%;
    border-radius: 8px 80px 8px 8px;
`;

const IndustryTitle = styled.p`
    text-align: left;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 1;
    margin-bottom: 1px;
    color: #303030;
    margin: 0px 15px 15px 15px;
`;

const IndustryCotent = styled.label`
    font-family: "Poppins";
    font-size: 15px;
    color: #606060;
    text-align: left;
    margin: 0px 15px 20px 15px;
`;
