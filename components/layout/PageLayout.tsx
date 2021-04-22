import React from "react";

interface Props {
    children: React.ReactNode;
    containerStyle?: React.CSSProperties;
}
export const PageLayout = ({ children, containerStyle }: Props) => {
    return (
        <div style={{ ...containerStyle, display: "flex" }}>
            <div className="d-none d-lg-block col-lg-1 col-xl-1" />
            <div className="col-12 col-lg-10 col-xl-10">{children}</div>
            <div className="d-none d-lg-block col-lg-1 col-xl-1" />
        </div>
    );
};
