import svgPaths from "./svg-syezcvx5z8";
import imgImage5 from "./e382f323281011fd82a6c48854a98e021839fc8e.png";
import imgImage3 from "./f828eb821e2edd550c9c0c0ade7937b0ed5f5b15.png";
import imgImage10 from "./c558da41746efd85c313bcad2c6f96deba71a7c7.png";

function IxTouch({ className }: { className?: string }) {
  return <div className={className || "absolute left-[72px] size-[48px] top-[643px]"} data-name="ix:touch" />;
}

export default function LandingPage() {
  return (
    <div className="bg-[#fcf5ec] relative size-full" data-name="Landing page">
      <div className="absolute h-[585px] left-0 top-[82px] w-[393px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.02%] left-0 max-w-none top-[-14.02%] w-full" src={imgImage5} />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.5] left-[calc(50%+176.5px)] not-italic text-[25px] text-right text-white top-[333px] tracking-[-0.475px] uppercase w-[253px]">You just entered Parkmuseerne</p>
      <IxTouch />
      <div className="absolute h-[351px] left-0 top-[689px] w-[393px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="-translate-y-1/2 absolute aspect-[30.000030517578125/40.00003433227539] left-[37.4%] right-[37.4%] top-[calc(50%+288.5px)]" data-name="Vector">
        <div className="absolute inset-[0_-11.11%_-6.06%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 140">
            <g filter="url(#filter0_d_1_39)" id="Vector">
              <path clipRule="evenodd" d={svgPaths.p3cb17600} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="140" id="filter0_d_1_39" width="110" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="7" dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_39" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_39" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <ul className="[word-break:break-word] absolute block font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[270px] not-italic text-[12px] text-[rgba(0,0,0,0.5)] top-[1022px] tracking-[-0.228px] whitespace-nowrap">
        <li className="list-disc ms-[18px]">
          <span className="leading-[1.5]">Interactive map</span>
        </li>
      </ul>
      <div className="absolute h-[42px] left-[217px] top-[24px] w-[114px]" data-name="Button">
        <div className="absolute bg-[#e9672b] inset-0" />
        <p className="[word-break:break-word] absolute font-['Source_Serif_Pro:Regular',sans-serif] inset-[26.19%_24.56%_23.81%_24.56%] leading-[1.5] not-italic text-[14px] text-white tracking-[-0.266px] whitespace-nowrap">Køb billet</p>
      </div>
      <div className="absolute h-[20px] left-[346px] top-[35px] w-[32px]" data-name="Menu linje">
        <div className="absolute bg-[#58744a] inset-[0_18.75%_80%_0]" />
        <div className="absolute bg-[#58744a] inset-[40%_0]" />
        <div className="absolute bg-[#58744a] inset-[80%_43.75%_0_0]" />
      </div>
      <div className="absolute h-[57px] left-[14px] top-[19px] w-[77.869px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
    </div>
  );
}