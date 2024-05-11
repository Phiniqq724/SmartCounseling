export default function Input1({ InText, InType, InName }: any) {
  return (
    <label htmlFor="">
      <span className="text-gray-500 sm:text-2xl xl:text-xl">{InText} :</span>
      <br />
      <input
        type={InType}
        className="xl:h-[56px] sm:h-[70px] rounded-xl xl:w-[478px] sm:w-[675px] bg-gray-100 text-justify px-4"
        name={InName}
      />
    </label>
  );
}
