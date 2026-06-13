import imgImage3 from "./f828eb821e2edd550c9c0c0ade7937b0ed5f5b15.png";
import imgImage10 from "./c558da41746efd85c313bcad2c6f96deba71a7c7.png";

function IxTouch() {
  return <div className="absolute left-[72px] size-[48px] top-[643px]" data-name="ix:touch" />;
}

export default function InteractiveMap() {
  return (
    <div className="bg-[#fcf5ec] relative size-full" data-name="Interactive map">
      <IxTouch />
      <div className="absolute h-[351px] left-0 top-[161px] w-[393px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[57px] left-[14px] top-[19px] w-[77.869px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <div className="absolute h-[42px] left-[207px] top-[27px] w-[114px]" data-name="Button">
        <div className="absolute bg-[#e9672b] inset-0" />
        <p className="[word-break:break-word] absolute font-['Source_Serif_Pro:Regular',sans-serif] inset-[26.19%_24.56%_23.81%_24.56%] leading-[1.5] not-italic text-[14px] text-white tracking-[-0.266px] whitespace-nowrap">Køb billet</p>
      </div>
      <div className="absolute h-[20px] left-[341px] top-[38px] w-[32px]" data-name="Menu linje">
        <div className="absolute bg-[#565d33] inset-[0_18.75%_80%_0]" />
        <div className="absolute bg-[#565d33] inset-[40%_0]" />
        <div className="absolute bg-[#565d33] inset-[80%_43.75%_0_0]" />
      </div>
    </div>
  );
}