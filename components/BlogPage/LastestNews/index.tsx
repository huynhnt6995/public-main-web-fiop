import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { DailyNewItem } from "./DailyNewItem";
import { NewsItem } from "../NewsItem";

export interface NewsModels {
    imgUrl: string;
    category: string;
    title: string;
    shortContent: string;
}

export interface DailyNewsModel {
    category: string;
    title: string;
}

const lastestNews: NewsModels[] = [
    {
        imgUrl: "assets/images/img_hikvision_camera.png",
        category: "blog_page.technology",
        title: "blog_page.hikvision_traffic",
        shortContent: "blog_page.hikvision_traffic_content",
    },
    {
        imgUrl: "assets/images/img_camera_hack.png",
        category: "blog_page.technology",
        title: "blog_page.massive_camera_hack",
        shortContent: "blog_page.massive_camera_hack_content",
    },
    {
        imgUrl: "assets/images/img_cctv_cameras.png",
        category: "blog_page.security_cctv",
        title: "blog_page.cctc_camera",
        shortContent: "blog_page.cctc_camera_content",
    },
    {
        imgUrl: "assets/images/img_security_camera.png",
        category: "blog_page.security_cctv",
        title: "blog_page.security_camera",
        shortContent: "blog_page.security_camera_content",
    },
];

const lastestNewsBottom: NewsModels[] = [
    {
        imgUrl: "assets/images/img_facial.png",
        category: "blog_page.technology",
        title: "blog_page.facial_recognition",
        shortContent: "blog_page.facial_recognition_content",
    },
    {
        imgUrl: "assets/images/img_more_science.png",
        category: "blog_page.technology",
        title: "blog_page.moral_science",
        shortContent: "blog_page.moral_science_content",
    },
    {
        imgUrl: "assets/images/img_surveillance_camera.png",
        category: "blog_page.security_cctv",
        title: "blog_page.surveillance_camera",
        shortContent: "blog_page.surveillance_camera_content",
    },
];

const dailyNews: DailyNewsModel[] = [
    { title: "blog_page.AI_education", category: "blog_page.technology" },
    { title: "blog_page.camera_live_image", category: "blog_page.technology" },
    { title: "blog_page.cybersecurity", category: "blog_page.technology" },
    {
        title: "blog_page.top_5_security_camera",
        category: "blog_page.technology",
    },
    {
        title: "blog_page.should_we_be_worried",
        category: "blog_page.technology",
    },
    {
        title: "blog_page.type_of_cctv_camera",
        category: "blog_page.technology",
    },
];

export const LastestNews = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <div style={{ marginTop: 50 }}>
                <Title>{t("blog_page.lastest_news")}</Title>
                <div className="row">
                    <div
                        className="col-12 col-md-12 col-lg-8"
                        style={{ paddingRight: 0 }}
                    >
                        <div className="w-100 row">
                            {lastestNews.map((news) => (
                                <NewsItem key={news.title} news={news} />
                            ))}
                        </div>
                    </div>
                    <DailyWrapper className="col-12 col-lg-4">
                        <div
                            className="row"
                            style={{ marginRight: "none !important" }}
                        >
                            <DailyNewsTitle>
                                {t("blog_page.daily_news")}
                            </DailyNewsTitle>
                            {dailyNews.map((news) => (
                                <DailyNewItem news={news} />
                            ))}
                        </div>
                    </DailyWrapper>
                    <div className="col-12">
                        <div className="row">
                            {lastestNewsBottom.map((news) => (
                                <NewsItem
                                    key={news.title}
                                    news={news}
                                    itemClass="col-12 col-sm-6 col-lg-4"
                                />
                            ))}
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
    font-size: 26px;
    line-height: 150%;
    color: #303030;
`;

const DailyNewsTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    margin-left: 15px;
    color: #303030;
    width: 100%;
    margin-top: 20px;
`;

const DailyWrapper = styled.div`
    background: linear-gradient(
            78.03deg,
            rgba(119, 88, 237, 0.05) 0%,
            rgba(255, 255, 255, 0) 100%
        ),
        #fafcff;
    border-radius: 8px;
    margin-bottom: 50px;
`;
