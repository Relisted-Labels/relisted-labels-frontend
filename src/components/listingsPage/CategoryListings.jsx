import { useState, useEffect } from "react";
import Category from "./Category";
// import CategoryLink from "./CategoryLink";

const CategoryListings = () => {
    return (
        <>
        {/* <h2>Categories</h2> */}
        {/* <CategoryLink /> */}
        <Category name="Trending Items"/>
        
        {/* // <Category name="Trendy Casual" /> */}
        <Category name="Wedding Guest" />
        <Category name="Holiday"/>
        <Category name="Brunch"/>
        <Category name="Dine with me"/>
        <Category name="Aso-ebi"/>
        <Category name="Lounge wear"/>
        </>
    )
}

export default CategoryListings;