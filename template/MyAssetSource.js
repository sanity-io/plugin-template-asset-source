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
    { title: 'Webcam (tutorial)', href: 'https://github.com/sanity-io/sanity-recipes/tree/master/examples/studio-with-custom-asset-source'},
    { title: 'Unsplash (plugin)', href: 'https://github.com/sanity-io/sanity-plugin-asset-source-unsplash'},
    { title: 'Cloudinary (plugin)', href: 'https://github.com/sanity-io/sanity-plugin-asset-source-cloudinary'},
    { title: 'thispersondoesnotexist (plugin)', href: 'https://github.com/sanity-io/sanity-plugin-asset-source-thispersondoesnotexist'}
  ]
  return (
    <Dialog title="My asset source" onClose={props.onClose} isOpen>
      <h2>Hello custom asset source!</h2>
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
