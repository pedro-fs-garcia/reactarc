<!-- Logo -->
<p align="center">
  <img src="public/reactarc-logo.svg" alt="ReactArc Logo" width="160" height="80" />
</p>

# ReactArc

A flexible, scalable React boilerplate ready to accelerate. Includes a theme system, basic reusable UI components, Material UI integration, responsiveness, accessibility, and Tailwind CSS integration.

---

## How to use

```bash
git clone https://github.com/pedro-fs-garcia/reactarc.git
cd reactarc
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## ✨ Main Features

- **Theme System**: 5 ready-to-use and easily customizable themes.
- **UI Components**: Inputs, Dropdown, Modal, Alert, Badge, ProgressBar, Tooltip, Skeleton, Tabs, Card, Buttons, and more.
- **Material UI Integration**: Seamlessly integrated Material UI components with custom theme support.
- **Accessibility**: Focus on contrast, keyboard navigation, and ARIA.
- **Responsiveness**: Mobile-first, adaptable components.
- **Animations**: Framer Motion integrated for smooth micro-interactions.
- **Ready to scale**: Organized folder structure, easy to maintain and expand.

---

## 🎨 Theme System

The boilerplate comes with 5 ready themes:

- **Light**: Minimalist and elegant
- **Dark**: Sophisticated and modern
- **Corporate**: Professional and sober
- **Nature**: Organic and natural
- **Sunset**: Vibrant and creative

### How to use a theme

Add the `data-theme` attribute to the `<html>` element:

```html
<html data-theme="dark">
```

Or change dynamically via JS:

```js
document.documentElement.setAttribute('data-theme', 'corporate');
```

### Color Palette
Each theme defines variables like:
- `--color-primary`, `--color-secondary`, `--color-accent`
- `--color-background`, `--color-card`, `--color-surface`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- `--color-success`, `--color-warning`, `--color-error`, `--color-info`
- `--shadow-xs`, `--shadow-md`, etc.

### Global Utilities
- `.bg-background`, `.bg-card`, `.bg-primary`, etc.
- `.text-primary`, `.text-secondary`, `.text-error`, etc.
- `.border-light`, `.border-focus`, `.border-error`, etc.
- `.input-base`, `.input-field`, `.focus-ring` for inputs
- `.button-primary` for main buttons

---

## 🧩 Available Components

All components are **accessible**, **responsive**, and use the theme system.

### Buttons

#### `BaseButton`
Base component for all project buttons. Supports variants, sizes, loading, icons, full width, and accessibility.

**Main props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `loading`: boolean (shows spinner)
- `leftIcon`/`rightIcon`: ReactNode (icons left/right)
- `fullWidth`: boolean (100% width)
- `rounded`: boolean (fully rounded border)

**Example:**
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
  Save
</BaseButton>
```

#### `CtaButton` and `WhatsappButton`
Action buttons with animation and WhatsApp integration, based on `BaseButton`.

---

### Inputs

#### `BasicInput`
Standard input field, supports label, icons, error, description, and sizes.

```tsx
<BasicInput
  label="Name"
  placeholder="Enter your name"
  leftIcon={<User size={16} />}
  error="Required field"
  size="md"
/>
```

#### `AutoCompleteInput`
Input with dynamic suggestions, icons, loading, and keyboard navigation.

```tsx
<AutoCompleteInput
  label="City"
  placeholder="Enter a city"
  suggestions={[
    { id: 1, label: 'São Paulo', icon: <MapPin size={16} /> },
    { id: 2, label: 'Rio de Janeiro', icon: <MapPin size={16} /> }
  ]}
  value={city}
  onSelect={setCity}
/>
```

#### `Dropdown`
Customizable select, supports icons and states.

```tsx
<Dropdown
  options={[
    { value: '1', label: 'Option 1', icon: <User size={16} /> },
    { value: '2', label: 'Option 2' }
  ]}
  value={value}
  onChange={setValue}
/>
```

#### `Checkbox`
Styled checkbox, with label, description, and animation.

```tsx
<Checkbox
  checked={checked}
  onChange={setChecked}
  label="I accept the terms"
/>
```

#### `Radio`
Radio button group with description.

```tsx
<Radio
  options={[
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' }
  ]}
  value={value}
  onChange={setValue}
  name="group"
  label="Choose an option"
/>
```

#### `Toggle`
Animated switch for on/off.

```tsx
<Toggle
  checked={active}
  onChange={setActive}
  label="Active?"
/>
```

---

### UI and Feedback

#### `Modal`
Reusable modal with animation, backdrop, and sizes.

```tsx
<Modal isOpen={open} onClose={() => setOpen(false)} title="Title">
  Modal content
</Modal>
```

#### `ProgressBar`
Animated progress bar, with color variants.

```tsx
<ProgressBar value={60} label="Progress" showPercentage variant="success" />
```

#### `Badge`
Highlight badge, with variants and removable option.

```tsx
<Badge variant="primary" removable onRemove={() => {}}>Text</Badge>
```

#### `Alert`
Feedback alert, with types (success, warning, error, info).

```tsx
<Alert type="success" title="Success!" closable>
  Operation completed successfully.
</Alert>
```

#### `Tooltip`
Tooltip with animation and positioning.

```tsx
<Tooltip content="Tip!">
  <button>Hover me</button>
</Tooltip>
```

#### `Skeleton`
Animated placeholder for loading.

```tsx
<Skeleton variant="text" width="100%" />
<Skeleton variant="circular" width={40} height={40} />
```

---

### Others

#### `Tabs`
Tab system with Radix UI.

```tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

#### `Card`
Card with header, content, and footer.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Actions</CardFooter>
</Card>
```

---

## 📦 How to Use

- All components accept `className` for customization.
- Accessibility props and theme integration.
- Centralized import via `src/components/ui/index.ts`.
- Material UI components automatically adapt to your custom themes.

---

## 💡 Tips

- Use the `ThemeExampleComponent` or `UIComponentsShowcase` to see practical examples of all themes and components.
- To create a new theme, just add a new CSS block with `html[data-theme="name"]` and define the variables.

---

**ReactArc** — Building Faster with Pre-built Components
