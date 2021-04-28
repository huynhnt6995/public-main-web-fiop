import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PopularModel } from ".";

interface Props {
    popular: PopularModel;
    index: number;
}

export const PopularItems = ({ index, popular }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="d-flex">
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    height: 48,
                    width: 60,
                    borderRadius: 24,
                    border: `1px solid ${popular.borderColor}`,
                    background: popular.color,
                    marginRight: 20,
                }}
            >
                #{index}
            </div>
            <PoluparTitle>{t(popular.title)}</PoluparTitle>
        </div>
    );
};

const PoluparTitle = styled.label`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    line-height: 175%;
    color: #303030;
    width: 100%;
    cursor: pointer;
`;
