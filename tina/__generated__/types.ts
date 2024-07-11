//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  post: Post;
  postConnection: PostConnection;
  erthygl: Erthygl;
  erthyglConnection: ErthyglConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};


export type QueryErthyglArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryErthyglConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ErthyglFilter>;
};

export type DocumentFilter = {
  post?: InputMaybe<PostFilter>;
  erthygl?: InputMaybe<ErthyglFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Post | Erthygl | Folder;

export type Post = Node & Document & {
  __typename?: 'Post';
  title: Scalars['String']['output'];
  description: Scalars['String']['output'];
  date: Scalars['String']['output'];
  author: Scalars['String']['output'];
  body?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  captions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  alttext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  author?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
  tags?: InputMaybe<StringFilter>;
  categories?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringFilter>;
  captions?: InputMaybe<StringFilter>;
  alttext?: InputMaybe<StringFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type Erthygl = Node & Document & {
  __typename?: 'Erthygl';
  title: Scalars['String']['output'];
  description: Scalars['String']['output'];
  date: Scalars['String']['output'];
  author?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  captions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  alttext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type ErthyglFilter = {
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  date?: InputMaybe<DatetimeFilter>;
  author?: InputMaybe<StringFilter>;
  body?: InputMaybe<RichTextFilter>;
  tags?: InputMaybe<StringFilter>;
  categories?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringFilter>;
  captions?: InputMaybe<StringFilter>;
  alttext?: InputMaybe<StringFilter>;
};

export type ErthyglConnectionEdges = {
  __typename?: 'ErthyglConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Erthygl>;
};

export type ErthyglConnection = Connection & {
  __typename?: 'ErthyglConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<ErthyglConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePost: Post;
  createPost: Post;
  updateErthygl: Erthygl;
  createErthygl: Erthygl;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationUpdateErthyglArgs = {
  relativePath: Scalars['String']['input'];
  params: ErthyglMutation;
};


export type MutationCreateErthyglArgs = {
  relativePath: Scalars['String']['input'];
  params: ErthyglMutation;
};

export type DocumentUpdateMutation = {
  post?: InputMaybe<PostMutation>;
  erthygl?: InputMaybe<ErthyglMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  post?: InputMaybe<PostMutation>;
  erthygl?: InputMaybe<ErthyglMutation>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  captions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alttext?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ErthyglMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  captions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alttext?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostPartsFragment = { __typename: 'Post', title: string, description: string, date: string, author: string, body?: any | null, tags?: Array<string | null> | null, categories?: Array<string | null> | null, images?: Array<string | null> | null, captions?: Array<string | null> | null, alttext?: Array<string | null> | null };

export type ErthyglPartsFragment = { __typename: 'Erthygl', title: string, description: string, date: string, author?: string | null, body?: any | null, tags?: Array<string | null> | null, categories?: Array<string | null> | null, images?: Array<string | null> | null, captions?: Array<string | null> | null, alttext?: Array<string | null> | null };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename: 'Post', id: string, title: string, description: string, date: string, author: string, body?: any | null, tags?: Array<string | null> | null, categories?: Array<string | null> | null, images?: Array<string | null> | null, captions?: Array<string | null> | null, alttext?: Array<string | null> | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename: 'Post', id: string, title: string, description: string, date: string, author: string, body?: any | null, tags?: Array<string | null> | null, categories?: Array<string | null> | null, images?: Array<string | null> | null, captions?: Array<string | null> | null, alttext?: Array<string | null> | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type ErthyglQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type ErthyglQuery = { __typename?: 'Query', erthygl: { __typename: 'Erthygl', id: string, title: string, description: string, date: string, author?: string | null, body?: any | null, tags?: Array<string | null> | null, categories?: Array<string | null> | null, images?: Array<string | null> | null, captions?: Array<string | null> | null, alttext?: Array<string | null> | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type ErthyglConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ErthyglFilter>;
}>;


export type ErthyglConnectionQuery = { __typename?: 'Query', erthyglConnection: { __typename?: 'ErthyglConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'ErthyglConnectionEdges', cursor: string, node?: { __typename: 'Erthygl', id: string, title: string, description: string, date: string, author?: string | null, body?: any | null, tags?: Array<string | null> | null, categories?: Array<string | null> | null, images?: Array<string | null> | null, captions?: Array<string | null> | null, alttext?: Array<string | null> | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  description
  date
  author
  body
  tags
  categories
  images
  captions
  alttext
}
    `;
export const ErthyglPartsFragmentDoc = gql`
    fragment ErthyglParts on Erthygl {
  __typename
  title
  description
  date
  author
  body
  tags
  categories
  images
  captions
  alttext
}
    `;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const ErthyglDocument = gql`
    query erthygl($relativePath: String!) {
  erthygl(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ErthyglParts
  }
}
    ${ErthyglPartsFragmentDoc}`;
export const ErthyglConnectionDocument = gql`
    query erthyglConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ErthyglFilter) {
  erthyglConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ErthyglParts
      }
    }
  }
}
    ${ErthyglPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      },
    erthygl(variables: ErthyglQueryVariables, options?: C): Promise<{data: ErthyglQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ErthyglQueryVariables, query: string}> {
        return requester<{data: ErthyglQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ErthyglQueryVariables, query: string}, ErthyglQueryVariables>(ErthyglDocument, variables, options);
      },
    erthyglConnection(variables?: ErthyglConnectionQueryVariables, options?: C): Promise<{data: ErthyglConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ErthyglConnectionQueryVariables, query: string}> {
        return requester<{data: ErthyglConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ErthyglConnectionQueryVariables, query: string}, ErthyglConnectionQueryVariables>(ErthyglConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
  options?: { branch?: string }
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: { branch?: string },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    })

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
  options?: {
    branch?: string
  }
) => {
  const requester = generateRequester(client, options)
  return getSdk(requester)
}

  