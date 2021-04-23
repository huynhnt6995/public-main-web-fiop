import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { FormInput } from "./Form";

export const ContactForm = () => {
    return (
        <Wrapper>
            <PageLayout>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 50,
                        paddingBottom: 50,
                    }}
                >
                    <Title>
                        Looking for a custom solution that covers your demain?
                    </Title>
                    <Discrition>
                        We provise a custome solution that can perfectly fit
                        your enterprise’s demain
                    </Discrition>
                    <FormInput />
                </div>
            </PageLayout>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    background: url("assets/images/img_contact_background.png") no-repeat left
            top,
        linear-gradient(180deg, #6065ea 0%, #3a3ea6 100%);
    height: 100%;
`;

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    text-align: center;
    color: #fff;
`;

const Discrition = styled.label`
    font-family: "Poppins";
    font-size: 16px;
    text-align: center;
    margin-bottom: 30px;

    color: #fff;
`;
