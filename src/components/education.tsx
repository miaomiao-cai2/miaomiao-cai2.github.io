import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";

import { educationData } from "@/data/education";

export const Education = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-4 w-full ">
      {educationData.map((item, index) => (
        <Card key={index} className="w-full shadow-none  bg-gray-0" shadow="sm">
          <CardBody className="overflow-visible items-start">
            <div className="flex justify-start gap-4">
              <Image
                // isBlurred
                alt={item.institution}
                className="object-scale-down h-[80px] w-auto m-auto mb-4"
                radius="sm"
                src={item.logo}
              />
              <div className="text-small flex-col justify-between">
                <b>{item.institution}</b>
                <p className="text-default-500">{item.role}</p>
                <p className="text-default-500">
                  {item.start} - {item.end}
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
