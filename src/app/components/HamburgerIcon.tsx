export function HamburgerIcon() {
  return (
    <div className="flex flex-col gap-[5px] w-7">
      <span className="block h-[3px] bg-[#58744A] rounded-sm" style={{ width: "65%" }} />
      <span className="block h-[3px] bg-[#58744A] rounded-sm w-full" />
      <span className="block h-[3px] bg-[#58744A] rounded-sm" style={{ width: "42%" }} />
    </div>
  );
}
