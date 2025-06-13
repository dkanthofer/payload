import type { CollectionConfig } from 'payload'

export const subPostsSlug = 'subPosts'
export const SubPostsCollection: CollectionConfig = {
  slug: subPostsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
    },
  ],
}
