import React from "react";
import {HeaderBanner} from '../components/IndustryPage/HeaderBanner'
import {UseCases} from '../components/IndustryPage/UseCases/index'
import {CloudOnPrem} from '../components/IndustryPage/CloudOnPrem/index'
import {Broadflow} from '../components/IndustryPage/Broadflow/index'
import {Streams} from '../components/IndustryPage/Streams/index'
import {ContactForm} from '../components/IndustryPage/FormContact/index'
const Inductry = () => {
    return( 
     <>
        <HeaderBanner/>
        <UseCases/>
        <CloudOnPrem/>
        <Broadflow/>
        <Streams/>
        <ContactForm/>
    </>);
};

export default Inductry;
