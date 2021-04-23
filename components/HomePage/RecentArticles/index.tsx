import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

export const RecentArticles = () => {
    return (
        <PageLayout containerStyle={{ paddingTop: 80, paddingBottom: 80 }}>
            <div>
                <Title>Recent Articles</Title>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src="assets/images/img_camera_detect.png"
                            style={{ width: "100%", borderRadius: 8 }}
                        />
                        <ArticleTitle>
                            Thermal Imaging Cameras Detecting Coronavirus
                        </ArticleTitle>
                        <ArticleContent>
                            With a delay in the virus tests being sent out in
                            the United States, people are now relying on other
                            means of detection. Thermal imaging cameras have
                            been a top choice in this.
                        </ArticleContent>
                        <ArticleReleasedDate>
                            March 20, 2020
                        </ArticleReleasedDate>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src="assets/images/img_background_camera_without_internet.png"
                            style={{ width: "100%", borderRadius: 8 }}
                        />
                        <img
                            src="assets/images/img_cctv_firmware.png"
                            style={{
                                width: "100%",
                                borderRadius: 8,
                                marginTop: 25,
                            }}
                        />
                        <ArticleTitle>
                            Understanding CCTV Firmware Updates
                        </ArticleTitle>
                        <ArticleContent>
                            CCTV systems are designed to last years, but
                            advances in technology happen every day. If you...
                        </ArticleContent>
                        <ArticleReleasedDate>
                            March 20, 2020
                        </ArticleReleasedDate>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src="assets/images/img_camera_ip_rating.png"
                            style={{ width: "100%", borderRadius: 8 }}
                        />
                        <img
                            src="assets/images/img_cctv.png"
                            style={{
                                width: "100%",
                                borderRadius: 8,
                                marginTop: 25,
                            }}
                        />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    color: #303030;
    margin: 10px 0px 30px 0px;
`;

const ArticleTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    color: #303030;
    margin: 20px 0px;
`;

const ArticleContent = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    color: #606060;
`;

const ArticleReleasedDate = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    color: #999999;
`;
