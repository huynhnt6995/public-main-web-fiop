import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { PriamyButton } from "../../button/PriamyButton";
import { TagFiled } from "../../custom_field/TagFiled";
import { PageLayout } from "../../layout/PageLayout";
import { NewsModels } from "../LastestNews";
import { NewsItem } from "../NewsItem";
import { PopularItems } from "./PopularItems";
import { SubscribeForm } from "./SubscribeForm";

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

const popularTags: string[] = [
    "blog_page.popular_tag1",
    "blog_page.popular_tag2",
    "blog_page.popular_tag3",
    "blog_page.popular_tag4",
    "blog_page.popular_tag5",
    "blog_page.popular_tag6",
    "blog_page.popular_tag7",
];

const popularPosts: NewsModels[] = [
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_china_credit_system.png",
        shortContent: "blog_page.china_credit_system",
        title: "blog_page.china_credit_system_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_big_brother.png",
        shortContent: "blog_page.big_brother",
        title: "blog_page.big_brother_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_privacy_in_sa.png",
        shortContent: "blog_page.privacy_in_sa",
        title: "blog_page.privacy_in_sa_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_let_face_it.png",
        shortContent: "blog_page.let_face_it",
        title: "blog_page.let_face_it_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_the_rule.png",
        shortContent: "blog_page.the_rule",
        title: "blog_page.the_rule_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_cctv_footage.png",
        shortContent: "blog_page.cctv_footage",
        title: "blog_page.cctv_footage_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_family_violence.png",
        shortContent: "blog_page.family_violence",
        title: "blog_page.family_violence_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_supper_recogniser.png",
        shortContent: "blog_page.supper_recogniser",
        title: "blog_page.supper_recogniser_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_cctv_care_home.png",
        shortContent: "blog_page.cctv_care_home",
        title: "blog_page.cctv_care_home_content",
    },
    {
        category: "blog_page.security_cctv",
        imgUrl: "assets/images/img_mentoring.png",
        shortContent: "blog_page.mentoring",
        title: "blog_page.mentoring_content",
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
                <div className="row" style={{ marginBottom: 50 }}>
                    {populars.map((popular, index) => (
                        <div className="col-6 col-md-6 col-lg-4" key={index}>
                            <PopularItems popular={popular} index={index} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div
                            style={{
                                background:
                                    "linear-gradient(78.03deg, rgba(119, 88, 237, 0.05) 0%, rgba(255, 255, 255, 0) 100%), #FAFCFF",
                                borderRadius: 8,
                                paddingTop: 20,
                                paddingLeft: 25,
                                height: "90%",
                            }}
                        >
                            {popularTags.map((tag) => (
                                <TagFiled tag={tag} key={tag} />
                            ))}
                        </div>
                    </div>
                    {popularPosts.map((post) => (
                        <div
                            className="col-12 col-sm-6 col-lg-4"
                            key={post.title}
                        >
                            <NewsItem news={post} itemClass="col-12" />
                        </div>
                    ))}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div
                            style={{
                                background:
                                    "url(assets/images/img_contact_background.png), linear-gradient(180deg, #6065EA 0%, #3A3EA6 100%)",
                                height: "90%",
                                borderRadius: 8,
                                paddingTop: 50,
                                paddingBottom: 50,
                                paddingLeft: 30,
                                paddingRight: 30,
                            }}
                        >
                            <Subcribe>{t("blog_page.subscribe")}</Subcribe>
                            <SubscribeForm />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        textAlign: "center",
                    }}
                >
                    <PriamyButton
                        label={t("button.load_more")}
                        styles={{
                            height: 40,
                            borderRadius: 9,
                            background:
                                "linear-gradient(180deg, #6065EA 0%, #3A3EA6 100%)",
                            paddingLeft: 30,
                            paddingRight: 30,
                            color: "#fff",
                            fontWeight: 500,
                        }}
                    />
                </div>
                <BottomText>{t("blog_page.you_got_to_bottom")}</BottomText>
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

const Subcribe = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: #ffffff;
`;

const BottomText = styled.p`
    font-family: "Poppins";
    font-weight: 500;
    font-size: 13px;
    text-align: center;
    color: #303030;
    padding-left: 30px;
    margin-top: 50px;
    padding-right: 30px;
`;
