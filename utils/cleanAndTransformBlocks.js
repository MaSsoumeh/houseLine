import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON));
  return assignId(blocks);
};

const assignId = (blocks) => {
  const transformedBlocks = [...blocks];
  transformedBlocks.forEach((block) => {
    block.id = uuid();
    if (block.innerBlocks?.length) {
      assignId(block.innerBlocks);
    }
  });
  return transformedBlocks;
};
