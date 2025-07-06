# Contribution Guide — React Base

Thank you for contributing to this project! Please follow these guidelines to ensure a healthy, organized, and productive collaboration flow.

---

## 📦 How to contribute

1. **Fork this repository** and create your branch from `main`:
   ```bash
   git checkout -b my-feature
   ```
2. **Make small, descriptive commits**.
3. **Open a Pull Request** (PR) detailing what was done.
4. Wait for review and feedback.

---

## 🧩 Component Standards

- **Location:**
  - Place new components in `src/components/ui/` or appropriate subfolders.
- **Naming:**
  - Use PascalCase for files and components (`MyComponent.tsx`).
- **Props:**
  - Always type props with TypeScript.
  - Prefer `forwardRef` for input or reusable button components.
- **Style:**
  - Use Tailwind utility classes and/or theme classes (`bg-card`, `text-primary`, etc).
  - Prefer composition over inheritance.
- **Accessibility:**
  - Use `aria-label`, roles, and keyboard navigation whenever possible.
- **Example:**
  - Include usage examples in `UIComponentsShowcase` if it's a visual component.

---

## 🎨 Themes

- **Add theme variables** in `src/themes.css`.
- **Use the variables** in components via utility classes or CSS custom properties.
- **Avoid hardcoding colors**. Always use theme variables.

---

## 📝 Commits

- Use clear, imperative messages:
  - `feat: add Card component`
  - `fix: fix bug in Dropdown`
  - `docs: update README`

---

## 🐛 Issues

- Describe the problem, steps to reproduce, and expected behavior.
- If possible, attach screenshots or code examples.

---

## 🚀 Pull Requests

- Clearly describe what was done and why.
- Link the issue (if any): `Closes #123`.
- Mark as draft if still working.
- Wait for review before merging.

---

## 💡 Best Practices

- Prefer small and reusable components.
- Always use the theme system.
- Test responsiveness and accessibility.
- Document props and examples when possible.

---

Thank you for helping make this React base even better! 🚀