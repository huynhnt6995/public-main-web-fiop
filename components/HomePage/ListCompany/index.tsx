import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

const companies = [
    "assets/images/img_aviligon.png",
    "assets/images/img_axis.png",
    "assets/images/img_bosch.png",
    "assets/images/img_cisco.png",
    "assets/images/img_exacq.png",
    "assets/images/img_hanwha.png",
    "assets/images/img_hikvision.png",
    "assets/images/img_honeywell.png",
    "assets/images/img_identicard.png",
    "assets/images/img_milestone.png",
    "assets/images/img_panasonic.png",
    "assets/images/img_square.png",
];

export const ListCompany = () => {
    return (
        <div>
            <Wrapper>
                <ListContent />
            </Wrapper>
        </div>
    );
};

const ListContent = () => {
    const { t } = useTranslation();
    return (
        <WrapperContent>
            <PageLayout containerStyle={{ height: "100%" }}>
                <div
                    className="row"
                    style={{
                        height: "100%",
                    }}
                >
                    <div className="d-none d-md-block col-md-1" />
                    <div className="col-12 col-md-10 align-self-center">
                        <Title>{t("home_page.list_company_title")}</Title>
                        <div className="row justify-content-center">
                            {companies.map((company) => (
                                <div
                                    className="col-6 col-sm-3 col-lg-2"
                                    key={company}
                                >
                                    <CompanyImage src={company} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-none d-md-block col-md-1" />
                </div>
            </PageLayout>
        </WrapperContent>
    );
};

const Wrapper = styled.div`
    background: url("assets/images/img_background_companies.png") no-repeat left
        top;
    background-size: 100% 100%;
    padding: 50px 0px;
`;

const CompanyImage = styled.img`
    margin: 20px 0px;
`;

const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
`;

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #606060;
`;
