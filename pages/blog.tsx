import React from "react";
import { LastestNews } from "../components/BlogPage/LastestNews";
import { Popular } from "../components/BlogPage/Popular";
import { SearchHeader } from "../components/BlogPage/SearchHeader";
import { SliderPost } from "../components/BlogPage/SliderPost";

const Blog = () => {
    return (
        <div>
            <SearchHeader />
            <SliderPost />
            <LastestNews />
            <Popular />
        </div>
    );
};

export default Blog;
