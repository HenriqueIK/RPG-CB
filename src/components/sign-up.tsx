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
import { useState } from "react"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const [loading, setLoading] = useState(false)
    
      const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
    
      setLoading(true)
    
      // simulando um login no sign up so para testar o botao, e dura 2 segundos
      setTimeout(() => {
          setLoading(false)
        }, 2000)
    }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold text-[#c3bbc9]">Crie sua conta</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Insira as informações abaixo
          </p>
        </div>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="name">Nome de Usuário</FieldLabel>
          <Input id="name" type="text" placeholder="Joseph Nobody" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="email@exemplo.com" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="password">Senha</FieldLabel>
          <Input id="password" type="password" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
          <FieldDescription>
            A senha precisa ter pelo menos 8 caracteres.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel className="text-[#c3bbc9]" htmlFor="confirm-password">Confirme a Senha</FieldLabel>
          <Input id="confirm-password" type="password" required className="placeholder:text-[#7a7a8c] text-[#c3bbc9]"/>
          <FieldDescription>Confirme a senha</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" disabled={loading}>
            {loading ? "Carregando..." : "Criar Conta"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
