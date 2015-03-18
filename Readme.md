# Using React at CodePen

Currently, [CodePen](http://codepen.io) does not support [React](http://facebook.github.io/react/) out of the box. Use the shim JS file from this repo to enable React 0.13 with Babel ES6/7 and JSX transformations to your pens.

## Setup

When creating your new pen, open up the JS settings and add this external dependency:

```
https://cdn.rawgit.com/bradleyboy/codepen-react/master/dist/codepen-react-0.1.1.js
```

That's it!

## Demo

See [this pen](http://codepen.io/bradleyboy/pen/OPBpGw) for a simple demo. For a more complex example, see [ChatPen](http://codepen.io/bradleyboy/pen/zxLaoP).

## Tips and Troubleshooting

1. Open **Pen Settings** and disable **Auto Update Preview** when working with your Pen's JS, particularly as your pen grows in size. The transformations are intensive operations, so it's better to do them manually with **Run**.

2. Be sure **Traceur** is not enabled in your pen, as it conflicts with the Babel transformation.

## Changelog

**0.1.1** - Updated with React 0.13.1 and Babel 4.7.16.

**0.1.0** - Initial release with React 0.13.0 and Babel 4.7.7.
