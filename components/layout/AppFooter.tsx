import React from "react";
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
    { label: "Cannabis Dispensary", nav: "" },
    { label: "Shipping & Logistics", nav: "" },
    { label: "Retail", nav: "" },
    { label: "Banking", nav: "" },
    { label: "Enterprise Solutions", nav: "" },
];

const solutionNavidations: FooterItemNav[] = [
    { label: "Device Notifications", nav: "" },
    { label: "Cloud Surveillance", nav: "" },
    { label: "Access Control Integration", nav: "" },
    { label: "Package Video Search", nav: "" },
    { label: "Livestream into your Website", nav: "" },
];

const navigationItems: FooterItemNav[] = [
    { label: "Home", nav: "" },
    { label: "Technology", nav: "" },
    { label: "Blog", nav: "" },
    { label: "Pricing", nav: "" },
    { label: "Contac Us", nav: "" },
    { label: "About Us", nav: "" },
    { label: "Help center", nav: "" },
    { label: "Term of use", nav: "" },
    { label: "Privacy", nav: "" },
    { label: "Login", nav: "" },
];

export const AppFooter = () => {
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
                            Developing innovative solutions that solve complex
                            problems by learning from and listening to our
                            partners and customers.
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
                        <FooterItemTitle>Industry</FooterItemTitle>
                        {industryNavidations.map((industry) => (
                            <FooterItemLabel>{industry.label}</FooterItemLabel>
                        ))}
                    </div>
                    <div
                        className="col-12 col-sm-6 col-xl-3"
                        style={{ paddingRight: 20 }}
                    >
                        <FooterItemTitle>Solutions</FooterItemTitle>
                        {solutionNavidations.map((industry) => (
                            <FooterItemLabel>{industry.label}</FooterItemLabel>
                        ))}
                    </div>
                    <div
                        className="col-12 col-sm-6 col-xl-3"
                        style={{ paddingRight: 20 }}
                    >
                        <FooterItemTitle>Navigation</FooterItemTitle>
                        <div className="row">
                            {navigationItems.map((nav) => (
                                <div className="col-6">
                                    <FooterItemLabel
                                        style={{
                                            marginTop: 1,
                                        }}
                                    >
                                        {nav.label}
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
