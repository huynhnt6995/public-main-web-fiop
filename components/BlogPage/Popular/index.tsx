import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";
import { PopularItems } from "./PopularItems";

export interface PopularModel {
    color: string;
    title: string;
    borderColor: string;
}

const populars: PopularModel[] = [
    {
        color: "linear-gradient(180deg, #DFE0FF 0.01%, #C5BBFF 100%)",
        title: "blog_page.popular1",
        borderColor: "#A29CFD",
    },
    {
        color: "linear-gradient(180deg, #FFEDFD 0.01%, #FFCBFA 100%)",
        title: "blog_page.popular2",
        borderColor: "#F1B0F8",
    },
    {
        color:
            "linear-gradient(180deg, #FFCDCD 0%, #FFDFDF 0.01%, #FFC4C4 100%)",
        title: "blog_page.popular3",
        borderColor: "#FADBDB",
    },
    {
        color:
            "linear-gradient(180deg, #FFECD6 0%, #FFC178 100%, #FFCD93 100%)",
        title: "blog_page.popular4",
        borderColor: "#EBC394",
    },
    {
        color: "linear-gradient(180deg, #FFFACE 0%, #FFF598 100%)",
        title: "blog_page.popular5",
        borderColor: "#FBD88B",
    },
    {
        color: "linear-gradient(180deg, #DEF7FF 0%, #C2F0FF 100%)",
        title: "blog_page.popular6",
        borderColor: "#8EE3FC",
    },
];

export const Popular = () => {
    const { t } = useTranslation();
    return (
        <PageLayout>
            <div
                style={{
                    paddingTop: 50,
                    paddingBottom: 50,
                    borderTop: "1px solid #f5f5f5",
                    borderBottom: "1px solid #f5f5f5",
                }}
            >
                <Title>{t("blog_page.popular")}</Title>
                <div className="row">
                    {populars.map((popular, index) => (
                        <div className="col-6 col-md-4" key={index}>
                            <PopularItems popular={popular} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

const Title = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 26px;
    line-height: 150%;
    color: #303030;
`;
