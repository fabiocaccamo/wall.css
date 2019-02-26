# wall.css
Pure (s)css and framework-agnostic block-grid implementation with extra features.

## Features
- grid columns count
- items fixed aspect ratio
- items border radius
- items spacing
- responsive and mobile first

## Installation
`npm install @fabiocaccamo/wall.css`

## Usage

#### HTML
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

#### CSS import
If you aren't using `sass`, just include the `wall.css` in your html
```html
<link href="css/wall.css" rel="stylesheet" />
```

#### SASS import
```scss
@import "wall";
```

---

## License
Released under [MIT License](LICENSE.txt).