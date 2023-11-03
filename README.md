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
    <Toast variant="error" where="bottom-end">Message</Toast>
  </body>
</html>
```

## Props:

```ts
variant?: "error" | "warning" | "success" | "info";

where?:
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
