import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) => {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

  return S.list()
    .id('root')
    .title('Content')
    .items([
      S.divider().title('Posts Section'),

      S.listItem()
        .title('New Posts (last 7 days)')
        .schemaType('post')
        .child(
          S.documentList()
            .title('New Posts')
            .schemaType('post')
            .filter('publishedAt >= $sevenDaysAgo')
            .params({sevenDaysAgo})
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
        ),

      S.listItem()
        .title('Old Posts')
        .schemaType('post')
        .child(
          S.documentList()
            .title('Old Posts')
            .schemaType('post')
            .filter(' publishedAt < $sevenDaysAgo')
            .params({sevenDaysAgo})
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}]),
        ),

      S.divider().title('Authors & Tags Section'),
      S.documentTypeListItem('authors').title('Authors'),
      S.documentTypeListItem('tags').title('Tags'),
    ])
}
