import React, { FormEvent, useEffect, useState } from "react";
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
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store";
import { Ticket } from "../@types/ticketTypes";
import { twMerge } from "tailwind-merge";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/useDebounce";
import { useToast } from "@/components/ui/use-toast";

interface TicketFormProps {
  id: string;
  ticket: Ticket;
}

const TicketForm = ({ id, ticket }: TicketFormProps) => {
  const [open, setOpen] = useState(false);

  const { toast } = useToast();

  const {
    ticketType,
    ticketPriority,
    ticketStatus,
    ticketSaver,
    productList,
    updateTicket,
    createTicket,
    getProductList,
  } = useStore((state) => ({
    ticket: state.ticket.data!,
    ticketType: state.ticketType,
    ticketPriority: state.ticketPriority,
    ticketStatus: state.ticketStatus,
    ticketSaver: state.ticketSaver,
    productList: state.productList,
    updateTicket: state.updateTicket,
    createTicket: state.createTicket,
    getProductList: state.getProductList,
  }));

  const form = useForm({
    values: ticket || {},
  });

  const handleOnSubmit = (data: Ticket) => {
    if (id) updateTicket(data);
    else createTicket(data);
  };

  const handleOnChangeProduct = (name: string) => {
    let skip = 0;
    let take = 10;
    getProductList(skip, take, name);
  };

  const handleDebounce = useDebounce(handleOnChangeProduct);

  useEffect(() => {
    if (ticketSaver.success) {
      toast({
        title: "Ticket salvo com sucesso!",
      });
    } else if (ticketSaver.error) {
      toast({
        title: "Algo deu errado tente novamente mais tarde!",
        variant: "destructive",
      });
    }
  }, [ticketSaver.success, ticketSaver.error]);

  return (
    <Form {...form}>
      <div className="flex justify-start gap-4 w-full">
        <div>
          <FormField
            control={form.control}
            name="productId"
            render={({ field }) => (
              <FormItem className="space-y-2 w-full">
                <FormLabel>Produto</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild className="w-1/3">
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[400px] justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value
                          ? productList.data?.products
                              ?.find((product) => product.id === field.value)
                              ?.name.substring(0, 40)
                          : "Selecione um produto"}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-0">
                    <Command>
                      <CommandInput
                        onValueChange={handleDebounce}
                        placeholder="Buscar produto..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>Nenhum produto encontrado.</CommandEmpty>
                        <CommandGroup>
                          {productList.data?.products?.map((product) => (
                            <CommandItem
                              value={String(product.name)}
                              key={product.id}
                              onSelect={() => {
                                form.setValue("productId", Number(product.id));
                                setOpen(false);
                              }}
                            >
                              {product.name}
                              <CheckIcon
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  product.id === field.value ? "opacity-100" : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />
        </div>

        <FormField
          name={"contact"}
          render={({ field }) => (
            <FormItem className="w-2/3">
              <FormLabel>Contato</FormLabel>
              <FormControl>
                <Input placeholder="Insira o contato" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name={"subject"}
          render={({ field }) => (
            <FormItem className="w-2/3">
              <FormLabel>Assunto</FormLabel>
              <FormControl>
                <Input placeholder="Insira o assunto" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="flex justify-start items-center w-full gap-4">
        <Controller
          name={"type"}
          control={form.control}
          render={({ field: { onChange, name, value } }) => {
            return (
              <FormItem className={twMerge("w-2/3", id && "w-1/3")}>
                <FormLabel>Tipo</FormLabel>
                <Select onValueChange={onChange} value={value?.toString()} name={name} required>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-40">
                    <SelectGroup>
                      {ticketType.success &&
                        Object.entries(ticketType.data!).map((type) => (
                          <SelectItem key={type[0]} value={String(type[0])}>
                            {type[1]}
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
          name={"priority"}
          control={form.control}
          render={({ field: { onChange, name, value } }) => {
            return (
              <FormItem className={twMerge("w-2/3", id && "w-1/3")}>
                <FormLabel>Prioridade</FormLabel>
                <Select onValueChange={onChange} value={value?.toString()} name={name} required>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione uma prioridade" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-40">
                    <SelectGroup>
                      {ticketPriority.success &&
                        Object.entries(ticketPriority.data!).map((priority) => (
                          <SelectItem key={priority[0]} value={String(priority[0])}>
                            {priority[1]}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormItem>
            );
          }}
        />
        {id ? (
          <Controller
            name={"status"}
            control={form.control}
            render={({ field: { onChange, name, value } }) => {
              return (
                <FormItem className="w-1/3">
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={onChange} value={value?.toString()} name={name} required>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma prioridade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="max-h-40">
                      <SelectGroup>
                        {ticketStatus.success &&
                          Object.entries(ticketStatus.data!).map((priority) => (
                            <SelectItem key={priority[0]} value={String(priority[0])}>
                              {priority[1]}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormItem>
              );
            }}
          />
        ) : null}
      </div>

      <FormField
        name={"description"}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Textarea placeholder="Insira o assunto" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <Button type="submit" onClick={() => handleOnSubmit(form.getValues())}>
        Salvar
      </Button>
    </Form>
  );
};

export default TicketForm;
