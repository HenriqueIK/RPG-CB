import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import{
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
}from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-[#c3bbc9]">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira as informações abaixo
          </p>
        </div>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="name">Username</FieldLabel>
          <Input id="name" type="text" placeholder="John Doe" required />
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" required />
          <FieldDescription>
            A senha precisa ter pelo menos 8 caracteres.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="confirm-password">Confirm Password</FieldLabel>
          <Input id="confirm-password" type="password" required />
          <FieldDescription>Confirme a senha</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">Criar conta</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
