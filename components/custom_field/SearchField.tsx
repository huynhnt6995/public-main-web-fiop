import React from "react";

export const SearchField = () => {
    return (
        <div className="input-group">
            <div
                className="form-outline"
                style={{ position: "relative", width: "100%" }}
            >
                <input
                    type="search"
                    id="form1"
                    className="form-control"
                    style={{
                        width: "100%",
                        height: 40,
                        borderRadius: 8,
                    }}
                />
                <img
                    src="assets/icons/ic_search.png"
                    style={{
                        position: "absolute",
                        top: 13,
                        right: 13,
                        width: 15,
                        height: 15,
                        cursor: "pointer",
                    }}
                />
            </div>
        </div>
    );
};
