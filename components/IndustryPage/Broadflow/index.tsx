import React from 'react'
import styled from 'styled-components'
import { PageLayout } from '../../layout/PageLayout'
import { useTranslation } from "react-i18next";
import {BroadflowItem} from "./BroadflowItem"

export interface BroadflowModel { 
    imgUrl : string,
    title : string,
    description : string,
    itemContent : string,

}

const broadflowServices : BroadflowModel [] = [
    {
        imgUrl : 'assets/images/img_cloud_surveillance.png',
        title : 'industry_page.cloud_surveillance',
        description : 'industry_page.cloud_surveillance_description',
        itemContent : 'industry_page.cloud_surveillance_item'
    },
    {
        imgUrl : 'assets/images/img_manufacturing_lifecycle_tracking.png',
        title : 'industry_page.manufacturing_lifecycle_tracking',
        description : 'industry_page.manufacturing_lifecycle_tracking_description',
        itemContent : 'industry_page.manufacturing_lifecycle_tracking_item'
    },
    {
        imgUrl : 'assets/images/img_live_stream_into_your_website.png',
        title : 'industry_page.live_stream_into_your_website',
        description : 'industry_page.live_stream_into_your_website_description',
        itemContent : 'industry_page.live_stream_into_your_website_item'
    },
    {
        imgUrl : 'assets/images/img_advanced_notifications.png',
        title : 'industry_page.advanced_notifications',
        description : 'industry_page.advanced_notifications_description',
        itemContent : 'industry_page.advanced_notifications_item'
    },
    {
        imgUrl : 'assets/images/img_point_of_sale_checkout_integration.png',
        title : 'industry_page.point_of_sale_checkout_integration',
        description : 'industry_page.point_of_sale_checkout_integration_description',
        itemContent : 'industry_page.point_of_sale_checkout_integration_item'
    },
    {
        imgUrl : 'assets/images/img_support_for_offline_networks.png',
        title : 'industry_page.support_for_offline_networks',
        description : 'industry_page.support_for_offline_networks_description',
        itemContent : 'industry_page.support_for_offline_networks_item'
    },
]

export const Broadflow = () => {
    const { t } = useTranslation();
    return (<>
        <PageLayout
         containerStyle = {{
            background : 'linear-gradient(78.03deg,rgba(119, 88, 237, 0.05) 0%,rgba(255, 255, 255, 0) 100%),#fafcff',
            paddingBottom : 80,
            paddingTop : 30,
        }} >
            <WrapperTitle>
                <Title>
                    {t("industry_page.broadflow")}
                </Title>
            </WrapperTitle>
            <div>
                {broadflowServices.map(service =>(
                <BroadflowItem broadflow = {service}/>))}
            </div>
        </PageLayout>
    </>)
}
const WrapperTitle = styled.div`
    width : 624px;
    margin : auto;
`
const Title = styled.p`
    font-family: Poppins;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    @media (min-width: 350px) {
        font-size: 10px;
    }
    @media (min-width: 576px) {
        font-size: 20px;
    }
    @media (min-width: 768px) {
        font-size: 25px;
    }
    @media (min-width: 992px) {
        font-size: 30px;
    }
    @media (min-width: 1376px) {
        font-size: 36px;
    }
`