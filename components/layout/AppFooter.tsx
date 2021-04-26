import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "./PageLayout";

interface SocialNav {
    iconUrl: string;
    nav: string;
    style: React.CSSProperties;
}

interface FooterItemNav {
    label: string;
    nav: string;
}

const socialNavigations: SocialNav[] = [
    {
        iconUrl: "assets/icons/ic_youtube.png",
        nav: "",
        style: {
            height: 20,
        },
    },
    {
        iconUrl: "assets/icons/ic_linkedin.png",
        nav: "",
        style: { height: 16 },
    },
    {
        iconUrl: "assets/icons/ic_facebook.png",
        nav: "",
        style: { height: 16 },
    },
];

const industryNavidations: FooterItemNav[] = [
    { label: "footer_app.cannabis_dispensary", nav: "" },
    { label: "footer_app.shipping_and_logistic", nav: "" },
    { label: "footer_app.retail", nav: "" },
    { label: "footer_app.banking", nav: "" },
    { label: "footer_app.enterprise_solutions", nav: "" },
];

const solutionNavidations: FooterItemNav[] = [
    { label: "footer_app.device_notification", nav: "" },
    { label: "footer_app.cloud_surveillance", nav: "" },
    { label: "footer_app.access_control_integration", nav: "" },
    { label: "footer_app.video_package_search", nav: "" },
    { label: "footer_app.live_stream_into_website", nav: "" },
];

const navigationItems: FooterItemNav[] = [
    { label: "menu.home", nav: "" },
    { label: "menu.technology", nav: "" },
    { label: "menu.blog", nav: "" },
    { label: "menu.pricing", nav: "" },
    { label: "menu.contact_us", nav: "" },
    { label: "menu.about_us", nav: "" },
    { label: "menu.help_center", nav: "" },
    { label: "menu.term_of_use", nav: "" },
    { label: "menu.privacy", nav: "" },
    { label: "menu.login", nav: "" },
];

export const AppFooter = () => {
    const { t } = useTranslation();
    return (
        <div>
            <PageLayout
                containerStyle={{
                    paddingTop: 30,
                    paddingBottom: 50,
                    borderBottom: "1px solid #F1F1F1",
                }}
            >
                <div className="row">
                    <div
                        className="col-12 col-sm-6 col-xl-4"
                        style={{ paddingRight: 20 }}
                    >
                        <img
                            src="/assets/images/img_logo.png"
                            style={{ width: 141, height: 38 }}
                        />
                        <FooterItemLabel>
                            {t("footer_app.discription")}
                        </FooterItemLabel>
                        <div className="d-flex align-self-start">
                            {socialNavigations.map((social) => (
                                <img
                                    src={social.iconUrl}
                                    key={social.iconUrl}
                                    style={{ ...social.style, marginRight: 15 }}
                                />
                            ))}
                        </div>
                        <div
                            className="d-flex align-items-center"
                            style={{ marginTop: 20 }}
                        >
                            <img
                                src="assets/icons/ic_mail.png"
                                style={{ width: 14, height: 10 }}
                            />
                            <MailLabel>connect@broadflow.co</MailLabel>
                        </div>
                    </div>
                    <div
                        className="col-12 col-sm-6 col-xl-2"
                        style={{ paddingRight: 20 }}
                    >
                        <FooterItemTitle>
                            {t("footer_app.industry")}
                        </FooterItemTitle>
                        {industryNavidations.map((industry) => (
                            <FooterItemLabel key={industry.label}>
                                {t(industry.label)}
                            </FooterItemLabel>
                        ))}
                    </div>
                    <div
                        className="col-12 col-sm-6 col-xl-3"
                        style={{ paddingRight: 20 }}
                    >
                        <FooterItemTitle>
                            {t("footer_app.solutions")}
                        </FooterItemTitle>
                        {solutionNavidations.map((industry) => (
                            <FooterItemLabel key={industry.label}>
                                {t(industry.label)}
                            </FooterItemLabel>
                        ))}
                    </div>
                    <div
                        className="col-12 col-sm-6 col-xl-3"
                        style={{ paddingRight: 20 }}
                    >
                        <FooterItemTitle>
                            {t("footer_app.navigation")}
                        </FooterItemTitle>
                        <div className="row">
                            {navigationItems.map((nav) => (
                                <div className="col-6" key={nav.label}>
                                    <FooterItemLabel
                                        style={{
                                            marginTop: 1,
                                        }}
                                    >
                                        {t(nav.label)}
                                    </FooterItemLabel>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PageLayout>
            <License>Copyright by 2021 Broadflow Corp</License>
        </div>
    );
};

const FooterItemLabel = styled.p`
    font-family: "Poppins";
    font-size: 14px;
    color: #606060;
    margin: 15px 0px;
    line-height: 200%;
    letter-spacing: -0.3px;
    cursor: pointer;
    margin: 5px 0px;
`;

const FooterItemTitle = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.3px;
    color: #303030;
    height: 38px;
    margin: 0px;
`;

const MailLabel = styled.label`
    font-family: "Poppins";
    font-size: 14px;
    letter-spacing: -0.3px;
    color: #303030;
    margin: 0px 0px 0px 10px;
`;

const License = styled.p`
    font-family: "Poppins";
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #808080;
`;
