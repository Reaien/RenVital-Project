import { useState } from "react";
import logo from "../../assets/images/logo.png";

type Props = {};

function InfoPdf({}: Props) {
  const [loading, setIsLoading] = useState(true);

  return (
    <section>
      <div className="">
        {loading && (
          <img
            className="animate-rotate-y animate-infinite animate-duration-[3000ms] w-[100px] h-[100px] mx-auto"
            src={logo}
            alt="Cargando"
          />
        )}
        <div className="flex justify-center">
          <iframe
            src="https://www.flipbookpdf.net/web/site/9f4f5008e39de9caa25d0efacc1f02639411ab7e202410.pdf.html"
            width="1200"
            height="720"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default InfoPdf;
