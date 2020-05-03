# wall.css
Pure (s)css **block-grid** implementation with extra features. [DEMO](https://fabiocaccamo.com/projects/wall.css/demo/) :zap:

## Installation
`npm install @fabiocaccamo/wall.css`

## Features:
#### Framework-agnostic
`wall.css` is not based on `Bootstrap`, `Foundation` or any existing framework.
#### Highly customizable using class modifiers
All modifiers described below are available for the `.wall` class:

- `.wall--cols-{n}`

Set the number of columns to display, values are from `1` to `24`, default `1`.

- `.wall--ratio-{n-n}`

Set the aspect-ratio of the items, values are: `1-1`, `2-1`, `1-2`, `3-1`, `1-3`, `3-2`, `2-3`, `4-3`, `3-4`, `16-9`, default `1-1`.

- `.wall--rounded-{n}`

Set the border-radius of the items, values are: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `15`, `20`, `30`, default `0`.

- `.wall--rounded`

Set the border-radius of the items to `100%`, it can be used together with `.wall--ratio-1-1` to make circle items.

- `.wall--spacing-{n}`

Set the spacing between the items, values are: `0`, `1`, `2`, `3`, `4`, `5`, `10`, `15`, `20`, `25`, `30`, `40`, `50`, `60`, default `0`.

#### Responsive / Mobile-first
For each modifier described above, it is possible to set a different value for each breakpoint, just prefixing it with the breakpoint, for example:

```html
<div class="wall wall--cols-2 wall--sm-cols-3 wall--md-cols-4 wall--lg-cols-5 wall--xl-cols-6">
    <!-- ... -->
</div>
```

Supported breakpoints are: `xs` *(can be omitted, it's implicit)*, `sm`, `md`, `lg`, `xl`.

## Usage

### CSS
If you aren't using `sass`, just include `wall.css` in your html
```html
<link href="css/wall.css" rel="stylesheet" />
```

### HTML
```html
<div class="wall-container">
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
# set proportional width/height (fixed aspect ratio, eg. 1:1, 3:2, 4:3, ...)
@include aspect-ratio-container($width:1, $height:1); # default is 1:1 (square)

# fill 100% width and height of the parent "aspect-ratio-container"
@include aspect-ratio-content();
```
---

## License
Released under [MIT License](LICENSE.txt).
