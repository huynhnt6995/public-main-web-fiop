import React from 'react'
import { PageLayout } from '../../layout/PageLayout'
import { IndustryConceptItem } from '../../IndustryPage/UseCases/IndustryConceptItem'
import styled from 'styled-components'
import { useTranslation } from "react-i18next";

export interface IndustryConceptModel {
    imgUrl: string;
    title: string;
    discription: string;
}

const industryConceptData: IndustryConceptModel[] = [
    {
        discription: "industry_page.offsite_cloud_recording_content",
        imgUrl: "assets/images/img_offsite_cloud_recording.png",
        title: "industry_page.offsite_cloud_recording",
    },
    {
        discription: "industry_page.seed_to_sale_tracking_content",
        imgUrl: "assets/images/img_seed_to_sale_tracking.png",
        title: "industry_page.seed_to_sale_tracking",
    },
    {
        discription: "industry_page.point_of_sale_content",
        imgUrl: "assets/images/img_point.png",
        title: "industry_page.point_of_sale",
    },
];  

export const UseCases = () => {
    const {t} = useTranslation() 
    return (
        <PageLayout>
            <div
                style={{
                    textAlign: 'center',
                    marginTop: '120px',
                    marginBottom : '48px'
                }}
            >
                <div>
                    <Title>{t("industry_page.useCases_title")}</Title>
                    <Description>{t("industry_page.useCases_description")}</Description>
                </div>

            </div>
            <div className="row justify-content-center" >
                {industryConceptData.map((industry) => (
                    <div
                        className="col-12 col-sm-6 col-md-6 col-lg-4"
                        key={industry.title}
                        style={{ marginBottom: 30 }}
                    >
                        <IndustryConceptItem cloud={industry} />
                    </div>
                ))}
            </div>
        </PageLayout>)
}

const Title = styled.p`
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;
`

const Description = styled.p`
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
`