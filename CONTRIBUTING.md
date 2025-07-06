# Guia de Contribuição — Base React

Obrigado por contribuir com este projeto! Siga estas orientações para garantir um fluxo de colaboração saudável, organizado e produtivo.

---

## 📦 Como contribuir

1. **Fork este repositório** e crie sua branch a partir de `main`:
   ```bash
   git checkout -b minha-feature
   ```
2. **Faça commits pequenos e descritivos**.
3. **Abra um Pull Request** (PR) detalhando o que foi feito.
4. Aguarde revisão e feedback.

---

## 🧩 Padrão para Componentes

- **Localização:**
  - Coloque novos componentes em `src/components/ui/` ou subpastas adequadas.
- **Nomeação:**
  - Use PascalCase para arquivos e componentes (`MeuComponente.tsx`).
- **Props:**
  - Sempre tipar as props com TypeScript.
  - Prefira `forwardRef` para componentes de input ou botões reutilizáveis.
- **Estilo:**
  - Use classes utilitárias do Tailwind e/ou classes de tema (`bg-card`, `text-primary`, etc).
  - Prefira composição a herança.
- **Acessibilidade:**
  - Use `aria-label`, roles e navegação por teclado sempre que possível.
- **Exemplo:**
  - Inclua exemplos de uso no `UIComponentsShowcase` se for um componente visual.

---

## 🎨 Temas

- **Adicione variáveis de tema** em `src/themes.css`.
- **Use as variáveis** nos componentes via classes utilitárias ou CSS custom properties.
- **Evite hardcode de cores**. Sempre use as variáveis do tema.

---

## 📝 Commits

- Use mensagens claras e no imperativo:
  - `feat: adiciona componente Card`
  - `fix: corrige bug no Dropdown`
  - `docs: atualiza README`

---

## 🐛 Issues

- Descreva o problema, passos para reproduzir e comportamento esperado.
- Se possível, anexe prints ou exemplos de código.

---

## 🚀 Pull Requests

- Descreva claramente o que foi feito e por quê.
- Relacione a issue (se houver): `Closes #123`.
- Marque como draft se ainda estiver trabalhando.
- Aguarde revisão antes de mergear.

---

## 💡 Boas práticas

- Prefira componentes pequenos e reutilizáveis.
- Sempre use o sistema de temas.
- Teste responsividade e acessibilidade.
- Documente props e exemplos quando possível.

---

Obrigado por ajudar a tornar esta base React cada vez melhor! 🚀 