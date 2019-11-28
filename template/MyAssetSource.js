import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'

// Sanity uses CSS modules for styling. We import a stylesheet and get an
// object where the keys matches the class names defined in the CSS file and
// the values are a unique, generated class name. This allows you to write CSS
// with only your components in mind without any conflicting class names.
// See https://github.com/css-modules/css-modules for more info.
import styles from './MyAssetSource.css'

function MyAssetSource (props) {
  const examples = [
    { title: 'Official documentation', href: 'https://www.sanity.io/docs/custom-asset-sources'},
    { title: 'Get started with this plugin', href: 'https://github.com/sanity-io/plugin-template-asset-source/blob/master/README.md'},
    { title: 'Webcam (tutorial)', href: 'https://github.com/sanity-io/sanity-recipes/tree/master/examples/studio-with-custom-asset-source'},
    { title: 'Unsplash (plugin)', href: 'https://github.com/sanity-io/sanity-plugin-asset-source-unsplash'},
    { title: 'Cloudinary (plugin)', href: 'https://github.com/sanity-io/sanity-plugin-asset-source-cloudinary'},
    { title: 'thispersondoesnotexist (plugin)', href: 'https://github.com/sanity-io/sanity-plugin-asset-source-thispersondoesnotexist'}
  ]

  const handleSelect = () => {
    props.onSelect([{
      kind: 'url',
      value: 'https://pbs.twimg.com/media/D5efx9aXkAE9z7P.jpg',
      assetDocumentProps: {
        originalFilename: 'bamse.jpg', // Use this filename when saving the image.
        source: {
          originalFilename: 'bamse.jpg', // Use this filename when saving the image.
          source: '', // The source this image is from
          sourceId: 'bamse-the-cat' // A string that uniquely identifies it within the source
        },
        description: 'Bamse the Cat',
        creditLine: 'By Victoria'
      }
    }]
    )
  }

  return (
    <Dialog title="My asset source" onClose={props.onClose} isOpen>
      <h2>Hello custom asset source!</h2>
      <p>Click this image to select it:</p>
      <div>
        <img className={styles.image} src="https://pbs.twimg.com/media/D5efx9aXkAE9z7P.jpg" onClick={handleSelect} />
      </div>
      <p>Replace this content with your custom asset source. For help and inspiration check out:</p>
      <ul>
        {examples.map(example => (
          <li key={example.title}>
            <a href={example.href}>{example.title}</a>
          </li>
        ))}
      </ul>
    </Dialog>
  )
}

export default MyAssetSource
