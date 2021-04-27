import React from "react";
import { AboutBroadflow } from "../components/AboutPage/AboutBroadflow";
import { Content } from "../components/AboutPage/Content";
import { FormConnect } from "../components/AboutPage/Form";

const AboutPage = () => {
    return (
        <div>
            <AboutBroadflow />
            <Content />
            <FormConnect />
        </div>
    );
};

export default AboutPage;
