import React from "react";
import { AiFillLinkedin,AiFillGithub ,AiOutlineFacebook} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full h-[160px] bg-black p-[50px] text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-3xl">
          <AiFillLinkedin />
          <AiFillGithub />
          <AiOutlineFacebook />
        </div>
        <div className="font-bold">
          <p>© 2023 MAKEMYTRIP PVT. LTD.</p>
          <p>Country India USA UAE</p>
        </div>
      </div>
    </div>
  );
}
