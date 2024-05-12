export default function Dropdown({
  DropName,
  DropTitle,
  DropText,
  DropVal1,
  DropVal2,
  DropVal3,
  DropId,
  onChange,
  value,
}: any) {
  return (
    <main className="mt-4">
      <label htmlFor="">
        <span className="text-gray-500 sm:text-2xl xl:text-xl">{DropText}</span>{" "}
        : <br />
      </label>
      <select
        onChange={onChange}
        value={value}
        name={DropName}
        id={DropId}
        title={DropTitle}
        className="xl:h-[56px] xl:w-full sm:w-full sm:h-[70px] bg-gray-100 rounded-xl px-4 "
      >
        <option value={DropVal1}>{DropVal1}</option>
        <option value={DropVal2}>{DropVal2}</option>
        <option value={DropVal3}>{DropVal3}</option>
      </select>
    </main>
  );
}
