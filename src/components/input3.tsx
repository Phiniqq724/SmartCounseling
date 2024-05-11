export default function Input3({ InText, InType, InName }: any) {
  return (
    <label htmlFor="">
      <span className="text-gray-500 sm:text-2xl xl:text-xl">{InText} :</span>
      <br />
      <textarea
        className="h-[260px] rounded-xl xl:w-[1040px] sm:w-[675px] bg-gray-100 p-4"
        rows={4}
        cols={50}
        name={InName}
      ></textarea>
    </label>
  );
}
