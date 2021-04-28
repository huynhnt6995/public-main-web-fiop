import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { PageLayout } from "../../layout/PageLayout";
import style from "./Sliderpost.module.css";
import { SliderPostItem } from "./SliderPostItem";

export const SliderPost = () => {
    return (
        <PageLayout>
            <div
                id="carouselExampleControls"
                className={(style["slide"], style["carousel"])}
                data-ride="carousel"
                style={{ borderBottom: "1px solid #E7E7E7", paddingBottom: 10 }}
            >
                <Carousel>
                    {[1, 2, 3].map((i) => (
                        <Carousel.Item key={i}>
                            <SliderPostItem />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </PageLayout>
    );
};
