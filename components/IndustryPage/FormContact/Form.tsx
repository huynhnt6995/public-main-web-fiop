import React from "react";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import { PriamyButton } from "../../button/PriamyButton";

export const FormInput = () => {
    const { t } = useTranslation();
    return (
        <Form style={{ textAlign: "center", width: "45%", minWidth: 320 }}>
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
                label={t("button.connect")}
                styles={{
                    background:
                        "linear-gradient(180deg, #FFDD94 0%, #FFA012 100%)",
                    color: "#000",
                    height: 40,
                    width : 300
                }}
            ></PriamyButton>
        </Form>
    );
};
