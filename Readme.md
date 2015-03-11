# Using React at CodePen

Currently, [CodePen](http://codepen.io) does not support React out of the box. Use the shim JS file from this repo to enable React and Babel ES6/7 and JSX transformations to your pens.

## Setup

When creating your new pen, open up the JS settings and add this external dependency:

```
https://cdn.rawgit.com/bradleyboy/codepen-react/master/dist/codepen-react-0.1.0.js
```

That's it!

## Tips and Troubleshooting

1. Open *Pen Settings* and disable *Auto Update Preview* when working with your Pen's JS. The transformations are intensive operations, so it's better to do them manually with *Run*.

2. Be sure **Tracuer** is not enabled in your pen, as it conflicts with the Babel transformation.

## Changelog

**0.1.0** - Initial release with React 0.13.0 and Babel 4.4.7.
