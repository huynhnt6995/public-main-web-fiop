import React from "react";
import { LastestNews } from "../components/BlogPage/LastestNews";
import { SearchHeader } from "../components/BlogPage/SearchHeader";
import { SliderPost } from "../components/BlogPage/SliderPost";

const Blog = () => {
    return (
        <div>
            <SearchHeader />
            <SliderPost />
            <LastestNews />
        </div>
    );
};

export default Blog;
