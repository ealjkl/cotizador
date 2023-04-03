export default function Indicator() {
  return (
    <div className="indicator">
      <div className="indicator__option">
        <p className="indicator__text">Disponible</p>
        <div className="indicator__label indicator__label__disponible"></div>
      </div>

      <div className="indicator__option">
        <p className="indicator__text">Apartado</p>
        <div className="indicator__label indicator__label__apartado"></div>
      </div>

      <div className="indicator__option">
        <p className="indicator__text">No Disponible</p>
        <div className="indicator__label indicator__label__no-disponible"></div>
      </div>
    </div>
  );
}
