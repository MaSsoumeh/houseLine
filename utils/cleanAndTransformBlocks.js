import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));
  assignId(blocks);
  return blocks;
};

const assignId = (blocks) => {
  blocks.forEach((block) => {
    block.id = uuid();
    if (block.innerBlocks?.length) {
      assignId(block.innerBlocks);
    }
  });
};
