import React from "react";
import { useTranslation } from "react-i18next";

export const TagFiled = ({ tag }: { tag: string }) => {
    const { t } = useTranslation();
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                height: 31,
                minWidth: 20,
                borderRadius: 8,
                backgroundColor: "#EBEBF1",
                color: "#303030",
                fontSize: 14,
                fontFamily: "Poppins",
                width: "fit-content",
                paddingLeft: 15,
                paddingRight: 15,
                marginTop: 15,
                marginBottom: 15,
            }}
        >
            <img src="assets/icons/ic_place.png" style={{ marginRight: 10 }} />
            #{t(tag)}
        </div>
    );
};
