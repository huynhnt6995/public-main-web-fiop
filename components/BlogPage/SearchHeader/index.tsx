import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SearchField } from "../../custom_field/SearchField";
import { PageLayout } from "../../layout/PageLayout";

export const SearchHeader = () => {
    const { t } = useTranslation();
    return (
        <PageLayout
            containerStyle={{
                background:
                    'url("assets/images/img_contact_background.png") no-repeat left top,linear-gradient(78.03deg, rgba(119, 88, 237, 0.05) 0%, rgba(255, 255, 255, 0) 100%), #FAFCFF',
                backgroundSize: "100% 100%",
            }}
        >
            <div
                className="col col-md-6 offset-md-3"
                style={{ paddingBottom: 110, paddingTop: 70 }}
            >
                <Title>{t("blog_page.broadflow_blog")}</Title>
                <SearchField />
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
    color: #303030;
`;
