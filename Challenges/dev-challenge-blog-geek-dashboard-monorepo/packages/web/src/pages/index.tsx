import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import Layout from "../components/Layout";

import Content from "../components/Content";
import MainPosts from "../components/MainPosts";
import Others from "../components/Others";
import { GetStaticProps } from "next";
import { api } from "../services/api";

export default function Home({ latestPosts, allHighlightsPosts, allPosts }) {
  return (
    <Layout>
      {/* Banner */}
      <Flex flexDir="column" gridArea="banner" color="white">
        <Heading fontSize="lg" fontWeight="normal">
          Bem vindo ao <br /> Mundo Geek!
        </Heading>
        <Text
          fontSize="sm"
          w={{ sm: "100%", lg: "50%" }}
          color="gray.200"
          pt="1rem"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ipsa
          sequi quasi explicabo fugiat at aliquam. Accusamus reiciendis sit
          sapiente atque illum laborum doloremque ea. Ipsa explicabo a atque
          error.
        </Text>
      </Flex>
      {/* Banner */}

      <Box
        as="div"
        w="100%"
        gridArea="content"
        color="white"
        mt={{ sm: "6rem", lg: "5rem" }}
      >
        <MainPosts title="teste" />

        <Flex flexDir="row">
          <Box as="section" maxH="600px" overflow="auto">
            <Box>
              {allPosts.map((post) => (
                <Content key={post.id} title={post.title} text={post.content} />
              ))}
            </Box>
          </Box>

          {allHighlightsPosts.map((post) => {
            <Others title={post.title} />;
          })}
        </Flex>
      </Box>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data }: any = await api.get("/posts");

  const latestPosts = data.posts.slice(0, 3);
  const allHighlightsPosts = data.posts.slice(3, 6);
  const allPosts = data.posts.slice(6, data.posts.lenght);

  return {
    props: {
      latestPosts,
      allHighlightsPosts,
      allPosts,
    },
  };
};
