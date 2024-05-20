import React, { useEffect } from "react";
import DefaultLayout from "@/layout/DefaultLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import TicketForm from "../components/TicketForm";
import { useStore } from "@/store";
import { useParams } from "react-router-dom";
import { useTransformDate } from "@/hooks/useTransformDate";

const TicketDetailPage = () => {
  const { id } = useParams();

  const {
    ticket,
    getTicketById,
    getTicketStatus,
    getTicketPriority,
    getTicketTypes,
    getProductList,
  } = useStore((state) => ({
    ticket: state.ticket,
    getTicketById: state.getTicketById,
    getTicketStatus: state.getTicketStatus,
    getTicketPriority: state.getTicketPriority,
    getTicketTypes: state.getTicketTypes,
    getProductList: state.getProductList,
  }));

  useEffect(() => {
    let skip = 0;
    let take = 10;
    getProductList(skip, take);

    getTicketTypes();
    getTicketPriority();

    if (id) {
      getTicketById(Number(id));
      getTicketStatus();
    }
  }, []);

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-4 w-full">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/chamados">{"Lista de chamados"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {ticket.data?.id ? `#${ticket.data?.id} - ${ticket.data?.subject}` : "Novo Chamado"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex justify-between items-end w-full">
          <h2 className="text-2xl font-semibold">
            {ticket.data?.id ? (
              <span className="flex gap-2">
                Chamado:
                <span className="text-slate-500">
                  #{ticket.data?.id} - {ticket.data?.subject}
                </span>
              </span>
            ) : (
              "Chamado - Novo chamado"
            )}
          </h2>

          {ticket.data?.id ? (
            <div className="flex justify-start items-center gap-4">
              <span className="text-lg font-semibold">
                Criado em:{" "}
                <span className="font-normal">{useTransformDate(ticket.data.created_at)}</span>
              </span>
              <span className="text-lg font-semibold">
                Última atualização:{" "}
                <span className="font-normal">{useTransformDate(ticket.data.updated_at)}</span>
              </span>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col p-4 gap-4 rounded-lg shadow w-full">
          <TicketForm id={id!} ticket={ticket.data!} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default TicketDetailPage;
