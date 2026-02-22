import {defineField, defineType} from 'sanity'

export const tags = defineType({
  name: 'tags',
  title: 'Tags',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
