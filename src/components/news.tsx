import { ScrollShadow } from "@nextui-org/scroll-shadow";

import { newsData } from "@/data/news";

type NewsProps = {
  noScrollShadow?: boolean;
};

export const News = ({ noScrollShadow }: NewsProps) => {
  return (
    <div className="w-full flex flex-col my-5">
      <div className="flex gap-1 justify-start items-end my-2">
        <div className="text-lg font-bold">News</div>
      </div>

      {noScrollShadow ? (
        <div className="py-1">
          {newsData.map((item, idx) => (
            <div key={idx} className="flex justify-between my-2 p-0">
              <div className="col-span-2 flex items-center">
                • {item.event}
              </div>
              <div className="col-span-1 hidden sm:block">{item.date}</div>
            </div>
          ))}
        </div>
      ) : (
        <ScrollShadow hideScrollBar className="h-[130px]">
          {newsData.map((item, idx) => (
            <div key={idx} className="flex justify-between my-2 p-0">
              <div className="col-span-2 flex items-center overflow-hidden text-ellipsis whitespace-nowrap max-w-[100%] sm:max-w-[80%]">
                • {item.event}
              </div>
              <div className="col-span-1 hidden sm:block">{item.date}</div>
            </div>
          ))}
        </ScrollShadow>
      )}
    </div>
  );
};
