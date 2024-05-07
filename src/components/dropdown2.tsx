export default function Dropdown2({
  DropName,
  DropTitle,
  DropText,
  DropVal1,
  DropVal2,
  DropVal3,
  DropVal4,
  DropVal5,
  DropVal6,
  DropId,
}: any) {
  return (
    <main className="mt-2">
      <label htmlFor="">
        <span className="text-gray-500 xl:text-xl sm:text-2xl">{DropText}</span>{" "}
        : <br />
      </label>
      <select
        name={DropName}
        id={DropId}
        title={DropTitle}
        className="xl:h-[56px] xl:w-[478px] sm:h-[70px] sm:w-[675px] bg-gray-100 rounded-xl px-4 "
      >
        <option value={DropVal1}>{DropVal1}</option>
        <option value={DropVal2}>{DropVal2}</option>
        <option value={DropVal3}>{DropVal3}</option>
        <option value={DropVal4}>{DropVal4}</option>
        <option value={DropVal5}>{DropVal5}</option>
        <option value={DropVal6}>{DropVal6}</option>
      </select>
    </main>
  );
}
