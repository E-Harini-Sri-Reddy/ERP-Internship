# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React Component Types and JSX Notes

## Component Variants

### 1. `rafc`: React Arrow Function Component

```js
export const App = () => {
  return <div>App</div>;
};
```

- Stateless functional component using an arrow function.
- Named export.

---

### 2. `rfc`: React Function Component

```js
import React from "react";

export const App = function () {
  return <div>App</div>;
};
```

- Uses the `function` keyword.
- Named export.

---

### 3. `rafce`: React Arrow Function Component Export

```js
const App = () => {
  return <div>App</div>;
};

export default App;
```

- Arrow function.
- Default export.

---

## JSX and React Rules Recap

- JSX must return **only one parent element**.
- Wrap elements using `<div>` or `<>...</>` (React Fragment).
- `className` replaces `class` in JSX.
- JSX allows **JavaScript expressions** inside `{}`.

---

## JSX Code Breakdown

### Variables

```js
const name = "Harini";
let x = 19;
let y = 113;
const names = ["Harini", "Pranav", "Varun", "Bru", "Ginny", "Zoro"];
const loggedIn = true;
```

### Inline Styles

```js
const styles = {
  color: "red",
  fontSize: "55px",
};
```

### JSX Elements

```jsx
<>
  <div className='text-5xl'>
    <span style={styles}>App</span>
  </div>

  <p style={{ color: 'pink', fontSize: '30px' }}>
    Hello {name}!
  </p>

  <p>
    The sum of {x} and {y} is {x + y}
  </p>
```

---

## Rendering Lists

### Without `key` (not recommended)

```jsx
<ul>
  {names.map((n) => (
    <li>{n}</li>
  ))}
</ul>
```

### With `key` (recommended)

```jsx
<ul>
  {names.map((name, index) => (
    <li key={index}>{name}</li>
  ))}
</ul>
```

---

## Conditional Rendering

```jsx
{
  loggedIn ? <h1>Logged in!</h1> : <h1>Sign up!</h1>;
}
```

---

## Key React Concepts

| Concept               | Example                                        |
| --------------------- | ---------------------------------------------- |
| JSX                   | `<p>Hello {name}</p>`                          |
| Variables in JSX      | `{x}`, `{y}`, `{x + y}`                        |
| Conditional rendering | `{loggedIn ? ... : ...}`                       |
| List rendering        | `names.map(...)`                               |
| Key prop in list      | `<li key={index}>...</li>`                     |
| Inline styles         | `style={{ color: 'red' }}` or `style={styles}` |
| Fragments             | `<>...</>`                                     |
| Default Export        | `export default App`                           |
| className             | JSX uses `className` instead of `class`        |

---

## 🧾 Summary

- JSX must return **one parent element**.
- Use **Fragments** (`<>...</>`) to avoid unnecessary `<div>`.
- Use `{}` to embed **JS values/expressions**.
- Always add `key` when rendering lists.
- Inline styles are passed using **JS objects**.
- Use **ternary** (`? :`) or `&&` for conditional rendering.
- JSX uses `className`, not `class`.

---
