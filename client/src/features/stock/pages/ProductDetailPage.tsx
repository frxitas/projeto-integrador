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
import { twMerge } from "tailwind-merge";
import { useParams } from "react-router-dom";
import ProductTicketsList from "../components/ProductTicketsList";

const ProductDetailPage = () => {
  const { id } = useParams();

  const { product, getProductById, clearProduct, getGroups, getUmeds, getManufacturers } = useStore(
    (state) => ({
      product: state.product.data,
      getProductById: state.getProductById,
      clearProduct: state.clearProduct,
      getGroups: state.getGroups,
      getUmeds: state.getUmeds,
      getManufacturers: state.getManufecturers,
    }),
  );

  const groupHasSupport = [1, 4, 7, 8, 9, 14];

  useEffect(() => {
    if (id) getProductById(Number(id));
    Promise.all([getGroups(), getUmeds(), getManufacturers()]);

    return () => {
      clearProduct();
    };
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
        <div className="flex justify-start gap-4 w-full">
          <div
            className={twMerge(
              "flex flex-col gap-4 p-4 w-full rounded-lg shadow",
              id && groupHasSupport.includes(product?.group!) && "w-[85%]",
            )}
          >
            <ProductDetailForm product={product!} id={id!} />
          </div>
          {id && groupHasSupport.includes(product?.group!) ? (
            <div className="flex flex-col gap-4 p-4 w-1/3 rounded-lg shadow">
              <ProductTicketsList productId={id!} />
            </div>
          ) : null}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailPage;
