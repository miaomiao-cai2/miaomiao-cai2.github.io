import { Code } from "@nextui-org/code";

import { PaperFull } from "./paper_full";

import { paperSelectedData } from "@/data/paper_selected";

export const PapersFull = () => {
  let paperDoms;

  paperDoms = paperSelectedData.map((data) => (
    <PaperFull key={data.title} {...data} />
  ));

  return (
    <div className="flex flex-col items-center  my-5">
      <div className="grid gap-4">{paperDoms}</div>
      <br />
      <Code className="uppercase" color="primary">
        Stay Hungry, Stay Foolish
      </Code>
      {/* <Snippet symbol="" variant="bordered">Stay Hungry, Stay Foolish</Snippet> */}
    </div>
  );
};
