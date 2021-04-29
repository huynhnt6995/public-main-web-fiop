import React from "react";
import { CompareFeatures } from "./CompareFeatures";
import { Notification } from "./Notification";
import { VideoStorage } from "./VideoStorage";
import { VideoStream } from "./VideoStream";

export const BilledMonthlyTab = () => {
    return (
        <div>
            <CompareFeatures />
            <VideoStream />
            <Notification />
            <VideoStorage />
        </div>
    );
};
