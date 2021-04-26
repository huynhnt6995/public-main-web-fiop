import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import Form from "react-bootstrap/Form";
import { PriamyButton } from "../../button/PriamyButton";
import { useTranslation } from "react-i18next";

export const LetConnect = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                background: `url("assets/images/img_contact_background.png") no-repeat left top`,
                backgroundColor: "#FAFCFF",
            }}
        >
            <div
                className="col align-self-center align-items-center"
                style={{ paddingTop: 70, paddingBottom: 70 }}
            >
                <Title>{t("home_page.let_connect")}</Title>
                <Subtitle>{t("home_page.let_connect_content")}</Subtitle>
                <Form
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Form.Group
                        controlId="formBasicEmail"
                        style={{ width: "35%", minWidth: 150 }}
                    >
                        <Form.Control
                            style={{ borderRadius: 9 }}
                            type="email"
                            placeholder={t("form.enter_your_email_here")}
                        />
                    </Form.Group>
                    <PriamyButton
                        label={t("button.sign_me_up")}
                        styles={{
                            background:
                                "linear-gradient(180deg, #6065EA 0%, #3A3EA6 100%)",
                            marginLeft: 10,
                            color: "#fff",
                            height: 38,
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
    font-size: 32px;
    text-align: center;
    color: #303030;
    margin-bottom: 10px;
`;

const Subtitle = styled.label`
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    width: 100%;
    text-align: center;
    color: #606060;
    margin-top: 0px;
    margin-bottom: 35px;
`;
