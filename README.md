### Goal:

Create a standalone component that lists the provided data and allows the client to view in either a 'list' view, or a 'grid' view. You are allowed the creativity of designing the component yourself.

---

#### Requirements:

- The component must accept an input of Product[]
- The component must output the clicked item
- The component must be visually appealing
- The component must be responsive
- The component must utilize NgRx
- The component must utilize Flexbox grid

#### Rules:

- Must utilize the files and dependencies already included.
- No additional libraries are to be installed.

---

### Further Information

#### Models

```typescript
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
```

#### Endpoints:

```typescript
http://localhost:4200/api/products
/* Returns an array of type Product */
```

#### Expected time:

2-3 hours.

---
