import imgImageParkmuseerne from "./c558da41746efd85c313bcad2c6f96deba71a7c7.png";
import imgImageParkmuseerneParkAlley from "./b77c9a85cc3672710566fceeac353d600e075c0a.png";

function ImageParkmuseerne() {
  return (
    <div className="h-[43.992px] relative shrink-0 w-[60.091px]" data-name="Image (Parkmuseerne)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImageParkmuseerne} />
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
        <Text />
        <ButtonMenu />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#fcf5ec] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <ImageParkmuseerne />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ImageParkmuseerneParkAlley() {
  return (
    <div className="h-[519.403px] relative shrink-0 w-full" data-name="Image (Parkmuseerne park alley)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageParkmuseerneParkAlley} />
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-gradient-to-l from-[rgba(0,0,0,0.75)] h-[519.403px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(0,0,0,0.3)] w-[389.994px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[97.488px] left-[136px] top-[401.92px] w-[233.992px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-full [word-break:break-word] absolute font-['Judson:Regular',sans-serif] leading-[32.5px] left-[240.49px] not-italic text-[26px] text-right text-white top-[49.09px] tracking-[0.52px] uppercase w-[229px]">YOU JUST ENTERED PARKMUSEERNE</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[519.403px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageParkmuseerneParkAlley />
        <Container3 />
        <Heading />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#2a2a2a] text-[16px] w-[350px]">You have scanned the QR code and are now ready to explore Parkmuseerne.</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e9672b] relative shrink-0 w-[349.998px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center py-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.4px] whitespace-nowrap">Continue to map</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[264.965_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[20px] px-[20px] relative size-full">
        <ParagraphMargin />
        <Button />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#fcf5ec] h-full max-w-[390px] min-h-[852.35400390625px] relative shrink-0 w-[389.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Container2 />
        <Container4 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#fcf5ec] h-[852.354px] relative shrink-0 w-full" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Container />
      </div>
    </div>
  );
}

export default function ParkmuseerneHiFiMobilePrototype() {
  return (
    <div className="bg-[#fcf5ec] content-stretch flex flex-col items-start relative size-full" data-name="Parkmuseerne hi-fi mobile prototype">
      <App />
    </div>
  );
}