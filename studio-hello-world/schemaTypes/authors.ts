import {UsersIcon} from '@sanity/icons'
import {defineField, defineType, EmailInput} from 'sanity'

export const authors = defineType({
  name: 'authors',
  title: 'Authors',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      options: {
        list: ['admin', 'user'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      lastName: 'lastName',
      email: 'email',
      role: 'role',
      media: 'image',
    },
    prepare(selection) {
      const {name, lastName, email, media, role} = selection
      return {title: `${name} ${lastName}`, subtitle: `${role} - ${email}`, media}
    },
  },
})
