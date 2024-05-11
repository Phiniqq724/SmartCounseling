export default function Input2({ InText, InType, InName }: any) {
  return (
    <label htmlFor="">
      <span className="text-gray-500 xl:text-xl sm:text-2xl">{InText} :</span>
      <br />
      <input
        type={InType}
        className="xlh-[56px] rounded-xl sm:h-[70px] xl:w-[220px] sm:w-[675px] bg-gray-100 px-4"
        name={InName}
      />
    </label>
  );
}
