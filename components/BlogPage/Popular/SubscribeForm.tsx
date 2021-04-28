import React from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { PriamyButton } from "../../button/PriamyButton";

export const SubscribeForm = () => {
    const { t } = useTranslation();
    return (
        <Form style={{ minWidth: 320, marginTop: 40 }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder={t("form.enter_your_email_here")}
                    style={{ height: 40, borderRadius: 9 }}
                />
            </Form.Group>
            <PriamyButton
                label={t("button.subscribe")}
                styles={{
                    background:
                        "linear-gradient(180deg, #FFDD94 0%, #FFA012 100%)",
                    color: "#000",
                    height: 40,
                    paddingRight: 60,
                    paddingLeft: 60,
                    borderRadius: 9,
                }}
            ></PriamyButton>
        </Form>
    );
};
