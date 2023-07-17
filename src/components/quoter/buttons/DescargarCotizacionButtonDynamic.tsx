import dynamic from "next/dynamic";

const DescargarCotizacionButton = dynamic(
  () => import("./DescargarCotizacionButton"),
  {
    ssr: false,
    loading: () => {
      return (
        <button disabled className="chepina__open-button disabled">
          Descargar
        </button>
      );
    },
  }
);

export default DescargarCotizacionButton;
