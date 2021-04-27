import React from "react";
import styled from "styled-components";
import { PageLayout } from "../../layout/PageLayout";

export interface CoudOfPremModel {
    imgUrl: string;
    title: string;
    unlineImageUrl: string;
    discription: string;
}

export const CloudOnPrem = () => {
    return (
        <Wrapper>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    marginTop: "20%",
                    width: "100%",
                }}
            >
                <DotBackground src="assets/images/img_background_dot.png" />
            </div>
            <PageLayout>
                <div>
                    <CameraPageImg src="assets/images/img_page_camera.png" />
                </div>
            </PageLayout>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    margin: 100px 0px;
`;

const CameraPageImg = styled.img`
    width: 100%;
    border-radius: 28px;
    box-shadow: 0px 3px 13px 1px rgba(0, 0, 0, 0.2);
`;

const DotBackground = styled.img`
    width: 100%;
    @media (min-width: 375px) {
        height: 95%;
    }
    @media (min-width: 980px) {
        height: 80%;
    }
`;
