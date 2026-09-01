import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Snippet } from "@nextui-org/snippet";

import { siteConfig } from "@/config/site";
import {
  GithubIcon,
  LocationIcon,
  ScholarIcon,
  EmailIcon,
} from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { profileData } from "@/data/profile.tsx";
import { News } from "@/components/news";
import { Papers } from "@/components/papers";
import { Education } from "@/components/education";
import { Honor } from "@/components/honor";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="absolute w-full left-1/4 top-1/5 animate-gradient-float">
        <svg
          className="animate-gradient-blur"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="animate-gradient-stroke"
            d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,138.7C672,139,768,181,864,186.7C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440Z"
            fillOpacity="0"
            stroke="url(#gradient)"
            strokeOpacity={1.0}
            strokeWidth={100}
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#91EAE4">
                <animate
                  attributeName="stop-color"
                  dur="8s"
                  repeatCount="indefinite"
                  values="#91EAE4;#7F7FD5;#86A8E7;#91EAE4"
                />
              </stop>
              <stop offset="50%" stopColor="#86A8E7">
                <animate
                  attributeName="stop-color"
                  dur="8s"
                  repeatCount="indefinite"
                  values="#86A8E7;#91EAE4;#7F7FD5;#86A8E7"
                />
              </stop>
              <stop offset="100%" stopColor="#7F7FD5">
                <animate
                  attributeName="stop-color"
                  dur="8s"
                  repeatCount="indefinite"
                  values="#7F7FD5;#86A8E7;#91EAE4;#7F7FD5"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <section className="max-w-[800px] flex flex-col items-center justify-center mx-auto gap-4 py-5 md:py-5">
        <Card className="w-full shadow-none  bg-gray-0 ">
          <CardHeader className="justify-between">
            <div className="flex gap-5 items-end relative overflow-visible">
              <Image
                // isBlurred
                isZoomed
                className="aspect-square overflow-visible"
                // radius="full"
                src={profileData.photo}
                width={100}
              />
              <div className="flex flex-col">
                <p className="text-lg font-bold">
                  {profileData.name} ({profileData.name_zh})
                </p>
                <p className="text-small text-default-500">
                  {profileData.note}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0">
            <p>{profileData.description}</p>
          </CardBody>
          <CardFooter className="gap-3 text-small text-default-400">
            <div className=" w-full">
              <Divider className="my-2" />
              <div className="flex flex-start items-center">
                <LocationIcon className="mx-2 h-4" />{" "}
                {profileData.institute.join(", ")}, {profileData.location}
              </div>
            </div>
          </CardFooter>
        </Card>

        <div className="flex gap-3 flex-row hidden sm:flex">
          <Snippet
            className="rounded-full px-3 py-1"
            // color="primary"
            radius="lg"
            size="sm"
            symbol={<EmailIcon className="inline pr-1" />}
            variant="light"
          >
            {profileData.email}
          </Snippet>
          <Button
            isExternal
            showAnchorIcon
            as={Link}
            // color="primary"
            href={siteConfig.links.scholar}
            radius="full"
            variant="light"
          >
            <ScholarIcon />{" "}
            <span className="hidden sm:inline">Google Scholar</span>
          </Button>
          <Button
            isExternal
            showAnchorIcon
            as={Link}
            href={siteConfig.links.github}
            radius="full"
            variant="light"
          >
            <GithubIcon /> <span className="hidden sm:inline">GitHub</span>
          </Button>
        </div>

        <div className="w-full flex flex-wrap justify-start items-center">
          <News />
        </div>

        <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold">Selected Publications</div>
          <Papers />

          {/* <Tabs aria-label="Options" radius="full">
          <Tab key="selected" title="Selected">
              <Papers />
            </Tab>
            <Tab key="accepted" title="Accepted">
              <Papers accepted/>
            </Tab>
            <Tab key="preprint" title="Preprint">
              <Papers preprint />
            </Tab>
          </Tabs> */}
        </div>
        <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold">Education Experiences </div>
          <Education />
        </div>
        <div className="w-full flex flex-wrap justify-start items-center">
          <Honor />
        </div>
        <div className="w-full flex flex-wrap justify-start items-center">
          <div className="text-lg font-bold mr-5">Services </div>
          <div className="text-default-500">Coming soon.</div>
        </div>
      </section>
    </DefaultLayout>
  );
}
