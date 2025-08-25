import type { CollectionConfig } from 'payload'

export const naviSlug = 'navi'

export const NavigationCollection: CollectionConfig = {
  slug: naviSlug,
  fields: [
    {
      name: 'Post',
      type: 'relationship',
      relationTo: 'posts',
    },
  ],
}
