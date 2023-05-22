import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  //   1. 전달된 slug에 해당하는 데이터 읽어오기
  //   2. 데이터를 md뷰어에 표기

  const post = await getPostData(slug);
  return (
    <>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </>
  );
}
