# wall.css
Pure (s)css **block-grid** implementation with extra features.

## Installation
`npm install @fabiocaccamo/wall.css`

## Usage

### HTML
```html
<div class="wall-container">
    <div class="wall wall--cols-5 wall--ratio-3-2 wall--round-5 wall--spacing-5">
        <div class="wall-col">
            <div class="wall-item">
                <!-- .wall-item-content class will make element 100% width/height of .wall-item -->
                <a class="wall-item-content" href="#">
                    <span class="wall-item-content"></span>
                </a>
            </div>
        </div>
        <div class="wall-col">
            <!-- ... -->
        </div>
        <div class="wall-col">
            <!-- ... -->
        </div>
        <div class="wall-col">
            <!-- ... -->
        </div>
    </div>
</div>
```

### CSS

#### Import
If you aren't using `sass`, just include `wall.css` in your html
```html
<link href="css/wall.css" rel="stylesheet" />
```

#### Responsive
`wall.css` is responsive and **mobile-first**. 

For each modifier described below, it is possible to set a different value for each breakpoint, just prefixing it with the breakpoint, for example:

```html
<div class="wall wall--cols-2 wall--sm-cols-3 wall--md-cols-4 wall--lg-cols-5 wall--xl-cols-6">
    <!-- ... -->
</div>
```

Supported breakpoints are: `xs` *(can be omitted, it's implicit)*, `sm`, `md`, `lg`, `xl`.

#### Modifiers
All modifiers described below are available for the `.wall` class:

##### `.wall--cols-{n}`
Set the number of columns to display, values are from `1` to `24`

##### `.wall--ratio-{n-n}`
Set the aspect-ratio of the items, values are: `1-1`, `2-1`, `1-2`, `3-2`, `2-3`, `4-3`, `3-4`, `16-9`

##### `.wall--round-{n}`
Set the border-radius of the items, values are: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `15`, `20`, `30`

##### `.wall--round`
Set the border-radius of the items to `100%`, it can be used together with `.wall--ratio-1-1` to make circle items.

##### `.wall--spacing-{n}`
Set the spacing between the items, values are: `0`, `1`, `2`, `3`, `4`, `5`, `10`, `15`, `20`, `25`, `30`, `40`, `50`, `60` 

### SASS

#### Import
```scss
@import "wall";
```

#### Variables
```scss
$wall-columns: 24 !default;
$wall-ratio: ((1, 1), (2, 1), (1, 2), (3, 2), (2, 3), (4, 3), (3, 4), (16, 9)) !default;
$wall-round: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 30 !default;
$wall-spacing: 0, 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 40, 50, 60 !default;
$wall-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
) !default;
```
        
---

## License
Released under [MIT License](LICENSE.txt).
