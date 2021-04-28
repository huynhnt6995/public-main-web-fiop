import { hostname } from "node:os";
import React from "react";
import { HeaderBanner } from '../components/BlogPage/HeaderBanner'
import { HotNews } from '../components/BlogPage/HotNews/index'
const Blog = () => {
    return (<>
        <HeaderBanner />
        <HotNews />
    </>)
};

export default Blog;
