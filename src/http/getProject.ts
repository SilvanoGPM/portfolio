import { GetProjectDocument } from '$graphql/generated';
import { request } from '$services/dato';

export async function getProject(slug: string) {
  return request(GetProjectDocument, { slug });
}
