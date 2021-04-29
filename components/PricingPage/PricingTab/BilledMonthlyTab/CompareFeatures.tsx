import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { CompareFeaturesModel } from ".";
import { PriamyButton } from "../../../button/PriamyButton";

interface Props {
    feature: CompareFeaturesModel;
}

export const CompareFeatures = ({ feature }: Props) => {
    const { t } = useTranslation();
    const [ipCount, setIpCount] = useState(0);
    return (
        <Wrap>
            <Title>{feature.type}</Title>
            {feature.pricing !== null && (
                <Pricing>
                    ${feature.pricing}
                    <Month>/month</Month>
                </Pricing>
            )}
            <Discription>{t(feature.discription)}</Discription>
            {feature.isShowProces && (
                <>
                    <SelectLabel>
                        {t("pricing_page.select_ip")}
                        <span style={{ color: "#000" }}>
                            {` ${ipCount} `} {t("pricing_page.ip")}
                        </span>
                    </SelectLabel>
                    <input
                        id="pricing-range"
                        type="range"
                        name="vol"
                        defaultValue={0}
                        min="0"
                        max="100"
                        style={{
                            width: "90%",
                            marginBottom: 15,
                        }}
                        onChange={(e) => setIpCount(parseInt(e.target.value))}
                    />
                </>
            )}
            <PriamyButton
                label={feature.buttonLabel}
                styles={{ paddingTop: 5, paddingBottom: 5, borderRadius: 9 }}
            />
        </Wrap>
    );
};

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    height: 250px;
    margin-bottom: 20px;
    @media (min-width: 350px) {
        width: 100%;
    }
    @media (min-width: 576px) {
        width: 50%;
    }
    @media (min-width: 992px) {
        width: 33%;
    }
    @media (min-width: 1258px) {
        width: 20%;
    }
`;

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #303030;
`;

const Pricing = styled.label`
    font-family: "Poppins";
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    color: #303030;
`;

const Month = styled.span`
    font-family: "Poppins";
    font-size: 16px;
    text-align: center;
    color: #999;
`;

const Discription = styled.p`
    font-family: "Poppins";
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    height: 100%;
    color: #999999;
`;

const SelectLabel = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    text-align: center;
    color: #999999;
`;
