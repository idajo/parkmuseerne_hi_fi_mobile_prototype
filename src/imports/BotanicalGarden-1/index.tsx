import svgPaths from "./svg-8l1jd4ag12";
import imgImage6 from "./9bd4adf7c1416ac6fa75aaec9295e4e84460e0c5.png";
import imgImage7 from "./00be8eb58c40740372a789bb1175fca39a7b1432.png";
import imgImage8 from "./04a5b56048815b815ccfb1e1236350438935c55f.png";

function Frame() {
  return (
    <div className="absolute h-px left-[17px] top-[425px] w-[18px]">
      <div className="absolute inset-[-946.44%_-7.14%_-847.15%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5714 18.9359">
          <g id="Frame 1">
            <path d={svgPaths.p21ff6880} fill="var(--stroke-0, white)" id="Arrow 1" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function BotanicalGarden() {
  return (
    <div className="bg-[#fcf5ec] relative size-full" data-name="Botanical garden">
      <div className="-translate-x-1/2 absolute h-[1688px] left-1/2 top-0 w-[393px]" data-name="image 6">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage6} />
      </div>
      <div className="absolute h-[806px] left-0 top-[882px] w-[393px]" data-name="image 7">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[209.43%] left-0 max-w-none top-[-109.43%] w-full" src={imgImage7} />
        </div>
      </div>
      <div className="absolute bg-[#264a42] h-[27px] left-[13px] top-[411px] w-[64px]" />
      <div className="absolute h-[28px] left-[86px] top-[412px] w-[57px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
      <Frame />
      <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.5] left-[40px] not-italic text-[14px] text-white top-[414px] tracking-[-0.266px] whitespace-nowrap">back to</p>
    </div>
  );
}