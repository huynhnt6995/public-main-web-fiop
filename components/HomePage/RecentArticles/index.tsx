import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

export const RecentArticles = () => {
    const { t } = useTranslation();
    return (
        <PageLayout containerStyle={{ paddingTop: 80, paddingBottom: 80 }}>
            <div>
                <Title>{t("home_page.recent_articles")}</Title>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <img
                            src="assets/images/img_camera_detect.png"
                            style={{ width: "100%", borderRadius: 8 }}
                        />
                        <ArticleTitle>
                            {t("home_page.camera_detect_coronavirus")}
                        </ArticleTitle>
                        <ArticleContent>
                            {t("home_page.camera_detect_coronavirus_content")}
                        </ArticleContent>
                        <ArticleReleasedDate>
                            March 20, 2020
                        </ArticleReleasedDate>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <ArticleBackgroundWrap>
                            <img
                                src="assets/images/img_background_camera_without_internet.png"
                                style={{ width: "100%", borderRadius: 8 }}
                            />
                            <label
                                style={{
                                    fontFamily: "Poppins",
                                    fontWeight: 500,
                                    fontSize: 20,
                                    lineHeight: "200%",
                                    color: "#FFFFFF",
                                    position: "absolute",
                                    top: "20%",
                                    left: "5%",
                                    right: "5%",
                                }}
                            >
                                {t("home_page.camera_word_without_internet")}
                            </label>
                        </ArticleBackgroundWrap>
                        <img
                            src="assets/images/img_cctv_firmware.png"
                            style={{
                                width: "100%",
                                borderRadius: 8,
                                marginTop: 25,
                            }}
                        />
                        <ArticleTitle>
                            {t("home_page.cctv_firmware_update")}
                        </ArticleTitle>
                        <ArticleContent>
                            {t("home_page.cctv_firmware_update_content")}
                        </ArticleContent>
                        <ArticleReleasedDate>
                            March 20, 2020
                        </ArticleReleasedDate>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-12">
                                <ArticleBackgroundWrap>
                                    <CCTVRatingWrap
                                        src="assets/images/img_camera_ip_rating.png"
                                        style={{
                                            width: "100%",
                                            borderRadius: 8,
                                        }}
                                    />
                                    <ArticleTitleAbsolute>
                                        {t("home_page.read_cctv_ip_rating")}
                                    </ArticleTitleAbsolute>
                                </ArticleBackgroundWrap>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-12">
                                <ArticleBackgroundWrap>
                                    <img
                                        src="assets/images/img_cctv.png"
                                        style={{
                                            width: "100%",
                                            borderRadius: 8,
                                            marginTop: 25,
                                        }}
                                    />
                                    <ArticleTitleAbsolute>
                                        {t("home_page.cctc_code_explained")}
                                    </ArticleTitleAbsolute>
                                </ArticleBackgroundWrap>
                            </div>
                        </div>
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

const ArticleBackgroundWrap = styled.div`
    position: relative;
`;

const CCTVRatingWrap = styled.img`
    margin-top: 0px;
    @media (max-width: 991px) {
        margin-top: 25px;
    }
`;

const ArticleTitleAbsolute = styled.label`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 200%;
    color: #ffffff;
    position: absolute;
    left: 5%;
    right: 5%;
    bottom: 0;
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
