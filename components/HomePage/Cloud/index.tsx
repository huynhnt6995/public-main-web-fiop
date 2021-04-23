import React from "react";
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
        title: "Device Notifications",
        discription:
            "Configure your cameras and devices with SMTP settings right out of the box.",
    },
    {
        imgUrl: "assets/images/img_cloud_notification.png",
        discription:
            "Securely record and livestream your security cameras over the cloud with end-to-end encryption.",
        title: "Cloud Surveillance",
    },
    {
        imgUrl: "assets/images/img_cloud_point_of_event.png",
        discription:
            "Treating devices as abstract objects in software opens up new possibilities.",
        title: "Cross-platform Integration",
    },
    {
        imgUrl: "assets/images/img_cloud_serveillance.png",
        discription:
            "We've generalized point-of-sale to point-of-event. Access control, barcode scanners, retail sales..",
        title: "Point-of-Event",
    },
];

export const Cloud = () => {
    return (
        <PageLayout>
            <div style={{ textAlign: "center" }}>
                <Title>Manage your device stack in the cloud</Title>
                <div className="row">
                    {cloudServices.map((service) => (
                        <div
                            className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3"
                            style={{ marginTop: 20 }}
                        >
                            <WrapperService key={service.imgUrl}>
                                <ServiceImage src={service.imgUrl} />
                                <ServiceTitle>{service.title}</ServiceTitle>
                                <ServiceCotent>
                                    {service.discription}
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
