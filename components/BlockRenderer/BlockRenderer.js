import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { theme } from "theme";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "core/paragraph": {
        console.log(block, "block");

        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes?.style?.color?.text
            }
            textAlign={block.attributes.align}
          ></Paragraph>
        );
      }
      case "core/heading":
        return (
          <Heading
            key={block.id}
            textAlign={block.attributes.textAlign}
            content={block.attributes.content}
            level={block.attributes.level}
          >
            heading
          </Heading>
        );
      case "core/cover": {
        console.log(block, "block");
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );
      }
      default:
        return null;
    }
  });
};
