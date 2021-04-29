import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BillAnnuallyTab } from "./BilledAnnuallyTab";
import { BilledMonthlyTab } from "./BilledMonthlyTab";

export const PricingTab = () => {
    const { t } = useTranslation();
    const [tab, setTab] = useState(0);
    return (
        <Wrap>
            <div style={{ position: "absolute", top: -40 }}>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <TabControllerWrap
                            className={
                                tab === 0 ? "active nav-link" : "nav-link"
                            }
                            id="billed-monthly-tab"
                            data-toggle="tab"
                            href="#billed-monthly"
                            role="tab"
                            aria-controls="billed-monthly"
                            aria-selected={tab === 0 ? "true" : "false"}
                            onClick={() => setTab(0)}
                            style={
                                tab === 0
                                    ? {
                                          fontWeight: 600,
                                          color: "#5156D3",
                                          background: "#E7E8FF",
                                          borderColor: "#A6A9FF !important",
                                      }
                                    : {}
                            }
                        >
                            {t("pricing_page.billed_monthly_tab")}
                        </TabControllerWrap>
                    </li>
                    <li className="nav-item">
                        <TabControllerWrap
                            className={
                                tab === 1 ? "active nav-link" : "nav-link"
                            }
                            id="billed-annually-tab"
                            data-toggle="tab"
                            href="#billed-annually"
                            role="tab"
                            aria-controls="billed-annually"
                            aria-selected={tab === 1 ? "true" : "false"}
                            onClick={() => setTab(1)}
                            style={
                                tab === 1
                                    ? {
                                          fontWeight: 600,
                                          color: "#5156D3",
                                          background: "#E7E8FF",
                                          borderColor: "#A6A9FF !important",
                                      }
                                    : {}
                            }
                        >
                            {t("pricing_page.billed_annually_tab")}
                            <Discount>SAVE 15%</Discount>
                        </TabControllerWrap>
                    </li>
                </ul>
            </div>
            <div
                className="tab-content"
                id="myTabContent"
                style={{ width: "100%", paddingTop: 30 }}
            >
                <div
                    className={`tab-pane fade ${tab === 0 && "show active"}`}
                    id="billed-monthly"
                    role="tabpanel"
                    aria-labelledby="billed-monthly-tab"
                >
                    <BilledMonthlyTab />
                </div>
                <div
                    className={`tab-pane fade ${tab === 1 && "show active"}`} //show active
                    id="billed-annually"
                    role="tabpanel"
                    aria-labelledby="billed-annually-tab"
                >
                    <BillAnnuallyTab />
                </div>
            </div>
        </Wrap>
    );
};

const Wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`;

const TabControllerWrap = styled.a`
    height: 40px;

    background: #ffffff;
    border-width: 1px;
    border-style: solid;
    border-color: #dedede !important;
    border-radius: 8px 8px 0px 0px !important;
    margin: 0px 4px;
    text-align: center;
    font-size: 14px;
    font-family: "Poppins";
`;

const Discount = styled.span`
    color: #499932;
    font-family: "Poppins";
    font-weight: 700;
    margin-left: 5px;
`;
