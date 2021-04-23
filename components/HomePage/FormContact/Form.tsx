import React from "react";
import Form from "react-bootstrap/Form";
import { PriamyButton } from "../../button/PriamyButton";

export const FormInput = () => {
    return (
        <Form style={{ textAlign: "center", width: "45%", minWidth: 320 }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                    type="email"
                    placeholder="Enter your email here"
                />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    placeholder="Enter your demain"
                    as="textarea"
                    rows={3}
                />
            </Form.Group>
            <PriamyButton
                label="Contact us now"
                styles={{
                    background:
                        "linear-gradient(180deg, #FFDD94 0%, #FFA012 100%)",
                    color: "#000",
                    height: 40,
                }}
            ></PriamyButton>
        </Form>
    );
};
