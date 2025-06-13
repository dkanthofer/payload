import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { subPostsSlug } from '../SubPosts/index.js'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      type: 'group',
      name: 'subPostGroup',
      fields: [
        {
          name: 'subPosts',
          type: 'join',
          collection: subPostsSlug,
          on: 'post',
          orderable: true,
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
}
