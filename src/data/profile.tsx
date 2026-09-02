export type ProfileConfig = typeof profileData;

import profilePhoto from "@/assets/miaomiao1.jpg";

export const profileData = {
  name: "Miaomiao Cai",
  name_zh: "蔡苗苗",
  note: "Postdoctoral Research Fellow at National University of Singapore",
  photo: profilePhoto,
  description: (
    <>
      Hi, I am{" "}
      <span
        style={{
          fontFamily: "Oleo Script",
          fontSize: "1.1rem",
          color: "#0c58ac",
        }}
      >
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
      My research focuses on intelligent decision-making with{" "}
      <span
        style={{
          fontFamily: "Oleo Script",
          fontSize: "1.1rem",
          color: "#0c58ac",
        }}
      >
        multimodal and agentic models
      </span>
      . I study debiased and generative recommendation, multimodal large language models, and tool-using AI agents. My current work develops LLM-based agents for automated penetration testing, focusing on reasoning, planning, and reliable tool execution.
      <br />
      <br />
      <strong
        style={{
          fontFamily: "Oleo Script",
          fontSize: "1.1rem",
          color: "#0c58ac",
        }}
      >
        I am actively looking for self-motivated graduate students interested in research collaboration — please feel free to reach out and explore opportunities together!
      </strong>
    </>
  ),
  institute: ["Institute of Data Science", "National University of Singapore"],
  email: "cmm.hfut@gmail.com",
  location: "Singapore",
};
