import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { FormInput } from "./Form";

export const ContactForm = () => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <PageLayout>
                <WrapperContent>
                    <Content>
                        <Title>
                            {t("industry_page.need_a_custom_solution")}
                        </Title>
                        <Discrition>
                            {t("industry_page.need_a_custom_solution_content")}
                        </Discrition>
                        <FormInput />
                    </Content>
                </WrapperContent>
            </PageLayout>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    background: url("assets/images/img_contact_background.png") no-repeat left
            top,
        linear-gradient(180deg, #6065ea 0%, #3a3ea6 100%);
    background-size: 100% 100%;
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
const WrapperContent = styled.div`
    display: flex;
    justify-content: center;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;
    width: 65%;
`;
