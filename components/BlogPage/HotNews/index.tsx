import React from 'react'
import { PageLayout } from '../../layout/PageLayout'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
export const HotNews = () => {
    const { t } = useTranslation()
    return (
        <PageLayout>
            <Wrapper className="row">
                <WrapperImage className="col-sm-7">
                    <Image src="assets/images/img_hot_news.png" />
                </WrapperImage>
                <div className="col-sm-5">
                    <GroupButton>
                        <Button>
                            <Icon src="assets/icons/ic_arrow_left.png" />
                        </Button>
                        <Button>
                            <Icon src="assets/icons/ic_arrow_right.png" />
                        </Button>
                    </GroupButton>
                    <Title>
                        {t("blog_page.hot_news_title")}
                    </Title>
                    <Description>{t("blog_page.hot_news_description")}</Description>
                    <DateTime>
                        {t("blog_page.hot_news_date_time")}
                    </DateTime>
                </div>
            </Wrapper>
            <hr/>
        </PageLayout>)
}

const Wrapper = styled.div`
    display : flex;
    margin :33px 0 ;
`
const WrapperImage = styled.div`
    display : flex;
    align-items : center;
`
const Image = styled.img`
    width : 100%;
    height : 100%;
` 

const GroupButton = styled.div`
    display : flex;
`
const Button = styled.button`
    background: linear-gradient(180deg, #F5F5F5 0%, #EAEAEA 100%);
    border-radius: 8px;
    border : none;
    margin-left : 10px;

`
const Icon = styled.img``
const Title = styled.p`
    font-family: Poppins;
    font-weight: 500;
    font-size: 32px;
    line-height: 175%;
    color: #303030;
`
const Description = styled.p`
    font-family: Poppins;
    font-size: 16px;
    line-height: 200%;
    color: #606060;
`
const DateTime = styled.p`
    font-family: Poppins;
    font-size: 14px;
    line-height: 200%;
    color: #999999;
`