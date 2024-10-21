type Props = {
  cardSintoma: boolean;
  titulo: String;
  item1: String;
  item2?: String;
  item3?: String;
  item4?: String;
  item5?: String;
  item6?: String;
};

function InfoBox({
  titulo,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  cardSintoma,
}: Props) {
  return (
    <div
      className={`m-5 lg:w-[400px] max-w-[400px]  h-[300px]  shadow-lg rounded-xl border-4 ${
        cardSintoma ? "border-amber-400/55" : "border-red-400"
      } `}
    >
      <p
        className={`text-center  mt-6 font-bold lg:text-4xl ${
          cardSintoma ? "text-amber-500" : "text-red-400"
        }`}
      >
        {titulo}
      </p>
      <div className="text-left mx-5 xl:ml-8 mt-2 max-md:text-sm text-gray-600">
        <p>{item1}</p>
        <p>{item2}</p>
        <p>{item3}</p>
        <p>{item4}</p>
        <p>{item5}</p>
        <p>{item6}</p>
      </div>
    </div>
  );
}

export default InfoBox;
