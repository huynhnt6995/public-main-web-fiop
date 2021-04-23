import React from "react";
import styled from "styled-components";
import { PrincipledModel } from ".";
import { PriamyButton } from "../../button/PriamyButton";

interface Props {
    principled: PrincipledModel;
}

export const PrincipledIntem = ({ principled }: Props) => {
    return (
        <WrapperService key={principled.title}>
            <IndustryImage src={principled.imgUrl} />
            <IndustryTitle>{principled.title}</IndustryTitle>
            <IndustryCotent>{principled.discription}</IndustryCotent>
            <PriamyButton
                label={principled.buttonLabel}
                styles={{
                    backgroundImage: "none",
                    paddingTop: 8,
                    paddingBottom: 8,
                    borderRadius: 9,
                    color: "#000",
                    marginTop: 20,
                    width: "80%",
                    fontSize: 13,
                    marginBottom: 15,
                    background:
                        "linear-gradient(180deg, #F5F5F5 0%, #EAEAEA 100%)",
                }}
            />
        </WrapperService>
    );
};

const WrapperService = styled.div`
    background: rgba(255, 255, 255, 0.5);
    border: 1px dashed #e7e7e7;
    border-radius: 8px 80px 8px 8px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
`;

const IndustryImage = styled.img`
    margin-bottom: 30px;
    border-radius: 8px 80px 8px 8px;
`;

const IndustryTitle = styled.p`
    text-align: left;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    color: #303030;
    display: flex;
    flex: 1;
`;

const IndustryCotent = styled.label`
    font-family: "Poppins";
    font-size: 15px;
    color: #606060;
    text-align: left;
`;
