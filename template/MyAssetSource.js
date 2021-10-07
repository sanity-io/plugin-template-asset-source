import React from "react"
import { Dialog, Text, Heading, Box, Stack } from "@sanity/ui"
import styled from "styled-components"

const Img = styled.img`
  max-width: 400px;
`

function MyAssetSource(props) {
  const examples = [
    {
      title: "Official documentation",
      href: "https://www.sanity.io/docs/custom-asset-sources",
    },
    {
      title: "Get started with this plugin",
      href: "https://github.com/sanity-io/plugin-template-asset-source/blob/master/README.md",
    },
    {
      title: "Webcam (tutorial)",
      href: "https://github.com/sanity-io/sanity-recipes/tree/master/examples/studio-with-custom-asset-source",
    },
    {
      title: "Unsplash (plugin)",
      href: "https://github.com/sanity-io/sanity-plugin-asset-source-unsplash",
    },
    {
      title: "Cloudinary (plugin)",
      href: "https://github.com/sanity-io/sanity-plugin-asset-source-cloudinary",
    },
    {
      title: "thispersondoesnotexist (plugin)",
      href: "https://github.com/sanity-io/sanity-plugin-asset-source-thispersondoesnotexist",
    },
  ]

  const handleSelect = () => {
    props.onSelect([
      {
        kind: "url",
        value: "https://i.imgur.com/hT1E3ZL.jpg",
        assetDocumentProps: {
          originalFilename: "bamse.jpg", // Use this filename when saving the image.
          source: {
            source: "imgur", // The source this image is from
            id: "hT1E3ZL", // A string that uniquely identifies it within the source
            url: "https://imgur.com/hT1E3ZL", // Where to find more info about the asset
          },
          description: "Bamse the Cat",
          creditLine: "Bamse by Victoria",
        },
      },
    ])
  }

  return (
    <Dialog
      id="my-asset-source"
      header="My asset source"
      onClose={props.onClose}
      open
      width={2}
    >
      <Stack padding={4} space={4}>
        <Heading as="h2">Hello custom asset source!</Heading>
        <Text as="p">Click this image to select it:</Text>
        <Box paddingY={3}>
          <Img src="https://i.imgur.com/hT1E3ZL.jpg" onClick={handleSelect} />
        </Box>
        <Text as="p">
          Replace this content with your custom asset source. For help and
          inspiration check out:
        </Text>
        <ul>
          {examples.map((example) => (
            <li key={example.title}>
              <Text as="a" href={example.href}>
                {example.title}
              </Text>
            </li>
          ))}
        </ul>
      </Stack>
    </Dialog>
  )
}

export default MyAssetSource
