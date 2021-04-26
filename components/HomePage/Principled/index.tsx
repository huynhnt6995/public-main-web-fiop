import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PriamyButton } from "../../button/PriamyButton";
import { PageLayout } from "../../layout/PageLayout";
import { PrincipledIntem } from "./PrincipledIntem";

export interface PrincipledModel {
    imgUrl: string;
    title: string;
    discription: string;
    buttonLabel: string;
    handleClick: () => void;
}

const principledData: PrincipledModel[] = [
    {
        title: "home_page.access_control_intergration",
        discription: "home_page.access_control_intergration_content",
        imgUrl: "assets/images/img_control.png",
        buttonLabel: "button.contact_us",
        handleClick: () => {},
    },
    {
        title: "home_page.point_of_sale",
        discription: "home_page.point_of_sale_content",
        imgUrl: "assets/images/img_point_of_sale.png",
        buttonLabel: "button.contact_us",
        handleClick: () => {},
    },
    {
        title: "home_page.video_package_search",
        discription:
            "A short description that let the customer know about this product. Keep it in 3 rows",
        imgUrl: "assets/images/img_video_package.png",
        buttonLabel: "button.contact_us",
        handleClick: () => {},
    },
    {
        title: "home_page.livestream",
        discription: "home_page.livestream_content",
        imgUrl: "assets/images/img_livestream.png",
        buttonLabel: "button.contact_us",
        handleClick: () => {},
    },
    {
        title: "home_page.custom_solution",
        discription: "home_page.custom_solution_content",
        imgUrl: "assets/images/img_custom.png",
        buttonLabel: "button.contact_us",
        handleClick: () => {},
    },
];

export const Principled = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                backgroundColor: "#fff",
                paddingTop: 80,
                paddingBottom: 80,
            }}
        >
            <div className="col align-self-center">
                <Title>{t("home_page.principled_product_developent")}</Title>
                <Discription>
                    {t("home_page.principled_product_developent_content")}
                </Discription>
            </div>
            <div className="row justify-content-center">
                <div
                    className="col-12 col-sm-4 col-lg-3"
                    style={{ marginTop: 30, marginRight: 5, marginLeft: 5 }}
                >
                    <WrapperService>
                        <IndustryImage src="assets/images/img_surveillance_notify.png" />
                        <IndustryTitle>
                            {t(
                                "home_page.cloud_surveillance_and_device_notification"
                            )}
                        </IndustryTitle>
                        <IndustryCotent>
                            {t(
                                "home_page.cloud_surveillance_and_device_notification_content"
                            )}
                        </IndustryCotent>
                        <PriamyButton
                            label="Get your free account"
                            styles={{
                                backgroundImage: "none",
                                paddingTop: 8,
                                paddingBottom: 8,
                                borderRadius: 9,
                                color: "#000",
                                marginTop: 20,
                                fontSize: 13,
                                marginBottom: 15,
                                background:
                                    "linear-gradient(180deg, #FFDD94 0%, #FFA012 100%)",
                            }}
                        />
                    </WrapperService>
                </div>
                {principledData.map((principled) => (
                    <div
                        className="col-12 col-sm-4 col-lg-3"
                        style={{
                            marginTop: 30,
                            marginRight: 5,
                            marginLeft: 5,
                        }}
                        key={principled.title}
                    >
                        <PrincipledIntem principled={principled} />
                    </div>
                ))}
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    color: #303030;
    text-align: center;
`;

const Discription = styled.label`
    font-family: "Poppins";
    font-size: 15px;
    color: #606060;
    text-align: center;
    width: 100%;
`;

const WrapperService = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    height: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.06),
        0px 16px 114px rgba(0, 1, 28, 0.08);
    border-radius: 8px 100px 8px 8px;
    background: linear-gradient(180deg, #6065ea 0%, #3a3ea6 100%);
`;

const IndustryImage = styled.img`
    margin-bottom: 30px;
    border-radius: 8px 80px 8px 8px;
`;

const IndustryTitle = styled.p`
    text-align: left;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    display: flex;
    flex: 1;
`;

const IndustryCotent = styled.label`
    font-family: "Poppins";
    font-size: 15px;
    color: #9699ef;
    text-align: left;
`;
