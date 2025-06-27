import { usePageQuery } from "../generated/graphql";

export default function Home() {
  const [{ data }] = usePageQuery({
    variables: {
      slug: "home",
    },
  });

  console.log(data);

  return <h1>Teste: {data?.page?.title}</h1>;
}
