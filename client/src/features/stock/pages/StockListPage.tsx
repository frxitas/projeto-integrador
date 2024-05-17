import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { Loader2, Pencil, Trash } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import DefaultLayout from "../../../layout/DefaultLayout";

import { useStore } from "@/store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination } from "@/hooks/usePagination";

const StockListPage = () => {
  const { toast } = useToast();

  const [deleteAlertIsOpen, setDeleteAlertIsOpen] = useState(false);

  const { productList, getProductList, productDeleter, deleteProduct, clearDeleteProduct } =
    useStore((state) => ({
      productList: state.productList,
      getProductList: state.getProductList,
      productDeleter: state.productDeleter,
      deleteProduct: state.deleteProduct,
      clearDeleteProduct: state.clearDeleteProduct,
    }));

  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get("page")!;

  const [currentPage, setCurrentPage] = useState(1);
  let skip = (currentPage - 1) * 10;
  let take = 10;

  const paginationRange = usePagination({
    page: currentPage,
    pageSize: 10,
    siblingCount: 1,
    totalCount: productList.data?.total!,
  });

  useEffect(() => {
    getProductList(skip, take);

    return () => {
      clearDeleteProduct();
    };
  }, []);

  useEffect(() => {
    let skip = (Number(pageParam) - 1) * 10;
    let take = 10;

    if (pageParam) {
      setCurrentPage(Number(pageParam));
      getProductList(skip, take);
    }
  }, [pageParam]);

  useEffect(() => {
    if (productDeleter.success) {
      toast({
        title: "Produto deletado com sucesso!",
      });
      setDeleteAlertIsOpen(false);
      clearDeleteProduct();
      getProductList(skip, take);
    } else if (productDeleter.error) {
      toast({
        title: "Algo deu errado tente novamente mais tarde!",
        variant: "destructive",
      });
      setDeleteAlertIsOpen(false);
    }
  }, [productDeleter.success, productDeleter.error]);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{"Lista de produtos"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-end items-center w-full">
          <Link to={"/estoque/detalhe"}>
            <Button>Adicionar produto</Button>
          </Link>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Preço</TableHead>
                {/* <TableHead>Grupo</TableHead>
                <TableHead>Fabricante</TableHead> */}
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productList.data?.products.length ? (
                productList.data?.products.map((product) => {
                  return (
                    <TableRow key={product.id}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>
                        {new Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center items-center gap-4">
                          <Link to={`/estoque/detalhe/${product.id}`}>
                            <Button variant={"outline"} size={"icon"}>
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </Link>

                          <AlertDialog open={deleteAlertIsOpen}>
                            <AlertDialogTrigger asChild>
                              <Button
                                onClick={() => setDeleteAlertIsOpen(true)}
                                variant={"outline"}
                                size={"icon"}
                              >
                                <Trash className="w-4 h-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  Está ação não pode ser desfeita. Ao excluir, o produto não pode
                                  ser recuperado!
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <div className="flex justify-center items-center w-full gap-4">
                                  <AlertDialogCancel onClick={() => setDeleteAlertIsOpen(false)}>
                                    Cancelar
                                  </AlertDialogCancel>
                                  <Button
                                    variant={"destructive"}
                                    onClick={() => deleteProduct(product.id)}
                                  >
                                    {productDeleter.loading ? (
                                      <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        {"Carregando..."}
                                      </>
                                    ) : (
                                      <>{"Deletar"}</>
                                    )}
                                  </Button>
                                </div>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Sem valor para exibir!
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious to={`/estoque?page=${currentPage === 1 ? 1 : currentPage - 1}`} />
            </PaginationItem>

            {paginationRange.range.map((page, index) => (
              <PaginationItem key={page + `${index}`}>
                {page === "..." ? (
                  page
                ) : (
                  <PaginationLink
                    to={`/estoque?page=${page}`}
                    isActive={currentPage === page}
                  >{`${page}`}</PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                to={`/estoque?page=${
                  currentPage === paginationRange.lastPage
                    ? paginationRange.lastPage
                    : currentPage + 1
                }`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </DefaultLayout>
  );
};

export default StockListPage;
