import React from "react";
import { CompareFeatures } from "./CompareFeatures";
import { Management } from "./Mangement";
import { Notification } from "./Notification";
import { Support } from "./Support";
import { VideoStorage } from "./VideoStorage";
import { VideoStream } from "./VideoStream";

export const BilledMonthlyTab = () => {
    return (
        <div>
            <CompareFeatures />
            <VideoStream />
            <Notification />
            <VideoStorage />
            <Management />
            <Support />
        </div>
    );
};
