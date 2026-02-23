import {BookIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BookIcon,
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'privacy', title: 'Privacy'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      placeholder: 'This is the title of the post.',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      description: 'This is the slug for the post. It is used to identify the post in the URL.',
      type: 'slug',
      options: {source: 'title'},
      group: 'content',
      validation: (Rule) => Rule.required(),
      hidden: ({document}) => !document?.title,
    }),
    defineField({
      name: 'description',
      placeholder: 'This is the description of the post.',
      type: 'text',
      group: 'content',
      validation: (Rule) => Rule.required().min(50),
    }),
    defineField({
      name: 'image',
      description: 'This is the image for the post.',
      type: 'image',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'date',
      placeholder: '2026-01-01',
      description: 'This is the published date of the post.',
      group: 'privacy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      description: 'This is the author of the post.',
      type: 'reference',
      to: [{type: 'authors'}],
      group: 'privacy',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      description: 'This is the tags for the post.',
      type: 'reference',
      to: [{type: 'tags'}],
      group: 'privacy',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      publishedAt: 'publishedAt',
      media: 'image',
    },
    prepare(selection) {
      const {title, author, publishedAt, media} = selection
      return {title, subtitle: `${author} - ${publishedAt}`, media}
    },
  },
})
