---
id: Display
section: utility-classes
---

import './Display.css'

## Examples
### Inline
```hbs
{{#> display display--type="inline"}}
  .pf-v6-u-display-inline
{{/display}}
```

### Block
```hbs
{{#> display display--type="block"}}
  .pf-v6-u-display-block
{{/display}}
```

### Inline block
```hbs
{{#> display display--type="inline-block"}}
  .pf-v6-u-display-inline-block
{{/display}}
```

### Flex
```hbs
{{#> display display--type="flex"}}
  .pf-v6-u-display-flex
{{/display}}
```

### Inline flex
```hbs
{{#> display display--type="inline-flex"}}
  .pf-v6-u-display-inline-flex
{{/display}}
```

### Grid
```hbs
{{#> display display--type="grid"}}
  .pf-v6-u-display-grid
{{/display}}
```

### Inline grid
```hbs
{{#> display display--type="inline-grid"}}
  .pf-v6-u-display-inline-grid
{{/display}}
```

### Table, table row, table cell
```hbs
{{#> display display--type="table"}}
  {{#> display display--type="table-row"}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
  {{/display}}
  {{#> display display--type="table-row"}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
    {{#> display display--type="table-cell"}}
      table-cell
    {{/display}}
  {{/display}}
{{/display}}
```

### None
```hbs
{{#> display display--type="none-on-sm"}}
  Hidden on sm breakpoint
{{/display}}
```

## Documentation
### Overview
[Breakpoints](/tokens/all-patternfly-tokens) are optional. Breakpoint options include: base (no breakpoint value), `-on-sm`, `-on-md`, `-on-lg`, and `-on-xl`. Example: `.pf-v6-u-display-inline-block-on-lg`

### Usage
| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-v6-u-display-inline{-on-[breakpoint]}` | `*` |  Sets display: inline |
| `.pf-v6-u-display-block{-on-[breakpoint]}` | `*` |  Sets display: block |
| `.pf-v6-u-display-inline-block{-on-[breakpoint]}` | `*` |  Sets display: inline-block |
| `.pf-v6-u-display-flex{-on-[breakpoint]}` | `*` |  Sets display: flex |
| `.pf-v6-u-display-inline-flex{-on-[breakpoint]}` | `*` |  Sets display: inline-flex |
| `.pf-v6-u-display-grid{-on-[breakpoint]}` | `*` |  Sets display: grid |
| `.pf-v6-u-display-inline-grid{-on-[breakpoint]}` | `*` |  Sets display: inline-grid |
| `.pf-v6-u-display-table{-on-[breakpoint]}` | `*` |  Sets display: table |
| `.pf-v6-u-display-table-row{-on-[breakpoint]}` | `*` |  Sets display: table-row |
| `.pf-v6-u-display-table-cell{-on-[breakpoint]}` | `*` |  Sets display: table-cell |
| `.pf-v6-u-display-none{-on-[breakpoint]}` | `*` |  Sets display: none |
