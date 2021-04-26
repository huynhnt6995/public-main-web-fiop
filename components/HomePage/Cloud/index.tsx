import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

interface CloudService {
    imgUrl: string;
    title: string;
    discription: string;
}
const cloudServices: CloudService[] = [
    {
        imgUrl: "assets/images/img_cloud_cross_platform.png",
        title: "home_page.device_notifications_title",
        discription: "home_page.device_notifications_content",
    },
    {
        imgUrl: "assets/images/img_cloud_notification.png",
        discription: "home_page.cloud_notifications_content",
        title: "home_page.cloud_notifications_title",
    },
    {
        imgUrl: "assets/images/img_cloud_point_of_event.png",
        discription: "home_page.cross_platform_content",
        title: "home_page.cross_platform_title",
    },
    {
        imgUrl: "assets/images/img_cloud_serveillance.png",
        discription: "home_page.cloud_serveillance_content",
        title: "home_page.cloud_serveillance_title",
    },
];

export const Cloud = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <div style={{ textAlign: "center" }}>
                <Title>{t("home_page.cloud_title")}</Title>
                <div className="row">
                    {cloudServices.map((service) => (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                            style={{ marginTop: 20 }}
                            key={service.title}
                        >
                            <WrapperService>
                                <ServiceImage src={service.imgUrl} />
                                <ServiceTitle>{t(service.title)}</ServiceTitle>
                                <ServiceCotent>
                                    {t(service.discription)}
                                </ServiceCotent>
                            </WrapperService>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #303030;
`;

const WrapperService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(255, 255, 255, 0.5);
    padding: 30px 15px;
    height: 100%;

    border: 1px dashed #e7e7e7;
    border-radius: 8px 80px 8px 8px;
`;

const ServiceImage = styled.img`
    margin-bottom: 30px;
`;

const ServiceTitle = styled.p`
    text-align: left;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 18px;
    color: #303030;
`;

const ServiceCotent = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    color: #606060;
    text-align: left;
`;
