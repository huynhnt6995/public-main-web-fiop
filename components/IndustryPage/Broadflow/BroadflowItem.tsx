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
        <WrapperService key ={broadflow.title}  >
            <div
                style={{
                    padding: "40px 94px"
                    
                }}
            ><img src={broadflow.imgUrl} width='100%' /></div>
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
                        <ServiceListItemContent>
                            {t(broadflow.itemContent)}
                        </ServiceListItemContent>
                    </ServiceListItem>
                    <hr />
                    <ServiceListItem>
                        <img alt='icon' src="assets/icons/ic_check.png" width="24px" height="24px" />
                        <ServiceListItemContent>
                            {t(broadflow.itemContent)}
                        </ServiceListItemContent>
                    </ServiceListItem>
                </ServiceList>
            </ServiceCotent>
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
    @media (min-width: 350px) {
        flex-direction : column;
    }
    @media (min-width: 576px) {
        flex-direction : column;
    }
    @media (min-width: 768px) {
        flex-direction : row;
    }
    @media (min-width: 992px) {
        flex-direction : row;
    }
    @media (min-width: 1376px) {
       flex-direction : row;
    }
 
`;
const ServiceTitle = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 39px;
    color: #303030;
`
const ServiceDescription = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;
    letter-spacing: -0.3px;
    color: #606060;
`
const ServiceCotent = styled.div`
    font-family: "Poppins";
    font-size: 15px;
    color: #606060;
    text-align: left;
    flex : 1;

`;
const ServiceList = styled.ul`
    padding-left : 0
`
const ServiceListItem = styled.li`
    display : flex;
`
const ServiceListItemContent = styled.p`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 200%;
    letter-spacing: -0.3px;
    color: #606060;
`

