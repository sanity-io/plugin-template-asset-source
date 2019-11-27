# plugin-template-asset-source

A template for making a custom asset source plugin.

## Main take-aways

- Asset sources implement the part named `part:@sanity/form-builder/input/image/asset-source`
- The file that implements the tool part needs to export an object containing properties such as a name, title, icon and React component to render. See `template/index.js`.

## Usage

`sanity init plugin https://github.com/sanity-io/plugin-template-asset-source/archive/master.zip`

## License

MIT-licensed. See LICENSE.
