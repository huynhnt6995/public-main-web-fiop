import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../components/layout/PageLayout";
import Form from "react-bootstrap/Form";
import { PriamyButton } from "../components/button/PriamyButton";

const ContactUs = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                background:
                    'url("assets/images/img_contact_background.png") no-repeat left top,linear-gradient(180deg, #6065EA 0%, #3A3EA6 100%)',
                backgroundSize: "100% 100%",
            }}
        >
            <div
                className="col-12 col-md-8 offset-md-2"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 70,
                    paddingBottom: 70,
                }}
            >
                <Title>{t("contact_us_page.contact_broadflow")}</Title>
                <Discription>
                    {t("contact_us_page.contact_broadflow_discription")}
                </Discription>
                <Form
                    style={{
                        textAlign: "center",
                        width: "75%",
                        minWidth: 320,
                        marginTop: 20,
                    }}
                >
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder={t("form.enter_your_email_here")}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            placeholder={t("form.enter_your_message")}
                            as="textarea"
                            rows={3}
                        />
                    </Form.Group>
                    <PriamyButton
                        label={t("button.send")}
                        styles={{
                            background:
                                "linear-gradient(180deg, #FFDD94 0%, #FFA012 100%)",
                            color: "#000",
                            height: 40,
                            paddingLeft: 100,
                            paddingRight: 100,
                            borderRadius: 9,
                        }}
                    ></PriamyButton>
                </Form>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    letter-spacing: -0.3px;
    color: #fff;
`;

const Discription = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    line-height: 200%;
    text-align: center;
    color: #fff;
    margin-top: 0px;
`;

export default ContactUs;
