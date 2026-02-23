import DocumentsPane from 'sanity-plugin-documents-pane'
import {DefaultDocumentNodeResolver} from 'sanity/structure'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case 'authors':
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({query: '*[_type == "post" && references($id)]', params: {id: '_id'}})
          .title('posts'),
      ])
    case 'tags':
      return S.document().views([
        S.view.form(),
        S.view
          .component(DocumentsPane)
          .options({query: '*[_type == "post" && references($id)]', params: {id: '_id'}})
          .title('posts'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
