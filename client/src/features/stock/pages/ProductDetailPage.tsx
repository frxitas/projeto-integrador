import React, { useEffect, useState } from "react";
import axios from "axios";

// import Select from "@/ds/Select/Select";
import DefaultLayout from "../../../layout/DefaultLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { ProductDetailForm } from "../components/ProductDetailForm";
import { useStore } from "@/store";

const ProductDetailPage = () => {
  const { product, getGroups, getUmeds, getManufacturers } = useStore((state) => ({
    product: state.product.data,
    getProductById: state.getProductDetail,
    getGroups: state.getGroups,
    getUmeds: state.getUmeds,
    getManufacturers: state.getManufecturers,
  }));

  useEffect(() => {
    Promise.all([getGroups(), getUmeds(), getManufacturers()]);
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/estoque">Lista de produtos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.name || "Novo Produto"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-start items-start w-full">
          <h2 className="font-semibold text-xl">Produto</h2>
        </div>
        <div className="flex flex-col gap-4 p-4 w-full rounded-lg shadow">
          <ProductDetailForm />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailPage;
