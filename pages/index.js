import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import MainMenu from "components/MainMenu/MainMenu";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItem } from "utils/mapMainMenuItem";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
    </>
  );
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

        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
  });
  return {
    props: {
      mainMenuItems: mapMainMenuItem(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
    },
  };
};
