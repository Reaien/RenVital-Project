import BreakfastCard from "../Alimentacion/Desayuno";
type Props = {
  img: string;
  img1: string;
  img2: string;
  img3: string;
};

const CardComida = ({ img, img1, img2, img3 }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <BreakfastCard
        img={img} // Usas la imagen importada
        titulo="Desayuno 1"
        items={[
          "Avena cocida con agua o leche vegetal sin azúcar (almendra o coco), con rodajas de fresa y semillas de chía (fuente de fibra y antioxidantes).",
          "Pan integral bajo en sodio con aguacate.",
          "Infusión de hierbas o té verde sin azúcar.",
        ]}
      />
      <BreakfastCard
        img={img1} // Usas la imagen importada
        titulo="Desayuno 2"
        items={[
          "Avena cocida con agua o leche vegetal sin azúcar (almendra o coco), con rodajas de fresa y semillas de chía (fuente de fibra y antioxidantes).",
          "Pan integral bajo en sodio con aguacate.",
          "Infusión de hierbas o té verde sin azúcar.",
        ]}
      />
      <BreakfastCard
        img={img2} // Usas la imagen importada
        titulo="Desayuno 3"
        items={[
          "Avena cocida con agua o leche vegetal sin azúcar (almendra o coco), con rodajas de fresa y semillas de chía (fuente de fibra y antioxidantes).",
          "Pan integral bajo en sodio con aguacate.",
          "Infusión de hierbas o té verde sin azúcar.",
        ]}
      />
      <BreakfastCard
        img={img3} // Usas la imagen importada
        titulo="Desayuno 4"
        items={[
          "Avena cocida con agua o leche vegetal sin azúcar (almendra o coco), con rodajas de fresa y semillas de chía (fuente de fibra y antioxidantes).",
          "Pan integral bajo en sodio con aguacate.",
          "Infusión de hierbas o té verde sin azúcar.",
        ]}
      />
    </div>
  );
};

export default CardComida;
