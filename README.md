# bumped-html

> Adds version to html files in meta tags on each bump.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta name="version" content="3.2.0" />
  </head>
  <body>...</body>
</html>
```

**Note**: Meta tag should exist in your html file. So on each bump plugin will replace version with actual one.

## Install

```bash
npm install bumped-html -g
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

**Note**: This plugin should be called on `postrelease`!

## Backlog

1. Check if meta tag exist (if not - add one);
2. Validate filepath;
3. Error handling.