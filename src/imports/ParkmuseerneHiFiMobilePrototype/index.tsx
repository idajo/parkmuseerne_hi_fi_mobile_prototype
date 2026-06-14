import imgImageParkmuseerne from "./c558da41746efd85c313bcad2c6f96deba71a7c7.png";
import imgContainer from "./ad518c9bc1f134e0c56a7bd2d9e600fe66ecde02.png";

function ImageParkmuseerne() {
  return (
    <div className="h-[39.997px] relative shrink-0 w-[54.636px]" data-name="Image (Parkmuseerne)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageParkmuseerne} />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
        <ImageParkmuseerne />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#e9672b] h-[42px] relative shrink-0 w-[114px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.4px] whitespace-nowrap">Buy ticket</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.493px] relative shrink-0 w-[43.257px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[0px] text-[rgba(0,0,0,0.5)] top-[0.36px] tracking-[0.275px] whitespace-nowrap">
          <span className="leading-[16.5px] text-[11px]">DA</span>
          <span className="leading-[16.5px] text-[11px] text-[rgba(0,0,0,0.3)]">|</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] text-[11px] text-black">EN</span>
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="bg-[#58744a] h-[2.994px] relative rounded-[6px] shrink-0 w-[18.198px]" data-name="Text" />;
}

function Text2() {
  return <div className="bg-[#58744a] h-[2.994px] relative rounded-[6px] shrink-0 w-[28px]" data-name="Text" />;
}

function Text3() {
  return <div className="bg-[#58744a] h-[2.994px] relative rounded-[6px] shrink-0 w-[11.752px]" data-name="Text" />;
}

function HamburgerIcon() {
  return (
    <div className="relative shrink-0 w-[28px]" data-name="HamburgerIcon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5px] items-start relative size-full">
        <Text1 />
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="relative shrink-0" data-name="Button - Menu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center p-[4px] relative size-full">
        <HamburgerIcon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button1 />
        <Text />
        <ButtonMenu />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fcf5ec] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12.682px] pt-[12px] px-[16px] relative size-full">
          <Button />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#fcf5ec] h-full relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.682px] border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12.682px] py-[6.682px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">🏛️ Museums</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#fcf5ec] h-full relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.682px] border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12.682px] py-[6.682px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">🌳 Parks</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fcf5ec] h-full relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.682px] border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12.682px] py-[6.682px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">🚲 Bike-parking</p>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#fcf5ec] h-full relative shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.682px] border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12.682px] py-[6.682px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-center whitespace-nowrap">🚻 Toilet</p>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[54.029px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start pb-[12.682px] pt-[12px] px-[16px] relative size-full">
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.05)] border-b-[0.682px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container4() {
  return <div className="absolute left-[173.29px] size-[20px] top-[167.83px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[2.12px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[120.61px] top-[16.29px]" data-name="Button">
      <Container5 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.54px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[167.61px] top-[77.29px]" data-name="Button">
      <Container6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.95px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[123.61px] top-[145.29px]" data-name="Button">
      <Container7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.78px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[205.61px] top-[181.29px]" data-name="Button">
      <Container8 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.07px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[6.61px] top-[157.29px]" data-name="Button">
      <Container9 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.93px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[324.61px] top-[225.29px]" data-name="Button">
      <Container10 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.3px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[194.61px] top-[253.29px]" data-name="Button">
      <Container11 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.91px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text11 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[111.61px] top-[181.29px]" data-name="Button">
      <Container12 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-[3.93px] not-italic text-[11px] text-center text-white top-[-0.06px] whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#58744a] drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] relative rounded-[22880200px] shrink-0 size-[32px]" data-name="Container">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[225.61px] top-[109.29px]" data-name="Button">
      <Container13 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[311.993px] relative shrink-0 w-[389.994px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24.004px] relative shrink-0 w-[358.01px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.95px] whitespace-nowrap">Museums</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[4.315px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[193.388px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">The Hirschsprung Collection</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text13 />
      <Text15 />
    </div>
  );
}

function ButtonNegativeMargin() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button15 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[235.995px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">SMK – National Gallery of Denmark</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text16 />
      <Text18 />
    </div>
  );
}

function ButtonNegativeMargin1() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button16 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.457px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">3</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[235.74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">National History Museum Denmark</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text19 />
      <Text21 />
    </div>
  );
}

function ButtonNegativeMargin2() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button17 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text23 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[119.766px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">Rosenborg Castle</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text22 />
      <Text24 />
    </div>
  );
}

function ButtonNegativeMargin3() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button18 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.222px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text26 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[148.842px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">The Workers Museum</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text25 />
      <Text27 />
    </div>
  );
}

function ButtonNegativeMargin4() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button19 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.499px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">6</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text29 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[139.967px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">The David Collection</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] px-[4px] py-[12px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <Text28 />
      <Text30 />
    </div>
  );
}

function ButtonNegativeMargin5() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button20 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[327.408px] relative shrink-0 w-[358.01px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ButtonNegativeMargin />
        <ButtonNegativeMargin1 />
        <ButtonNegativeMargin2 />
        <ButtonNegativeMargin3 />
        <ButtonNegativeMargin4 />
        <ButtonNegativeMargin5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fcf5ec] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-solid border-t-[0.682px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[20.682px] px-[16px] relative size-full">
        <Heading />
        <Container15 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24.004px] relative shrink-0 w-[358.01px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-black top-[-0.95px] whitespace-nowrap">Parks</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[5.817px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text32 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[97.69px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">Kongens Have</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text31 />
      <Text33 />
    </div>
  );
}

function ButtonNegativeMargin6() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button21 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.51px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[96.71px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">Botanisk Have</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] pb-[12.682px] pt-[12px] px-[4px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-b-[0.682px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Text34 />
      <Text36 />
    </div>
  );
}

function ButtonNegativeMargin7() {
  return (
    <div className="h-[52.682px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button22 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[15.001px] relative shrink-0 w-[6.499px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.36px] whitespace-nowrap">9</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="bg-[#58744a] relative rounded-[22880200px] shrink-0 size-[28px]" data-name="Text">
      <div aria-hidden className="absolute border-[2.728px] border-solid border-white inset-0 pointer-events-none rounded-[22880200px] shadow-[0px_0px_0px_0px_#58744a,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2.728px] relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[19.998px] relative shrink-0 w-[84.404px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-black top-[0.36px] whitespace-nowrap">Østre Anlæg</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[-4px] px-[4px] py-[12px] rounded-[10px] top-0 w-[366.001px]" data-name="Button">
      <Text37 />
      <Text39 />
    </div>
  );
}

function ButtonNegativeMargin8() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Button (negative margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button23 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[169.363px] relative shrink-0 w-[358.01px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ButtonNegativeMargin6 />
        <ButtonNegativeMargin7 />
        <ButtonNegativeMargin8 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#fcf5ec] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-solid border-t-[0.682px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] pt-[20.682px] px-[16px] relative size-full">
        <Heading1 />
        <Container17 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[32.496px] relative shrink-0 w-[358.01px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.25px] left-[179.5px] not-italic text-[10px] text-[rgba(255,255,255,0.8)] text-center top-[-0.64px] w-[359px]">Parkmuseerne | c/o Statens Museum for Kunst • Sølvgade 48-50 • 1307 København K</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1a1a1a] relative shrink-0 w-[389.994px]" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function DistrictMapScreen() {
  return (
    <div className="bg-[#fcf5ec] min-h-[852.35400390625px] relative shrink-0 w-[389.994px]" data-name="DistrictMapScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <Header />
        <Container2 />
        <Container3 />
        <Container14 />
        <Container16 />
        <Footer />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-full max-w-[390px] min-h-[852.35400390625px] relative shrink-0 w-[389.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <DistrictMapScreen />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#fcf5ec] h-[1129.23px] min-h-[852.35400390625px] relative shrink-0 w-[392.765px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center min-h-[inherit] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[852.354px] relative shrink-0 w-[393px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <App />
      </div>
    </div>
  );
}

export default function ParkmuseerneHiFiMobilePrototype() {
  return (
    <div className="bg-[#fcf5ec] content-stretch flex flex-col items-start relative size-full" data-name="Parkmuseerne hi-fi mobile prototype">
      <Body />
    </div>
  );
}