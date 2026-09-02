export type NewsConfig = typeof newsData;
import { Image } from "@nextui-org/image";

import NUS from "@/assets/img/nus.svg";
import NExT from "@/assets/img/next.png";

export const newsData = [
  {
    type: "",
    date: "Aug 2026",
    event: <>One paper is accepted by KDD 2026!</>,
  },
  {
    type: "",
    date: "Jul 2026",
    event: <>One paper is accepted by ACM MM 2026!</>,
  },
  {
    type: "",
    date: "Jun 2026",
    event: <>One paper is accepted by the SIGIR 2026 AgentSearch Workshop!</>,
  },
  {
    type: "",
    date: "Apr 2026",
    event: <>One paper is accepted by WWW 2026!</>,
  },
  {
    type: "",
    date: "Jan 2026",
    event: (
      <>
        I joined the{" "}
        <strong style={{ display: "contents" }}>Institute of Data Science</strong>{" "}
        at{" "}
        <Image
          alt="NUS"
          height={16}
          radius="none"
          src={NUS}
          style={{ padding: "0 3px" }}
          width={22}
        />{" "}
        as a Postdoctoral Research Fellow, working with Prof. See-Kiong Ng!
      </>
    ),
  },
  {
    type: "",
    date: "Nov 2025",
    event: <>One paper is accepted by IEEE TKDE!</>,
  },
  {
    type: "",
    date: "Oct 2025",
    event: <>One paper is accepted by ACM MM 2025!</>,
  },
  {
    type: "",
    date: "Sep 2025",
    event: (
      <>
        I joined{" "}
        <Image
          alt="NExT++"
          height={16}
          radius="none"
          src={NExT}
          style={{ padding: "0 3px" }}
          width={64}
        />{" "}
        as a Postdoctoral Research Fellow, working with Prof. Tat-Seng Chua!
      </>
    ),
  },
  {
    type: "",
    date: "2025",
    event: <>One paper is accepted by Frontiers of Computer Science!</>,
  },
  {
    type: "",
    date: "Jun 2025",
    event: <>I received my Ph.D. from Hefei University of Technology, advised by Prof. Meng Wang and Prof. Le Wu!</>,
  },
  {
    type: "",
    date: "Oct 2024",
    event: <>One paper is accepted by ACM TIST!</>,
  },
  {
    type: "",
    date: "Aug 2024",
    event: <>Completed my visiting research at Tsinghua University, advised by Prof. Min Zhang.</>,
  },
  {
    type: "",
    date: "Aug 2024",
    event: <>One paper is accepted by KDD 2024!</>,
  },
  {
    type: "",
    date: "Jul 2024",
    event: <>One paper is accepted by SIGIR 2024!</>,
  },
  {
    type: "",
    date: "Oct 2023",
    event: <>Started a visiting research stay at Tsinghua University, advised by Prof. Min Zhang.</>,
  },
  {
    type: "",
    date: "Sep 2020",
    event: <>Started my Ph.D. at Hefei University of Technology, advised by Prof. Meng Wang and Prof. Le Wu.</>,
  },
];
