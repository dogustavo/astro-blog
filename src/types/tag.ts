export interface ITagAttributes {
  tag: string
  createdAt: string
  updatedAt: string
}

export interface ITagResponse {
  data: ITag[]
  meta: Meta | {}
}

export interface ITag {
  id: number
  attributes: ITagAttributes
}

export interface Meta {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}
