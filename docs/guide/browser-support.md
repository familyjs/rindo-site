# Browser Support

Rindo builds Web Components that run natively or near-natively in all widely used desktop and mobile browsers.

<div class="bs-chart">
  <div class="bs-chart__group">
    <div class="bs-chart__cards">
      <div class="bs-chart__card">
        <span class="icon">✔</span>
        Chrome 60+
      </div>
      <div class="bs-chart__card">
        <span class="icon">✔</span>
        Safari 10.1+
      </div>
      <div class="bs-chart__card">
        <span class="icon">✔</span>
        Firefox 63+
      </div>
      <div class="bs-chart__card">
        <span class="icon">✔</span>
        Edge 79+
      </div>
    </div>
    <div class="bs-chart__group-label">
      Full native support
    </div>
  </div>
  <div class="bs-chart__group">
    <div class="bs-chart__cards">
      <div class="bs-chart__card">
        <span class="icon">✔</span>
        IE 11, Edge 16-18
      </div>
    </div>
    <div class="bs-chart__group-label">
      Support with bundled polyfills
    </div>
  </div>
</div>

Web Components are a set of standardized browser APIs centered around the Custom Elements v1 spec, a cross-browser way to define and create essentially new HTML tags, and is the successor to the now-defunct v0 spec.

Custom Elements are natively supported in Chrome, Edge, Firefox, and Safari (including iOS)!

For browsers without native support, a small polyfill helps developers use Custom Elements seamlessly and with little performance overhead.

Rindo uses a dynamic loader to load the custom elements polyfill only on browsers that need it. With this polyfill Rindo's browser support is Chrome (and all chrome based browsers), Safari, Firefox, Edge, and IE11.

|                                                                | Chrome 60+                             | Safari 10.1+                           | Firefox 63+                            | Edge 79+                               | Edge 16-18                             | IE 11                               |
| -------------------------------------------------------------- | :------------------------------------: | :------------------------------------: | :------------------------------------: | :------------------------------------: | :------------------------------------: | :---------------------------------: |
| [CSS Variables](https://caniuse.com/#feat=css-variables)       | <span class="icon">✅</span> | <span class="icon" name>✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">⭕</span> |
| [Custom Elements](https://caniuse.com/#feat=custom-elementsv1) | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">⭕</span>    | <span class="icon">⭕</span> |
| [Shadow Dom](https://caniuse.com/#feat=shadowdomv1)            | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">⭕</span>    | <span class="icon">⭕</span> |
| [es2017](https://caniuse.com/#feat=async-functions)            | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">⭕</span> |
| [ES Modules](https://caniuse.com/#feat=es6-module)             | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">✅</span> | <span class="icon">⭕</span> |

<div class="align-right">
  <span class="icon">⭕</span> <span class="caption">Rindo compiles with polyfills for features not supported natively</span>
</div>

<style>
.bs-chart,
.bs-chart__cards,
.bs-chart__card {
  display: flex;
}

.bs-chart {
  margin: 40px 0;
  justify-content: space-between;
}

.bs-chart__group + .bs-chart__group,
.bs-chart__card + .bs-chart__card {
  margin-left: 8px;
}

.bs-chart__group:first-child .bs-chart__card {
  background: #39B54A;
}

.bs-chart__group:last-child .bs-chart__card {
  background: #96D01A;
}

.bs-chart__card {
  width: 110px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  color: #fff;
  padding: 8px;
  font-size: 11px;
  font-weight: 600;
}

.bs-chart__card .icon {
  background: rgba(255, 255, 255, 0.15);
  padding: 8px;
  border-radius: 100px;
  margin: 6px 0 8px;
}

.bs-chart__card .icon svg {
  fill: #fff;
}

.bs-chart__group-label {
  display: block;
  text-align: center;
  font-size: 11px;
  color: #646464;
  margin-top: 6px;
}

@media screen and (max-width: 872px) {
  .bs-chart__card {
    width: 100%;
  }

  .bs-chart,
  .bs-chart__group,
  .bs-chart__cards {
    flex-direction: column;
  }

  .bs-chart__group + .bs-chart__group {
    margin-left: 0;
    margin-top: 20px;
  }

  .bs-chart__card + .bs-chart__card {
    margin-left: 0;
    margin-top: 8px;
  }
}

.align-right {
    text-align: right
}
</style>
