import React from "react";
import { useTranslation } from "react-i18next";
import { PriamyButton } from "../../button/PriamyButton";
import Form from "react-bootstrap/Form";

export const FormSpeak = () => {
    const { t } = useTranslation();
    return (
        <Form style={{ textAlign: "center", width: "75%", minWidth: 320 }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder={t("form.enter_your_email_here")}
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    placeholder={t("form.enter_your_question")}
                    as="textarea"
                    rows={3}
                />
            </Form.Group>
            <PriamyButton
                label={t("button.speak_to_us")}
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
    );
};
