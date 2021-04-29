import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PriamyButton } from "../../../button/PriamyButton";
import { PageLayout } from "../../../layout/PageLayout";

export interface CompareFeaturesModel {
    type: "Free" | "Basic" | "Plus" | "Professional" | "Custom";
    discription: string;
    pricing: 0 | 5 | 12 | 30 | null;
    isShowProces: boolean;
    buttonLabel: "Choose Plan" | "Contact Us";
}

const compareFeatures: CompareFeaturesModel[] = [
    {
        type: "Free",
        discription: "pricing_page.notification",
        pricing: 0,
        isShowProces: false,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Basic",
        discription: "pricing_page.best_for_user",
        pricing: 5,
        isShowProces: true,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Plus",
        discription: "pricing_page.multi_user",
        pricing: 12,
        isShowProces: true,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Professional",
        discription: "pricing_page.best_plan",
        pricing: 30,
        isShowProces: true,
        buttonLabel: "Choose Plan",
    },
    {
        type: "Custom",
        discription: "pricing_page.amplify",
        pricing: null,
        isShowProces: false,
        buttonLabel: "Contact Us",
    },
];
export const CompareFeatures = () => {
    const { t } = useTranslation();
    const [ipCount, setIpCount] = useState(0);
    return (
        <PageLayout>
            <div className="row">
                <div className="col-3 align-self-center">
                    <Title>{t("pricing_page.compare_features")}</Title>
                </div>
                <div className="col-9">
                    <div className="d-flex">
                        {compareFeatures.map((feature) => (
                            <Wrap>
                                <TitleCompareItem>
                                    {feature.type}
                                </TitleCompareItem>
                                {feature.pricing !== null && (
                                    <Pricing>
                                        ${feature.pricing}
                                        <Month>/month</Month>
                                    </Pricing>
                                )}
                                <Discription>
                                    {t(feature.discription)}
                                </Discription>
                                {feature.isShowProces && (
                                    <>
                                        <SelectLabel>
                                            {t("pricing_page.select_ip")}
                                            <span style={{ color: "#000" }}>
                                                {` ${ipCount} `}{" "}
                                                {t("pricing_page.ip")}
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
                                            onChange={(e) =>
                                                setIpCount(
                                                    parseInt(e.target.value)
                                                )
                                            }
                                        />
                                    </>
                                )}
                                <PriamyButton
                                    label={feature.buttonLabel}
                                    styles={{
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                        borderRadius: 9,
                                    }}
                                />
                            </Wrap>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #303030;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 280px;
    width: 20%;
    min-width: 161px;
    margin-bottom: 20px;
`;

const TitleCompareItem = styled.p`
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
    line-height: 20px;
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
