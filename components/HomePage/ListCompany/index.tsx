import React from "react";
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
                <BackgroundImg src="assets/images/img_background_companies.png" />
                <ListContent />
            </Wrapper>
        </div>
    );
};

const ListContent = () => {
    return (
        <WrapperContent>
            <PageLayout containerStyle={{ height: "100%" }}>
                <div className="row" style={{ height: "100%" }}>
                    <div className="d-none d-md-block col-md-1" />
                    <div className="col-12 col-md-10 align-self-center">
                        <Title>Trusted by over 10 companies</Title>
                        <div className="row">
                            {companies.map((company) => (
                                <div
                                    className="col-4 col-sm-3 col-lg-2"
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
    position: relative;
`;

const BackgroundImg = styled.img`
    width: 100%;
    min-height: 300px;
`;

const CompanyImage = styled.img`
    margin: 20px 0px;
`;

const WrapperContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #606060;
`;
