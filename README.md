# astro-toast

**astro-toast** is a simple library for displaying toasts on your website.

## Example:

```html
---
import Toast from "astro-toast";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content="{Astro.generator}" />
    <title>Astro</title>
  </head>
  <body>
    <Toast type="success" position="top-start">Message</Toast>
    <Toast type="error" position="top-center">Message</Toast>
    <Toast type="info" position="top-end">Message</Toast>
    <Toast type="success" position="middle-start">Message</Toast>
    <Toast position="middle-center">Message</Toast>
    <Toast type="info" position="middle-end">Message</Toast>
    <Toast type="success" position="bottom-start">Message</Toast>
    <Toast type="error" position="bottom-center">Message</Toast>
    <Toast type="info" position="bottom-end">Message</Toast>
  </body>
</html>
```

## Props:

```ts
type?: "error" | "warning" | "success" | "info";

position?:
| "top-start"
| "top-center"
| "top-end"
| "middle-start"
| "middle-center"
| "middle-end"
| "bottom-start"
| "bottom-center"
| "bottom-end";
```
