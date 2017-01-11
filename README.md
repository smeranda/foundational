A standardized setup for a front-end workflow.

## Options for CSS

CSS should follow the [BEM Methodolgy](https://en.bem.info/methodology/quick-start/#quick-start).

### CSS Linting
This ensures specific rules (defined in `.stylelintrc`) are followed. This provides consistency and readability. BEM analysis is done at this stage as well. Each set of BEM rules should be defined prior to declaration:

```
/** @define cta-button */
.cta-button {

}
```

Additional documentation on BEM linting procedures can be found at: https://github.com/postcss/postcss-bem-linter.

Additional documentation on Stylelint funtions can be found at: https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md.

To stylelint all CSS files: `gulp css:lint`.

### Create CSS files
This process compiles all SCSS files and compresses into defined CSS outputs. Currently, the following [PostCSS](http://postcss.org/) functions are applied.

1. Autoprefixer: create non-standard, browser-specific declarations.
2. MQ: Combine all decentralized media query declarations into single media query declartions. Save the browser some heavy lifting.
3. CSSNano: Compress to smallest size possible

To compile CSS from SCSS files: `gulp css`.

## JavaScript
Concactenate and compress all the JS files located in `js`: `gulp js`.

## Favicons
Create initial favicon (1600px X 1600px) and place in `/favicon`. Create multiple versions, including HTML for `<head>`.

To create: `gulp favicons`.

## Styleguide

See `styleguide.md` for detailed documentation. The documentation is available on the homepage of the styleguide. This is available upon build at: http://localhost:3001/.

To build styleguide and start server: `gulp styleguide`.

