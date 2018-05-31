<p align="center">
  <img src="logo.png"/>
  <br><br>
  <b>A smooth 3D tilt React component wrapped around vanilla-tilt.js</b>
  <br><br>
</p>

&nbsp;

#### install

```
npm install react-vanilla-tilt
```

&nbsp;

#### usage

```jsx
import React from 'react'
import Title from 'react-vanilla-tilt'

<Tilt>
  <div>
    You can put whatever you want inside this
  </div>
</Tilt>
```

&nbsp;

#### options

```js
{
    reverse:           false,  // reverse the tilt direction
    max:               35,     // max tilt rotation (degrees)
    perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
    speed:             300,    // Speed of the enter/exit transition
    transition:        true,   // Set a transition on enter/exit.
    axis:              null,   // What axis should be disabled. Can be X or Y.
    reset:             true    // If the tilt effect has to be reset on exit.
    easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    glare:             false   // if it should have a "glare" effect
    "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                               // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
}
```

```jsx
import React from 'react'
import Title from 'react-vanilla-tilt'

<Tilt options={{ scale: 2, max: 25 }}>
  <div>
    You can put whatever you want inside this
  </div>
</Tilt>
```

&nbsp;

#### kudos to @micku7zu and @gijsroge

This is a React wrapper around [vanilla-tilt](https://github.com/micku7zu/vanilla-tilt.js) by [@micku7zu](https://github.com/micku7zu)

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
