import { GraphQLClient } from "graphql-request";
import { Author } from "../app/interfaces/author";
import { Post } from "../app/interfaces/post";

type Props = {
    query: string;
    variables: {limit: number};
    includeDrafts?: any;
    excludeInvalid?: any;
}

export async function request({ query, variables, includeDrafts, excludeInvalid }: Props) {
  const headers = {
    authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
  };
  if (includeDrafts) {
    headers['X-Include-Drafts'] = 'true';
  }
  if (excludeInvalid) {
    headers['X-Exclude-Invalid'] = 'true';
  }
  const client = new GraphQLClient('https://graphql.datocms.com', { headers });
  return client.request(query, variables);
}

export async function getAllPosts(){
  const query = `query getAllPosts {
    allPosts {
      id
      title
      description
      author {
        name
      }
    }
  }
  `;
  const data = await request({
    query: query,
    variables: {limit: 10},
  });
  return data;
}

export async function getHero(){
  const query = `query getHero {
    hero {
      id
      title
      content
      url
    }
  }
  `;
  const data = await request({
    query: query,
    variables: {limit: 10},
  });
  return data;
}

export async function getAbout(){
  const query = `query getAbout {
    about {
      title
      content
    }
  }
  `;
  const data = await request({
    query: query,
    variables: {limit: 10},
  });
  return data;
}