# wall.css
Pure (s)css **block-grid** implementation with extra features. 🧱

## Features

- **CSS only** - no js at all.
- **Framework agnostic** - it can be used with any existing framework.
- **Responsive / Mobile-first** - all modifiers can be customized for each different breakpoint.
- **Highly customizable using class modifiers**

## Installation

### NPM
`npm install @fabiocaccamo/wall.css`

### CDN
`https://cdn.jsdelivr.net/npm/@fabiocaccamo/wall.css@latest/dist/css/wall.css`

## Usage

### HTML
```html
<div class="wall-container wall-container--horizontal wall-container--lg-vertical">
    <div class="wall wall--cols-5 wall--ratio-3-2 wall--rounded-5 wall--spacing-5">
        <div class="wall-col">
            <div class="wall-item">
                <a class="wall-item-content" href="#">
                    <img src="https://via.placeholder.com/500x500" />
                </a>
            </div>
        </div>
        <div class="wall-col">
            <!-- ... -->
        </div>
        <div class="wall-col">
            <!-- ... -->
        </div>
        <!-- ... -->
    </div>
</div>
```

### CSS

#### Breakpoints

- `xs` *(can be omitted, it's implicit)*
- `sm` > `576px`
- `md` > `768px`
- `lg` > `992px`
- `xl` > `1200px`

#### Classes & Modifiers

- `.wall-container` `.wall-container--{breakpoint}-horizontal`

Set the wall direction to horizontal, if the number of columns exceeds the values set, horizontal scroll will be used.

- `.wall-container` `.wall-container``.wall-container--{breakpoint}-vertical`

Set the wall direction to vertical (default behavior).

- `.wall` `.wall--{breakpoint}-cols-{n}`

Set the number of columns to display, `{n}` supported values are from `1` to `24`, default `1`.

- `.wall` `.wall--{breakpoint}-ratio-{n-n}`

Set the aspect-ratio of the items, `{n}` supported values are: `1-1`, `2-1`, `1-2`, `3-1`, `1-3`, `3-2`, `2-3`, `4-3`, `3-4`, `16-9`, default `1-1`.

- `.wall` `.wall--{breakpoint}-rounded-{n}`

Set the border-radius of the items, `{n}` supported values are: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `15`, `20`, `30`, default `0`.

- `.wall` `.wall--{breakpoint}-rounded`

Set the border-radius of the items to `100%`, it can be used together with `.wall--ratio-1-1` to make circle items.

- `.wall` `.wall--{breakpoint}-spacing-{n}`

Set the spacing between the items, `{n}` supported values are: `0`, `1`, `2`, `3`, `4`, `5`, `10`, `15`, `20`, `25`, `30`, `40`, `50`, `60`, default `0`.

### SASS

#### Import
```scss
@import "wall";
```

#### Variables
```scss
$wall-columns: 24 !default;
$wall-ratio: ((1, 1), (2, 1), (1, 2), (3, 1), (1, 3), (3, 2), (2, 3), (4, 3), (3, 4), (16, 9)) !default;
$wall-rounded: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30 !default;
$wall-spacing: 0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 60 !default;
$wall-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
) !default;
```

#### Mixins
```scss
/* set proportional width/height (fixed aspect ratio, eg. 1:1, 3:2, 4:3, ...) */
@include aspect-ratio-container($width:1, $height:1);

/* fill 100% width and height of the parent "aspect-ratio-container" */
@include aspect-ratio-content();
```

---

## License
Released under [MIT License](LICENSE.txt).
