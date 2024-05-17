import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useStore } from "@/store";
import { ProductDetail } from "../slices/productFetcherSlice";
import { useToast } from "@/components/ui/use-toast";

interface ProductDetailFormProps {
  product: ProductDetail;
  id: string;
}

const ProductDetailForm = ({ product, id }: ProductDetailFormProps) => {
  const { toast } = useToast();

  const { productSaver, getProductById, updateProduct, createProduct, group, umed, manufacturer } =
    useStore((state) => ({
      productSaver: state.productSaver,
      getProductById: state.getProductDetail,
      updateProduct: state.updateProduct,
      createProduct: state.createProduct,
      group: state.group,
      umed: state.umed,
      manufacturer: state.manufacturer,
    }));

  const form = useForm({
    values: product || {},
  });

  useEffect(() => {
    if (id) getProductById(Number(id));
  }, []);

  useEffect(() => {
    if (productSaver.success) {
      toast({
        title: "Produto salvo com sucesso!",
      });
    } else if (productSaver.error) {
      toast({
        title: "Algo deu errado tente novamente mais tarde!",
        variant: "destructive",
      });
    }
  }, [productSaver.success, productSaver.error]);

  const onSubmit = (data: ProductDetail) => {
    console.log(data);
    if (data.id)
      updateProduct({
        id: data.id,
        description: data.description,
        group: Number(data.group),
        manufacturer: Number(data.manufacturer),
        name: data.name,
        price: data.price,
        umed: Number(data.umed),
      });
    else
      createProduct({
        description: data.description,
        group: Number(data.group),
        manufacturer: Number(data.manufacturer),
        name: data.name,
        price: data.price,
        umed: Number(data.umed),
      });
  };

  return (
    <Form {...form}>
      <FormField
        name={"name"}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome</FormLabel>
            <FormControl>
              <Input placeholder="Insira o nome" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name={"description"}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Input placeholder="Insira a descrição" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        name={"price"}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preço</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Insira a descrição" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <Controller
        name={"umed"}
        control={form.control}
        render={({ field: { onChange, name, value } }) => {
          return (
            <FormItem>
              <FormLabel>Unidade de medida</FormLabel>
              <Select onValueChange={onChange} value={value?.toString()} name={name} required>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma unidade de medida" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-40">
                  <SelectGroup>
                    {umed.data!?.length &&
                      umed.data.map((umed) => (
                        <SelectItem key={umed.id} value={String(umed.id)}>
                          {umed.description}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          );
        }}
      />

      <Controller
        name={"manufacturer"}
        control={form.control}
        render={({ field: { onChange, name, value } }) => {
          return (
            <FormItem>
              <FormLabel>Fabricante</FormLabel>
              <Select onValueChange={onChange} value={value?.toString()} name={name} required>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um fabricante" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-40">
                  {manufacturer.data!?.length &&
                    manufacturer.data.map((manufacturer) => (
                      <SelectItem key={manufacturer.id} value={String(manufacturer.id)}>
                        {manufacturer.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormItem>
          );
        }}
      />
      <Controller
        name={"group"}
        render={({ field: { onChange, name, value } }) => {
          return (
            <FormItem>
              <FormLabel>Grupo</FormLabel>
              <Select onValueChange={onChange} value={value?.toString()} name={name} required>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um grupo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="max-h-40">
                  <SelectGroup>
                    {group.data?.length &&
                      group.data?.map((group) => (
                        <SelectItem key={group.id} value={String(group.id)}>
                          {group.description}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          );
        }}
      />
      <Button onClick={() => onSubmit(form.getValues())} type="submit">
        Salvar
      </Button>
    </Form>
  );
};

ProductDetailForm.displayName = "ProductDetailForm";

export { ProductDetailForm };
