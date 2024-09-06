// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core'
import { wrapper, block, repeating } from '@keystatic/core/content-components'
const isDev = import.meta.env.DEV
export default config({
  storage: { kind: isDev ? 'local' : 'cloud' },
  collections: {
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        draft: fields.checkbox({ label: 'draft', defaultValue: true }),
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/services',
              publicPath: '@assets/services/',
            },
          },
          components: {
            GridLayout: repeating({
              label: 'Grid Layout',
              children: ['GridItem'],
              schema: {},
            }),
            GridItem: wrapper({
              label: 'Testimonial',
              schema: {},
            }),
            Steps: block({
              label: 'Steps',
              schema: {
                items: fields.array(
                  fields.object({
                    title: fields.text({ label: 'Title' }),
                    text: fields.text({ label: 'Text', multiline: true }),
                  }),
                  {
                    label: 'Steps Items',
                    itemLabel: (props) => props.fields.title.value,
                  },
                ),
              },
            }),
            Slider: block({
              label: 'Slider',
              schema: {
                items: fields.array(
                  fields.object({
                    image: fields.image({
                      label: 'Image',
                      directory: 'src/assets/services',
                      publicPath: '/src/assets/services/',
                    }),
                  }),
                  {
                    label: 'Slider Items',
                    itemLabel: (props) => props.fields.image.value.filename,
                  },
                ),
              },
            }),
          },
        }),
        image: fields.image({
          label: 'Image',
          directory: 'src/assets/services',
          publicPath: '@assets/services/',
        }),
      },
    }),
  },
})
