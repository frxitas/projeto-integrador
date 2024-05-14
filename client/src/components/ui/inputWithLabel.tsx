import { Input, InputProps } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({ label, ...props }: InputProps & { label: string }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={props.name}>{label}</Label>
      <Input id={props.name} {...props} />
    </div>
  );
}
