export type EducationConfig = typeof educationData;

import NUS from "@/assets/img/nus.svg";
import NExT from "@/assets/img/next.png";
import HFUT from "@/assets/img/hfut.png";
import THU from "@/assets/img/thu.png";

export const educationData = [
  {
    start: "Jan 2026",
    end: "Present",
    institution: "Institute of Data Science, NUS",
    role: "Postdoctoral Research Fellow",
    logo: NUS,
    supervisor: { name: "See-Kiong Ng", link: "https://www.comp.nus.edu.sg/~ngsk/" },
  },
  {
    start: "Sep 2025",
    end: "Jan 2026",
    institution: "NExT++ Research Centre, NUS",
    role: "Postdoctoral Research Fellow",
    logo: NExT,
    supervisor: { name: "See-Kiong Ng", link: "https://www.comp.nus.edu.sg/~ngsk/" },
  },
  {
    start: "Oct 2023",
    end: "Aug 2024",
    institution: "Tsinghua University",
    role: "Visiting Student",
    logo: THU,
    supervisor: { name: "Min Zhang", link: "" },
  },
  {
    start: "Sep 2020",
    end: "Jun 2025",
    institution: "Hefei University of Technology",
    role: "Ph.D. in Computer Science",
    logo: HFUT,
    supervisor: { name: "Meng Wang & Le Wu", link: "" },
  },
  {
    start: "Sep 2016",
    end: "Jun 2020",
    institution: "Hefei University of Technology",
    role: "B.E. degree",
    logo: HFUT,
    supervisor: { name: "", link: "" },
  },
];
