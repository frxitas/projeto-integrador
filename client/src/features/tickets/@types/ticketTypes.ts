export type TicketType = 1 | 2;
export type TicketStatus = 1 | 2 | 3 | 4 | 5;
export type TicketPriority = 1 | 2 | 3;

export type Ticket = {
  id: number;
  productId: number;
  contact: string;
  subject: string;
  description: string;
  type: TicketType;
  status: TicketStatus;
  priority: TicketPriority;
  created_at: number;
  updated_at: number;
};

export type TicketResponse = {
  TICKET_ID: number;
  PRODUCT_ID: number;
  TICKET_CONTACT: string;
  TICKET_SUBJECT: string;
  TICKET_DESCRIPTION: string;
  TICKET_TYPE: TicketType;
  TICKET_STATUS: TicketStatus;
  TICKET_PRIORITY: TicketPriority;
  CREATED_AT: number;
  UPDATED_AT: number;
};

export enum TicketStatusToCount {
  Novo = 1,
  EmAndamento = 3,
  Resolvido = 4
}