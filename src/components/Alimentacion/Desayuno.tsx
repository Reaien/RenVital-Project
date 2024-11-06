type Props = {
    img?: string;
    titulo?: string;
    items?: string[];
  };
  
  const BreakfastCard = ({ img, titulo, items = [] }: Props) => {
    return (
      <div className="flex items-center border-2 border-green-700 rounded-lg p-10 max-w-3xl bg-[#f9f7f2]">
        <div className="mr-4">
          <img src={img} alt="Imagen" className="w-32 md:w-48 lg:w-64 h-auto"/>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">{titulo}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default BreakfastCard;