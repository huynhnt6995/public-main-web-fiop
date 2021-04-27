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
                <Carousel
                    nextIcon={
                        <span
                            aria-hidden="true"
                            className="carousel-control-next-icon"
                        >
                            <i className="bi bi-chevron-right"></i>
                        </span>
                    }
                    prevIcon={
                        <span
                            aria-hidden="true"
                            className="carousel-control-prev-icon"
                        >
                            <i className="bi bi-chevron-left"></i>
                        </span>
                    }
                >
                    {[1, 2, 3].map((item) => (
                        <Carousel.Item>
                            <SliderPostItem />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </PageLayout>
    );
};
