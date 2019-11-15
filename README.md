# bumped-html

> A [bumped](https://github.com/bumped/bumped) plugin. Adds version to html files in meta tags on each bump.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta name="version" content="3.2.0" />
  </head>
  <body>...</body>
</html>
```

If `version` meta tag exists in your html file `bumped-html` will replace version with actual one. If not - `version` meta tag will be added in html markup.

## Install

```bash
npm install -g bumped-html
```

## Configuration

Declare a plugin step in your `.bumpedrc` like:

```json
plugins:
  postrelease:
    'Setting version to html files':
      plugin: bumped-html
      files:
        - src/index.html
```

Check out [bumped](https://github.com/bumped/bumped) repository for more detailed information how to setup/use bumped.
**Note**: This plugin should be called on `postrelease`!

## Backlog

1. ~~Check if meta tag exist (if not - add one)~~;
2. ~~Validate filepath~~;
3. ~~Error handling~~;
4. Add tests.
