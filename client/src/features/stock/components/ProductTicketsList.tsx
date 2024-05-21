import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useStore } from "@/store";
import { Separator } from "@/components/ui/separator";
import { TicketStatusBadge } from "@/components/ui/ticketStatusBadge";
import { TicketPriorityBadge } from "@/components/ui/ticketPriorityBadge";
import { TicketTypeBadge } from "@/components/ui/ticketTypeBadge";
import { Link } from "react-router-dom";

interface ProductTicketsListProps {
  productId: string;
}

const ProductTicketsList = ({ productId }: ProductTicketsListProps) => {
  const [searchValue, setSearchValue] = useState("");

  const {
    productTicket,
    ticketStatus,
    ticketType,
    ticketPriority,
    getProductTicket,
    getTicketStatus,
    getTicketType,
    getTicketPriority,
  } = useStore((state) => ({
    productTicket: state.productTicket,
    ticketStatus: state.ticketStatus,
    ticketType: state.ticketType,
    ticketPriority: state.ticketPriority,
    getProductTicket: state.getProductTicket,
    getTicketStatus: state.getTicketStatus,
    getTicketType: state.getTicketTypes,
    getTicketPriority: state.getTicketPriority,
  }));

  useEffect(() => {
    getProductTicket(Number(productId));
    getTicketStatus();
    getTicketType();
    getTicketPriority();
  }, []);

  const handleOnClearFilterClick = () => {
    setSearchValue("");
    getProductTicket(Number(productId), "");
  };

  return (
    <div className="flex flex-col justify-start items-start w-full h-screen gap-4">
      <h3 className="font-semibold">Chamados</h3>

      <div className="flex w-full items-center space-x-2">
        <Input
          className="w-full"
          placeholder="Buscar chamado"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => getProductTicket(Number(productId), searchValue)}
        >
          <Search size={"16"} />
        </Button>
        {searchValue ? (
          <Button variant={"outline"} size={"icon"} onClick={handleOnClearFilterClick}>
            <X size={"16"} />
          </Button>
        ) : null}
      </div>

      <Separator />

      <div className="flex flex-col w-full pr-2 justify-start items-start gap-2 overflow-y-auto">
        {productTicket.data?.map((ticket) => (
          <Link key={ticket.id} to={`/chamados/detalhe/${ticket.id}`} className="w-full">
            <div className="flex flex-col gap-2 w-full justify-between rounded-lg border border-slate-200 p-2 h-24">
              <div className="flex flex-col gap-1 w-full">
                <span className="flex gap-2 text-sm text-slate-400">
                  {`#${ticket.id}`}
                  <span className="text-sm font-semibold text-slate-600">{ticket.subject}</span>
                </span>
                <Separator />
                <span className="text-xs font-semibold text-slate-500">
                  {ticket.description.substring(0, 100)}
                </span>
              </div>
              <div className="flex gap-1">
                <TicketStatusBadge variant={ticket.status}>
                  {ticketStatus.data?.[ticket.status]}
                </TicketStatusBadge>
                <TicketTypeBadge variant={ticket.type}>
                  {ticketType.data?.[ticket.type]}
                </TicketTypeBadge>
                <TicketPriorityBadge variant={ticket.priority}>
                  {ticketPriority.data?.[ticket.priority]}
                </TicketPriorityBadge>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductTicketsList;
