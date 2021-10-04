import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <p>
      <a href="/">Post: {id} </a>
    </p>
  );
};

export default Post;
