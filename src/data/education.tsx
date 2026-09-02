export type EducationConfig = typeof educationData;

import NUS from "@/assets/img/nus.svg";
import HFUT from "@/assets/img/hfut.svg";
import THU from "@/assets/img/thu.png";

export const educationData = [
  {
    start: "Sep 2025",
    end: "Present",
    institution: "National University of Singapore",
    role: "Postdoctoral Research Fellow",
    logo: NUS,
    supervisor: { name: "See-Kiong Ng & Tat-Seng Chua", link: "" },
  },
  {
    start: "Oct 2023",
    end: "Aug 2024",
    institution: "THUIR, Tsinghua University",
    role: "Visiting Student",
    logo: THU,
    supervisor: { name: "Min Zhang", link: "" },
  },
  {
    start: "Sep 2016",
    end: "Jun 2025",
    institution: "Hefei University of Technology",
    role: "B.E. & Ph.D. in Computer Science",
    logo: HFUT,
    supervisor: { name: "Meng Wang & Le Wu", link: "" },
  },
];
