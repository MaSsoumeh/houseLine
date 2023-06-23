import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils";

export default function Home(props) {
  console.log(props);
  return <BlockRenderer blocks={props.blocks} />;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query GetHome {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks
          }
        }
      }
    `,
  });
  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};
