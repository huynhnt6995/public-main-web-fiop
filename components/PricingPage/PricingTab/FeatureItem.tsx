import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { FeatureModel, FeatureValue } from "../../../@types/FeatureModel";

interface Props {
    feature: FeatureModel;
}

export const FeatureItem = ({ feature }: Props) => {
    const featureLabel = (value: FeatureValue): ReactNode => {
        if (value === "check") {
            return (
                <FeatureLabel>
                    <i
                        className="bi bi-check-circle"
                        style={{ color: "#0B9830" }}
                    ></i>
                </FeatureLabel>
            );
        } else if (value === "Comming soon" || value === "Customizable") {
            return (
                <FeatureLabel style={{ color: "#999" }}>{value}</FeatureLabel>
            );
        } else {
            return <FeatureLabel>{value}</FeatureLabel>;
        }
    };
    const { t } = useTranslation();
    return (
        <div className="d-flex w-100">
            <div className="col-3 align-self-center" style={{ paddingLeft: 0 }}>
                <FeatureName>
                    <label
                        style={{
                            width: 6,
                            height: 6,
                            backgroundColor: "#999",
                            opacity: 0.5,
                            borderRadius: 3,
                            marginRight: 10,
                            marginTop: 7,
                            marginLeft: 0,
                        }}
                    ></label>
                    {t(feature.name)}
                </FeatureName>
            </div>
            <div className="col-9">
                <div className="d-flex">
                    {feature.compare.map((item) => featureLabel(item))}
                </div>
            </div>
        </div>
    );
};

const FeatureName = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    line-height: 21px;
    color: #303030;
    display: flex;
    align-items: center;
`;

const FeatureLabel = styled.label`
    border-bottom: 1px dashed #dedede;
    width: 20%;
    text-align: center;
    line-height: 2.4;
    min-width: 161px;
`;
