import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { GET_POST } from "../../services/graphql/modules/post/queries";
import { CREATE_USER } from "../../services/graphql/modules/user/mutation";

interface IPost {
  title: string;
  content: string;
  published: boolean;
}

const Home: React.FC = () => {
  const { loading, error, data } = useQuery<{ post: IPost }>(GET_POST, {
    variables: {
      id: "03f99802-860e-4dc3-8092-d7e7e8b62b33",
    },
  });
  const [
    createUser,
    { loading: userLoading, error: userError, data: userData },
  ] = useMutation(CREATE_USER);

  const handleCreateUser = () => {
    createUser({
      variables: {
        name: "Luis Gabriel Marchió Batista",
        email: "luisgabrielmarchio75@gmail.com",
      },
    });
  };

  if (loading || userLoading || error || userError) return null;

  return (
    <div>
      <h1>{data?.post.title}</h1>
      <h1>{userData?.createUser.name}</h1>

      <button onClick={handleCreateUser}>Criar usuário</button>
    </div>
  );
};

export default Home;
