export default function Indicator() {
  return (
    <div className="indicator">
      <div className="indicator__option">
        <div className="indicator__label indicator__label__disponible"></div>
        <p className="indicator__text">Disponible</p>
      </div>

      <div className="indicator__option">
        <div className="indicator__label indicator__label__apartado"></div>
        <p className="indicator__text">Apartado</p>
      </div>

      <div className="indicator__option">
        <div className="indicator__label indicator__label__no-disponible"></div>
        <p className="indicator__text">No Disponible</p>
      </div>
    </div>
  );
}
