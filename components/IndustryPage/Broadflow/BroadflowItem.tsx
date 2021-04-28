import React from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import { BroadflowModel } from '.'
interface Props {
    broadflow: BroadflowModel;
}

export const BroadflowItem = ({ broadflow }: Props) => {
    const { t } = useTranslation();
    return (<div>
        <WrapperService key={broadflow.title} className="row" >
            <WrapperImage className="col-sm-4">
                <img src={broadflow.imgUrl}  />
            </WrapperImage>
            <div className="col-sm-8">
                <ServiceCotent>
                    <ServiceTitle>
                        {t(broadflow.title)}
                    </ServiceTitle>
                    <ServiceDescription>
                        {t(broadflow.description)}
                    </ServiceDescription>
                    <ServiceList>
                        <ServiceListItem>
                            <img alt='icon' src="assets/icons/ic_check.png" width="24px" height="24px" />
                            <ServiceItemContent>
                                {t(broadflow.itemContent)}
                            </ServiceItemContent>
                        </ServiceListItem>
                        <hr />
                        <ServiceListItem>
                            <img alt='icon' src="assets/icons/ic_check.png" width="24px" height="24px" />
                            <ServiceItemContent>
                                {t(broadflow.itemContent)}
                            </ServiceItemContent>
                        </ServiceListItem>
                    </ServiceList>
                </ServiceCotent>
            </div>

        </WrapperService>
    </div>)
}
const WrapperService = styled.div`
    display: flex;
    padding: 30px 15px;
    margin-top : 48px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8px 80px 8px 8px;
    border: 1px dashed #E7E7E7;
`;
const WrapperImage = styled.div`
   display : flex;
   justify-content:center;
   align-items :center;
`
const ServiceTitle = styled.p`
    font-family: Poppins;
    font-size: 26px;
    line-height: 39px;
    color: #303030;
`
const ServiceDescription = styled.p`
    font-family: Poppins;
    font-size: 14px;
    line-height: 200%;
    letter-spacing: -0.3px;
    color: #606060;
`
const ServiceCotent = styled.div`
    font-family: Poppins;
    font-size: 15px;
    color: #606060;
    text-align: left;
    flex : 1;
`
const ServiceList = styled.ul`
    padding-left : 0;`

const ServiceListItem = styled.li`display : flex;`

const ServiceItemContent = styled.p`
    font-family: Poppins;
    font-size: 14px;
    line-height: 200%;
    letter-spacing: -0.3px;
    color: "#606060";
`

