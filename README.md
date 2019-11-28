# plugin-template-asset-source

A template for making a custom asset source plugin.

## Main take-aways

- Asset sources implement the part named `part:@sanity/form-builder/input/image/asset-source`
- The file that implements the asset source part needs to export an object containing properties such as a name, title, icon and React component to render. See `template/index.js`


## Usage

`sanity init plugin https://github.com/sanity-io/plugin-template-asset-source/archive/master.zip`

or

~`sanity init plugin` and select the custom asset source plugin option.~ COMING SOON!

### Defining asset sources globally

You can override every image field to only support a specified set of sources by leveraging the parts system. More specifically, by implementing the part `part:@sanity/form-builder/input/image/asset-sources` and referencing the implementation in your Studio's `sanity.json` file located on the root level of your folder.

To enable the asset source you create with this template after running `sanity init` and selecting the custom asset source option, add this code snippet to the parts array in your `sanity.json`:

```
{
  "implements": "part:@sanity/form-builder/input/image/asset-sources",
  "path": "./parts/assetSources.js"
}
```

This code snippet tells the studio to go to a file called `assetSources.js` that's located in a folder called `parts` inside your studio’s project folder. You should create this file (and folder if you don't have done so already). This file should export an array of asset sources. To enable your own plugin as a source, it would have to look like this:

```
import MyAssetSource from '../plugins/my-asset-source'

export default [MyAssetSource]
```

The built in default asset source has the part name `part:@sanity/form-builder/input/image/asset-source-default`. Import the part, and add that to the array if you want to also keep the default asset source (the select button becomes a dropdown).

```
import MyAssetSource from '../plugins/my-asset-source'
import SanitySource from 'part:@sanity/form-builder/input/image/asset-source-default'

export default [MyAssetSource, SanitySource]
```

### Using sources on a single type

You can customize sources for single image type field in the schema via the `options.sources` property.

```
import MyAssetSource from '../plugins/my-asset-source'
export default {
  name: 'example',
  title: 'Example',
  type: 'document',
  fields: [
    ...,
    {
      name: 'bannerImage',
      title: 'Banner image',
      type: 'image',
      options: {sources: [MyAssetSource]}
    }
  ]
```

Now your custom asset source will only be available on the image type field in this schema.

## License

MIT-licensed. See LICENSE.
