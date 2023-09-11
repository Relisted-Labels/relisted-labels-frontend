import { useState, useEffect } from "react";
import Category from "./Category";

const CategoryListings = () => {
    return (
        <>
        <h2>Categories</h2>
        <Category name="Corporate Chic"/>
        
        {/* // <Category name="Trendy Casual" /> */}
        <Category name="Owambe Traditional" />
        <Category name="iWorkFromHome"/>
        </>
    )
}

export default CategoryListings;