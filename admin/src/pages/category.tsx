import React from "react";
import CategoryTable from "../components/category/CategoryTable";
import ColorTable from "../components/color/ColorTable";
import Header from "../components/Header";
import SizeTable from "../components/size/SizeTable";

function Category() {
  return (
    <>
      <Header pageTitle={"Categories"} />
      <CategoryTable />
      <ColorTable />
      <SizeTable />
    </>
  );
}
export default Category;
