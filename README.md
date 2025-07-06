# 🚀 Base React Moderna

Uma base React robusta, escalável e pronta para acelerar o desenvolvimento de projetos modernos. Inclui sistema de temas, biblioteca de componentes UI reutilizáveis, responsividade, acessibilidade e integração com Tailwind CSS.

---

## ✨ Principais Recursos

- **Sistema de Temas**: 5 temas prontos e de fácil customização.
- **Componentes UI**: Inputs, Dropdown, Modal, Alert, Badge, ProgressBar, Tooltip, Skeleton, Tabs, Card, Botões e mais.
- **Acessibilidade**: Foco em contraste, navegação por teclado e ARIA.
- **Responsividade**: Mobile-first, componentes adaptáveis.
- **Animações**: Framer Motion integrado para microinterações suaves.
- **Pronto para escalar**: Estrutura de pastas organizada, fácil de manter e expandir.

---

## 🎨 Sistema de Temas

A base já vem com 5 temas prontos:

- **Light**: Minimalista e elegante
- **Dark**: Sofisticado e moderno
- **Corporate**: Profissional e sóbrio
- **Nature**: Orgânico e natural
- **Sunset**: Vibrante e criativo

### Como usar um tema

Adicione o atributo `data-theme` ao elemento `<html>`:

```html
<html data-theme="dark">
```

Ou altere dinamicamente via JS:

```js
document.documentElement.setAttribute('data-theme', 'corporate');
```

### Paleta de Cores
Cada tema define variáveis como:
- `--color-primary`, `--color-secondary`, `--color-accent`
- `--color-background`, `--color-card`, `--color-surface`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- `--color-success`, `--color-warning`, `--color-error`, `--color-info`
- `--shadow-xs`, `--shadow-md`, etc.

### Utilitários Globais
- `.bg-background`, `.bg-card`, `.bg-primary`, etc.
- `.text-primary`, `.text-secondary`, `.text-error`, etc.
- `.border-light`, `.border-focus`, `.border-error`, etc.
- `.input-base`, `.input-field`, `.focus-ring` para inputs
- `.button-primary` para botões principais

---

## 🧩 Componentes Disponíveis

Todos os componentes são **acessíveis**, **responsivos** e utilizam o sistema de temas.

### Botões

#### `BaseButton`
Componente base para todos os botões do projeto. Suporta variantes, tamanhos, loading, ícones, largura total e acessibilidade.

**Props principais:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (padrão: 'primary')
- `size`: 'sm' | 'md' | 'lg' (padrão: 'md')
- `loading`: boolean (exibe spinner)
- `leftIcon`/`rightIcon`: ReactNode (ícones à esquerda/direita)
- `fullWidth`: boolean (ocupa 100% da largura)
- `rounded`: boolean (borda arredondada total)

**Exemplo:**
```tsx
import { BaseButton } from '@/components/ui/buttons/BaseButton';

<BaseButton
  variant="primary"
  size="md"
  leftIcon={<User size={16} />}
  rightIcon={<ChevronRight size={16} />}
  loading={false}
  fullWidth
>
  Salvar
</BaseButton>
```

#### `CtaButton` e `WhatsappButton`
Botões de ação com animação e integração com WhatsApp, baseados no `BaseButton`.

---

### Inputs

#### `BasicInput`
Campo de input padrão, com suporte a label, ícones, erro, descrição e tamanhos.

```tsx
<BasicInput
  label="Nome"
  placeholder="Digite seu nome"
  leftIcon={<User size={16} />}
  error="Campo obrigatório"
  size="md"
/>
```

#### `AutoCompleteInput`
Input com sugestões dinâmicas, ícones, loading e navegação por teclado.

```tsx
<AutoCompleteInput
  label="Cidade"
  placeholder="Digite uma cidade"
  suggestions={[
    { id: 1, label: 'São Paulo', icon: <MapPin size={16} /> },
    { id: 2, label: 'Rio de Janeiro', icon: <MapPin size={16} /> }
  ]}
  value={cidade}
  onSelect={setCidade}
/>
```

#### `Dropdown`
Select customizável, com suporte a ícones e estados.

```tsx
<Dropdown
  options={[
    { value: '1', label: 'Opção 1', icon: <User size={16} /> },
    { value: '2', label: 'Opção 2' }
  ]}
  value={valor}
  onChange={setValor}
/>
```

#### `Checkbox`
Checkbox estilizado, com label, descrição e animação.

```tsx
<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Aceito os termos"
/>
```

#### `Radio`
Grupo de radio buttons com descrição.

```tsx
<Radio
  options={[
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' }
  ]}
  value={valor}
  onChange={setValor}
  name="grupo"
  label="Escolha uma opção"
/>
```

#### `Toggle`
Switch animado para on/off.

```tsx
<Toggle
  checked={ativo}
  onChange={setAtivo}
  label="Ativo?"
/>
```

---

### UI e Feedback

#### `Modal`
Modal reutilizável com animação, backdrop e tamanhos.

```tsx
<Modal isOpen={open} onClose={() => setOpen(false)} title="Título">
  Conteúdo do modal
</Modal>
```

#### `ProgressBar`
Barra de progresso animada, com variantes de cor.

```tsx
<ProgressBar value={60} label="Progresso" showPercentage variant="success" />
```

#### `Badge`
Selo de destaque, com variantes e opção removível.

```tsx
<Badge variant="primary" removable onRemove={() => {}}>Texto</Badge>
```

#### `Alert`
Alerta de feedback, com tipos (success, warning, error, info).

```tsx
<Alert type="success" title="Sucesso!" closable>
  Operação realizada com sucesso.
</Alert>
```

#### `Tooltip`
Tooltip com animação e posicionamento.

```tsx
<Tooltip content="Dica!">
  <button>Hover me</button>
</Tooltip>
```

#### `Skeleton`
Placeholder animado para loading.

```tsx
<Skeleton variant="text" width="100%" />
<Skeleton variant="circular" width={40} height={40} />
```

---

### Outros

#### `Tabs`
Sistema de abas com Radix UI.

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Aba 1</TabsTrigger>
    <TabsTrigger value="tab2">Aba 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo 1</TabsContent>
  <TabsContent value="tab2">Conteúdo 2</TabsContent>
</Tabs>
```

#### `Card`
Card com header, content e footer.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
  <CardFooter>Ações</CardFooter>
</Card>
```

---

## 📦 Como Usar

- Todos os componentes aceitam `className` para customização.
- Props de acessibilidade e integração com temas.
- Importação centralizada via `src/components/ui/index.ts`.

---

## 💡 Dicas

- Use o componente `ThemeExampleComponent` ou `UIComponentsShowcase` para ver exemplos práticos de todos os temas e componentes.
- Para criar um novo tema, basta adicionar um novo bloco CSS com `html[data-theme="nome"]` e definir as variáveis.

---

**Base React** — Pronto para acelerar o desenvolvimento de qualquer projeto moderno! 🚀
