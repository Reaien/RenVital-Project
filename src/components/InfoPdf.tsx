import { useState } from "react";

type Props = {};

function InfoPdf({}: Props) {
  const [loading, setIsLoading] = useState(true);

  return (
    <section>
      <div className="flex justify-center">
        {loading && <p>Cargando</p>}
        <iframe
          src="https://www.flipbookpdf.net/web/site/9f4f5008e39de9caa25d0efacc1f02639411ab7e202410.pdf.html"
          width="1200"
          height="720"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        ></iframe>
      </div>
    </section>
  );
}

export default InfoPdf;
