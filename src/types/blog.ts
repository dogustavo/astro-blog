import type { ITag } from './tag'

export interface Attributes {
  post: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  summary: string
  title: string
  createdBy: string
  tags: {
    data: ITag[]
  }
}

export interface IPostData {
  id: number
  attributes: Attributes
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Meta {
  pagination: Pagination
}

export interface IPosts {
  data: IPostData[]
  meta: Meta
}

export interface IPostItem {
  data: IPostData
  meta: {}
}
