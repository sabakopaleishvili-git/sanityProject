import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const tags = defineType({
  name: 'tags',
  title: 'Tags',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
