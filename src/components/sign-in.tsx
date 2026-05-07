import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-amber-50">Faça login com sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Digite seu email abaixo
          </p>
        </div>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="email@example.com" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel className="text-[#c3bbc9]" htmlFor="password">Senha</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu a Senha?
            </a>
          </div>
          <Input id="password" type="password" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <Button type="submit">Entrar</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
