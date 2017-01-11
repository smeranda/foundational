# Local Styleguide

All things related to supporting the styleguide are mentioned here.

## Helpful Resources

* [Knyle Style Sheets Documentation](https://github.com/kss-node/kss/blob/spec/SPEC.md) *(Not perfect, but best I've found)*
* [SC5 Styleguide](http://styleguide.sc5.io/) *(Demo available)*
* [SC5 Styleguide Repo](https://github.com/SC5/sc5-styleguide) *(Further documentation on SC5 build options)*
* [Original KSS Documentation](http://warpspire.com/kss/syntax/) *(Lacks detail)*
* [Advanced techniques for the SC5 styleguide generator](https://www.alleyinteractive.com/news/advanced-techniques-for-the-sc5-styleguide-generator/)

## Markup

One should markup all styles in the `SCSS` files directly. This keeps ties the intentionality of the CSS rules with their actual usage.

The KSS documentation is sparse around the interwebs. Furthermore, the styleguide has changed overtime. Here are some markup rules of consistency.

### A Major Section

Each major section should be split off intos its own corresponding `SCSS` file. For example, this markup is found in `buttons.scss`.
 
    // Section Name
    //
    // Short description of this section. What makes it unique. When would one 
    // use it?
    //
    // Markup: <element class="{$modifiers}">YoLo!</element>
    //
    // Styleguide 1.0
    //

