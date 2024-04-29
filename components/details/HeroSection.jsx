import React from "react";
import Image from "next/image";
import ActionsButton from "../ActionsButton";

const HeroSection = () => {
  return (
    <section class="container">
      <div class="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src="/google.png"
          width={900}
          height={900}
          alt="Event 1"
          class="h-[450px] mx-auto"
        />
      </div>

      <div class="flex items-end">
        <div class="flex-auto py-4">
          <h1 class="font-bold text-2xl">Google I/O Extended</h1>
          <p class="text-[#9C9C9C] text-base mt-1">
            Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
          </p>
          <div class="text-[#737373] text-sm mt-1">
            <span>1k Interested</span>
            <span>|</span>
            <span>40K Going</span>
          </div>
        </div>

        <ActionsButton formDetail={true} />
      </div>
    </section>
  );
};

export default HeroSection;
