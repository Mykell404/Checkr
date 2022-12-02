export default function DashBoardRoute({ src, text }) {
  return (
    <div>
      <div className="font-outfit w-[160px] h-[140px] p-6 mt-6 bg-white hover:bg-blue-400">
        <img src={src}></img>
        <p className="">{text}</p>
      </div>
    </div>
  );
}
