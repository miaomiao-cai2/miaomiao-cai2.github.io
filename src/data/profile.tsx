export type ProfileConfig = typeof profileData;

import profilePhoto from "@/assets/profile.jpg";

export const profileData = {
  name: "Miaomiao Cai",
  name_zh: "蔡苗苗",
  note: "Postdoctoral Research Fellow at National University of Singapore",
  photo: profilePhoto,
  description: (
    <>
      Hi, I am{" "}
      <span style={{
        fontFamily: "Oleo Script",
        fontSize: "1.1rem",
        color: "#0c58ac"
      }}>
        Miaomiao Cai
      </span>
      , currently a Postdoctoral Research Fellow at the{" "}
      <strong>National University of Singapore</strong>, working with{" "}
      <a href="https://www.comp.nus.edu.sg/~ngsk/" style={{ fontWeight: "bold" }} target="_blank">Prof. See-Kiong Ng</a>
      {" "}and{" "}
      <a href="https://www.chuatatseng.com/" style={{ fontWeight: "bold" }} target="_blank">Prof. Tat-Seng Chua</a>
      . Before joining NUS, I received both my Ph.D. and B.E. degrees from{" "}
      <strong>Hefei University of Technology</strong>, where I was advised by{" "}
      <a href="https://sites.google.com/view/meng-wang/home" style={{ fontWeight: "bold" }} target="_blank">Prof. Meng Wang</a>
      {" "}and{" "}
      <a href="https://le-wu.com/" style={{ fontWeight: "bold" }} target="_blank">Prof. Le Wu</a>
      . During my Ph.D., I also spent time as a visiting student at{" "}
      <strong>Tsinghua University</strong>, working with{" "}
      <a href="https://www.cs.tsinghua.edu.cn/csen/info/1312/4397.htm" style={{ fontWeight: "bold" }} target="_blank">Prof. Min Zhang</a>.
      <br />
      <br />
      I am broadly interested in{" "}
      <span
        style={{
          fontFamily: "Oleo Script",
          fontSize: "1.1rem",
          color: "#0c58ac",
        }}
      >
        recommender systems, multimodal learning, and agentic AI
      </span>
      . In particular, my research interests include debias recommendation, multimodal large language models, and agent reasoning and tool use. I am currently working on LLM-based agents for automated penetration testing, focusing on how agents reason, plan, and interact with tools in complex environments.
      <br />
      <br />
      I&apos;m open to collaborations and discussions! Please feel free to contact me and explore possibilities together!
    </>
  ),
  institute: ["Institute of Data Science", "National University of Singapore"],
  email: "cmm.hfut@gmail.com",
  location: "Singapore",
};
