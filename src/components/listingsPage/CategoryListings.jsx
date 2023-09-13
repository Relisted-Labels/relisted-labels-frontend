import { useState, useEffect } from "react";
import Category from "./Category";
import CategoryLink from "./CategoryLink";

const CategoryListings = () => {
    return (
        <>
        <h2>Categories</h2>
        <CategoryLink />
        <Category name="All categories"/>
        
        {/* // <Category name="Trendy Casual" /> */}
        <Category name="Women" />
        <Category name="Traditional"/>
        </>
    )
}

export default CategoryListings;