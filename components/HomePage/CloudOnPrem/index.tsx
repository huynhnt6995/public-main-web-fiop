import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { CloudOnPremItem } from "./CloudOnPremItem";

export interface CoudOfPremModel {
    imgUrl: string;
    title: string;
    unlineImageUrl: string;
    discription: string;
}

const cloudServices: CoudOfPremModel[] = [
    {
        discription:
            "As access to high speed broadband grows and technologies mature, we will inevitably see increased migration to cloud based recording and VMS's. Given the high failure rate of hard drives and the cost to maintain servers, the economics appear to favor cloud based recording.",
        imgUrl: "assets/images/img_capex_opex.png",
        title: "CapEx vs OpEx",
        unlineImageUrl: "assets/images/img_underline_purple.png",
    },
    {
        discription:
            "End-to-end encryption means your video is secure even before it leaves your local network. Traditionally it has been difficult to offer encryption between the camera and the server. Using the Stream Bridge wraps your video in a secure TLS/SSL session and prevent MITM attacks.",
        imgUrl: "assets/images/img_security.png",
        title: "Security",
        unlineImageUrl: "assets/images/img_underline_yellow.png",
    },
    {
        discription:
            "Broadflow's cloud services are hosted by AWS and are thus capable of massive scale. We decided to focus on delivering value to customers rather than managing our own data centers. The infrastructure is continuously upgraded alongside new feature releases and video processing improvements.",
        imgUrl: "assets/images/img_scale.png",
        title: "Infrastructure & Scale",
        unlineImageUrl: "assets/images/img_underline_red.png",
    },
];

export const CloudOnPrem = () => {
    return (
        <Wrapper>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    marginTop: "20%",
                    width: "100%",
                }}
            >
                <img
                    src="assets/images/img_background_dot.png"
                    style={{ width: "100%", height: "90%" }}
                />
            </div>
            <PageLayout>
                <div>
                    <CameraPageImg src="assets/images/img_page_camera.png" />
                    <CloudOnPremContent>
                        <CloudOnPremTitle>Cloud / On-prem</CloudOnPremTitle>
                        <div className="row">
                            {cloudServices.map((service) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4"
                                    style={{ marginTop: 20 }}
                                    key={service.title}
                                >
                                    <CloudOnPremItem cloud={service} />
                                </div>
                            ))}
                        </div>
                    </CloudOnPremContent>
                </div>
            </PageLayout>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    margin-top: 100px;
`;

const CloudOnPremContent = styled.div`
    margin-top: 50px;
`;

const CloudOnPremTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #303030;
    text-align: center;
`;

const CameraPageImg = styled.img`
    width: 100%;
    border-radius: 28px;
    box-shadow: 0px 3px 13px 1px rgba(0, 0, 0, 0.2);
`;
