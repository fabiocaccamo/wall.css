# wall.css
Pure (s)css responsive **block-grid** with extra features. 🧱

## Features

- **CSS only** - no js at all.
- **Framework agnostic** - it can be used with any existing framework.
- **Responsive / Mobile-first** - all modifiers can be customized for each different breakpoint.
- **Highly customizable using class modifiers**

## Installation

### NPM
`npm install @fabiocaccamo/wall.css`

### CDN
`https://cdn.jsdelivr.net/npm/@fabiocaccamo/wall.css@latest/dist/css/wall.min.css`

## Usage

### HTML
```html
<div class="wall wall--cols-5 wall--ratio-3-2 wall--rounded-5 wall--spacing-5">
    <div class="wall-col">
        <a href="#">
            <img src="https://via.placeholder.com/500x500" />
        </a>
    </div>
    <div class="wall-col">
        <!-- ... -->
    </div>
    <div class="wall-col">
        <!-- ... -->
    </div>
    <!-- ... -->
</div>
```

### CSS

#### Breakpoints

- `xs` *(can be omitted, it's implicit)*
- `sm` > `576px`
- `md` > `768px`
- `lg` > `992px`
- `xl` > `1200px`
- `xxl` > `1400px`

#### Classes & Modifiers

##### Columns

`.wall` `.wall--{breakpoint}-cols-{n}`

Set the number of columns to display, `{n}` supported values are from `1` to `12`, default `12`.

##### Spacing

`.wall` `.wall--{breakpoint}-spacing-{n}`

`.wall` `.wall--{breakpoint}-spacing-x-{n}`

`.wall` `.wall--{breakpoint}-spacing-y-{n}`

Set the spacing between the items, `{n}` supported values are: `0, 1, 2, 3, 4, 5, 8, 10, 12, 15, 16, 20, 24, 25, 30, 32, 40, 50, 60, 70, 80, 90, 100`, default `0`.

##### Ratio

`.wall` `.wall--{breakpoint}-ratio-{n-n}`

Set the aspect-ratio of the items, `{n-n}` supported values are: `1/1, 2/1, 1/2, 3/1, 1/3, 3/2, 2/3, 4/3, 3/4, 16/9`, default `unset`.

##### Rounded

`.wall` `.wall--{breakpoint}-rounded-{n}`

Set the border-radius of the items, `{n}` supported values are: `0, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 24, 30`, default `0`.

`.wall` `.wall--{breakpoint}-rounded`

Set the border-radius of the items to `100%`, it can be used together with `.wall--ratio-1-1` to make circle items.

#### CSS Variables

The modifiers above operate on the following css variables, that is possible to override:

`--columns: 12;`
`--spacing: 10px;`
`--spacing-x: unset;`
`--spacing-y: unset;`
`--rounded: 0px;`
`--ratio: 1 / 1;`

### SASS

#### Import
```scss
@import "wall";
```

#### SASS Variables
```scss
$wall-columns: 12 !default;
$wall-spacing: 0, 1, 2, 3, 4, 5, 8, 10, 12, 15, 16, 20, 24, 25, 30, 32 !default;
$wall-ratio: ((1, 1), (2, 1), (3, 1), (3, 2), (4, 3), (16, 9)) !default;
$wall-rounded: 0, 2, 3, 4, 5, 8, 10, 12, 15, 16, 20, 24, 25, 30, 32 !default;
$wall-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px
) !default;
```

---

## License
Released under [MIT License](LICENSE).
