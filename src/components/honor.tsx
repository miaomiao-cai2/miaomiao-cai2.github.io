import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { honorData } from "@/data/honor";

type HonorProps = {
  noScrollShadow?: boolean;
};

export const Honor = ({ noScrollShadow }: HonorProps) => {
  return (
    <div className="w-full flex flex-col my-5">
      <div className="flex gap-1 justify-start items-end my-2">
        <div className="text-lg font-bold">Honors and Awards</div>
      </div>

      {noScrollShadow ? (
        <div className="py-1">
          {honorData.map((item, idx) => (
            <div key={idx} className="flex justify-between my-2 p-0">
              <div className="col-span-2">{item.event}</div>
              <div className="col-span-1">{item.date}</div>
            </div>
          ))}
        </div>
      ) : (
        <ScrollShadow hideScrollBar className="h-[130px]">
          {honorData.map((item, idx) => (
            <div key={idx} className="flex justify-between my-2 p-0">
              <div className="col-span-2 max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap">
                {item.event}
              </div>
              <div className="col-span-1">{item.date}</div>
            </div>
          ))}
        </ScrollShadow>
      )}
    </div>
  );
};
