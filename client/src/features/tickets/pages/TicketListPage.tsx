import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import DefaultLayout from "../../../layout/DefaultLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusIcon, Search, X } from "lucide-react";
import { useStore } from "@/store";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { TicketPriorityBadge } from "@/components/ui/ticketPriorityBadge";
import { TicketTypeBadge } from "@/components/ui/ticketTypeBadge";
import { TicketStatusBadge } from "@/components/ui/ticketStatusBadge";
import { useTransformDate } from "@/hooks/useTransformDate";
import { usePagination } from "@/hooks/usePagination";
import { TicketStatusToCount } from "../@types/ticketTypes";

const TicketListPage = () => {
  const {
    ticketList,
    ticketStatus,
    ticketType,
    ticketPriority,
    ticketCount,
    getTickets,
    getTicketStatus,
    getTicketTypes,
    getTicketPriority,
    getTicketCount,
  } = useStore((state) => ({
    ticketList: state.ticketList,
    ticketStatus: state.ticketStatus,
    ticketType: state.ticketType,
    ticketPriority: state.ticketPriority,
    ticketCount: state.ticketCount,
    getTickets: state.getTickets,
    getTicketStatus: state.getTicketStatus,
    getTicketTypes: state.getTicketTypes,
    getTicketPriority: state.getTicketPriority,
    getTicketCount: state.getTicketCount,
  }));

  const statusCount = ["Novos", "Em Andamento", "Resolvidos"];

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page")!;
  const subjectParam = searchParams.get("subject")! || "";
  const orderParam = searchParams.get("orderBy")! || "";

  const [currentPage, setCurrentPage] = useState(1);
  let skip = (currentPage - 1) * 10;
  let take = 10;

  const paginationRange = usePagination({
    page: currentPage,
    pageSize: 10,
    siblingCount: 1,
    totalCount: ticketList.data?.total!,
  });

  useEffect(() => {
    getTickets(skip, take);
    getTicketStatus();
    getTicketTypes();
    getTicketPriority();
    getTicketCount([
      TicketStatusToCount.Novo,
      TicketStatusToCount.EmAndamento,
      TicketStatusToCount.Resolvido,
    ]);
  }, []);

  useEffect(() => {
    let skip = (Number(pageParam) - 1) * 10;
    let take = 10;

    if (pageParam) {
      setCurrentPage(Number(pageParam));
      getTickets(skip, take, subjectParam, orderParam);
    }
  }, [pageParam]);

  const handleOrderByChange = (order: string) => {
    let search = new URLSearchParams(searchParams);
    search.set("orderBy", order);
    setSearchParams(search);
    getTickets(skip, take, subjectParam, orderParam);
  };

  const handleOnSubjectChange = (subject: string) => {
    let search = new URLSearchParams(searchParams);
    search.set("subject", subject);
    setSearchParams(search);
  };

  const handleClearFilters = () => {
    setSearchParams({});
    getTickets(skip, take);
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>{"Lista de chamados"}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">Chamados</h3>
          <Link to={"/chamados/detalhe"}>
            <Button className="flex gap-4">
              <PlusIcon size={18} />
              Criar chamado
            </Button>
          </Link>
        </div>

        <div className="flex justify-between items-center w-full gap-4">
          {ticketCount.data?.count.map((count, index) => (
            <div className="flex flex-col justify-center items-center gap-2 w-2/6 h-32 rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{count}</h2>
              <h3 className="text-lg font-semibold text-slate-500">{statusCount[index]}</h3>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-black font-semibold">Últimos chamados</h2>
            <h3 className="text-slate-500 font-semibold text-xs">
              Total de chamados:{" "}
              <span className="text-black font-semibold">{`${ticketList.data?.total}`}</span>
            </h3>
          </div>

          <div className="flex justify-end items-center gap-2">
            <div className="flex w-fit max-w-sm items-center gap-2">
              <Input
                placeholder="Buscar chamado"
                className="w-[320px]"
                onChange={(e) => handleOnSubjectChange(e.target.value)}
                value={subjectParam || ""}
              />
              {subjectParam ? (
                <Button variant={"ghost"} size={"icon"} onClick={handleClearFilters}>
                  <X size={16} />
                </Button>
              ) : null}
              <Button
                variant={"outline"}
                size={"icon"}
                onClick={() => getTickets(skip, take, subjectParam, orderParam)}
              >
                <Search size={16} />
              </Button>
            </div>

            <Select onValueChange={handleOrderByChange} value={orderParam || ""}>
              <SelectTrigger className="w-[240px]">
                <SelectValue placeholder="Ordenar por:" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="CREATED_AT">Data de criação</SelectItem>
                  <SelectItem value="UPDATED_AT">Última atualização</SelectItem>
                  <SelectItem value="TICKET_STATUS">Status</SelectItem>
                  <SelectItem value="TICKET_TYPE">Tipo</SelectItem>
                  <SelectItem value="TICKET_PRIORITY">Prioridade</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Assunto</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Data de criação</TableHead>
                <TableHead>Última atualização</TableHead>
                <TableHead>Prioridade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tipo</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ticketList.data?.tickets.length ? (
                ticketList.data.tickets.map((ticket) => (
                  <TableRow
                    className="cursor-pointer"
                    onClick={() => navigate(`/chamados/detalhe/${ticket.id}`)}
                    key={ticket.id}
                  >
                    <TableCell>{`#${ticket.id}`}</TableCell>
                    <TableCell>{ticket.subject}</TableCell>
                    <TableCell>{ticket.productId}</TableCell>
                    <TableCell>{useTransformDate(ticket.created_at)}</TableCell>
                    <TableCell>{useTransformDate(ticket.updated_at)}</TableCell>
                    <TableCell>
                      <TicketPriorityBadge variant={ticket.priority}>
                        {ticketPriority.data?.[ticket.priority]}
                      </TicketPriorityBadge>
                    </TableCell>
                    <TableCell>
                      <TicketStatusBadge variant={ticket.status}>
                        {ticketStatus.data?.[ticket.status]}
                      </TicketStatusBadge>
                    </TableCell>
                    <TableCell>
                      <TicketTypeBadge variant={ticket.type}>
                        {ticketType.data?.[ticket.type]}
                      </TicketTypeBadge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                to={`/chamados?page=${currentPage === 1 ? 1 : currentPage - 1}`}
              />
            </PaginationItem>

            {paginationRange.range.map((page, index) => (
              <PaginationItem key={page + `${index}`}>
                {page === "..." ? (
                  page
                ) : (
                  <PaginationLink
                    to={`/chamados?page=${page}`}
                    isActive={currentPage === page}
                  >{`${page}`}</PaginationLink>
                )}
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                to={`/chamados?page=${
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

export default TicketListPage;
