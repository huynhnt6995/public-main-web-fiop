import React from "react";
import { PricingTab } from "../components/PricingPage/PricingTab";
import { PricingHeader } from "../components/PricingPage/PricingHeader";
import { VideoStream } from "../components/PricingPage/PricingTab/BilledMonthlyTab/VideoStream";

const Pricing = () => {
    return (
        <div>
            <PricingHeader />
            <PricingTab />
            <VideoStream />
        </div>
    );
};

export default Pricing;
