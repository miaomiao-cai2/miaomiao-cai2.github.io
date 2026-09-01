import { Code } from "@nextui-org/code";

import { Paper } from "./paper";

import { paperSelectedData } from "@/data/paper_selected";

export const Papers = () => {
  let paperDoms;

  paperDoms = paperSelectedData.map((data) => (
    <Paper key={data.title} {...data} />
  ));

  return (
    <div className="flex flex-col items-center  my-5">
      {/* <ScrollShadow hideScrollBar className="p-5 h-[550px]"> */}
      <div className="grid gap-4">{paperDoms}</div>
      {/* </ScrollShadow> */}

      <br />
      <center style={{ fontFamily: "Oleo Script" }}>&quot;Stay Hungry, Stay Foolish&quot;</center>

      {/* <Snippet symbol="" variant="bordered">Stay Hungry, Stay Foolish</Snippet> */}
    </div>
  );
};
