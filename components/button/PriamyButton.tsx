import React from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

interface Props {
    label: string;
    styles?: React.CSSProperties;
}

export const PriamyButton = ({ label, styles }: Props) => {
    return <Wrapper style={styles}>{label}</Wrapper>;
};

const Wrapper = styled(Button)`
    background-image: linear-gradient(180deg, #6065ea, #3a3ea6);
    border: 0px;
    border-radius: 5px;
    padding: 0px 20px;
`;
