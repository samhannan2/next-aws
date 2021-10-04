import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <p>
      <p href="/">Post id: {id} </p>
    </p>
  );
};

export default Post;
