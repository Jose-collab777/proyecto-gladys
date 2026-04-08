import { useState } from "react";
import "./componentes/Finanzas.css";

const transaccionesData = [
  { id: 1, descripcion: "Compra de insumos - Pescado", categoria: "Insumos", tipo: "Egreso", monto: 8200, fecha: "07 Mar 2026" },
  { id: 2, descripcion: "Ventas del día - Domingo", categoria: "Ventas", tipo: "Ingreso", monto: 18460, fecha: "07 Mar 2026" },
  { id: 3, descripcion: "Pago renta local", categoria: "Renta", tipo: "Egreso", monto: 15000, fecha: "05 Mar 2026" },
  { id: 4, descripcion: "Ventas del día - Sábado", categoria: "Ventas", tipo: "Ingreso", monto: 24800, fecha: "06 Mar 2026" },
  { id: 5, descripcion: "Pago nómina quincena", categoria: "Nómina", tipo: "Egreso", monto: 35800, fecha: "01 Mar 2026" },
  { id: 6, descripcion: "Compra vajilla y utensilios", categoria: "Equipamiento", tipo: "Egreso", monto: 4500, fecha: "02 Mar 2026" },
  { id: 7, descripcion: "Ventas del día - Viernes", categoria: "Ventas", tipo: "Ingreso", monto: 22000, fecha: "05 Mar 2026" },
  { id: 8, descripcion: "Publicidad en redes", categoria: "Marketing", tipo: "Egreso", monto: 1500, fecha: "03 Mar 2026" },
];

const KPI_DATA = [
  { label: "Ingresos Mes", valor: "$122,260", cambio: "+12.4%", positivo: true, icono: "📈" },
  { label: "Egresos Mes", valor: "$65,000", cambio: "+5.2%", positivo: false, icono: "📉" },
  { label: "Utilidad Neta", valor: "$57,260", cambio: "+18.7%", positivo: true, icono: "💰" },
  { label: "Margen", valor: "46.8%", cambio: "+2.1pp", positivo: true, icono: "📊" },
];

const CATEGORIAS_EGRESO = [
  { categoria: "Insumos", monto: 28000, color: "#e8003a" },
  { categoria: "Nómina", monto: 35800, color: "#ff6b35" },
  { categoria: "Renta", monto: 15000, color: "#ffaa00" },
  { categoria: "Equipamiento", monto: 4500, color: "#00cc66" },
  { categoria: "Marketing", monto: 1500, color: "#4488ff" },
];

export default function Finanzas() {
  const [transacciones, setTransacciones] = useState(transaccionesData);
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [nueva, setNueva] = useState({ descripcion: "", categoria: "", tipo: "Ingreso", monto: "", fecha: "" });

  const totalEgresos = CATEGORIAS_EGRESO.reduce((a, b) => a + b.monto, 0);

  const filtradas = transacciones.filter(t =>
    filtroTipo === "Todos" || t.tipo === filtroTipo
  );

  const agregarTransaccion = () => {
    if (!nueva.descripcion || !nueva.monto) return;
    setTransacciones([{ ...nueva, id: transacciones.length + 1, monto: parseFloat(nueva.monto) }, ...transacciones]);
    setNueva({ descripcion: "", categoria: "", tipo: "Ingreso", monto: "", fecha: "" });
    setModalAbierto(false);
  };

  const fmt = n => `$${Number(n).toLocaleString()}`;

  return (
    <div className="fin-page">
      <div className="fin-topbar">
        <div>
          <h2 className="fin-titulo">Finanzas</h2>
          <p className="fin-subtitulo">Control de ingresos, egresos y utilidades</p>
        </div>
        <button className="fin-btn-nueva" onClick={() => setModalAbierto(true)}>+ Nueva Transacción</button>
      </div>

      {/* KPIs */}
      <div className="fin-kpis">
        {KPI_DATA.map((k, i) => (
          <div className="fin-kpi" key={i}>
            <div className="fin-kpi-top">
              <span className="fin-kpi-label">{k.label}</span>
              <span className="fin-kpi-icono">{k.icono}</span>
            </div>
            <p className="fin-kpi-valor">{k.valor}</p>
            <p className={`fin-kpi-cambio ${k.positivo ? "pos" : "neg"}`}>
              {k.positivo ? "↑" : "↓"} {k.cambio} vs mes anterior
            </p>
          </div>
        ))}
      </div>

      <div className="fin-grid-2">
        {/* Desglose egresos */}
        <div className="fin-card">
          <h3 className="fin-card-titulo">Desglose de Egresos</h3>
          <p className="fin-card-sub">Por categoría este mes</p>
          <div className="fin-barras">
            {CATEGORIAS_EGRESO.map((cat, i) => (
              <div key={i} className="fin-barra-row">
                <span className="fin-barra-label">{cat.categoria}</span>
                <div className="fin-barra-track">
                  <div
                    className="fin-barra-fill"
                    style={{ width: `${(cat.monto / totalEgresos) * 100}%`, background: cat.color }}
                  />
                </div>
                <span className="fin-barra-monto">{fmt(cat.monto)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen flujo */}
        <div className="fin-card">
          <h3 className="fin-card-titulo">Flujo de Caja</h3>
          <p className="fin-card-sub">Balance del mes actual</p>
          <div className="fin-flujo">
            <div className="fin-flujo-item ingreso">
              <span className="fin-flujo-icon">↑</span>
              <div>
                <p className="fin-flujo-label">Total Ingresos</p>
                <p className="fin-flujo-monto">{fmt(122260)}</p>
              </div>
            </div>
            <div className="fin-flujo-item egreso">
              <span className="fin-flujo-icon">↓</span>
              <div>
                <p className="fin-flujo-label">Total Egresos</p>
                <p className="fin-flujo-monto">{fmt(65000)}</p>
              </div>
            </div>
            <div className="fin-flujo-neto">
              <p className="fin-flujo-label">Utilidad Neta</p>
              <p className="fin-flujo-neto-monto">{fmt(57260)}</p>
              <div className="fin-barra-track" style={{ marginTop: 8 }}>
                <div className="fin-barra-fill" style={{ width: "46.8%", background: "#e8003a" }} />
              </div>
              <p style={{ fontSize: 11, color: "#555", marginTop: 4 }}>Margen: 46.8%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabla transacciones */}
      <div className="fin-card">
        <div className="fin-tabla-header">
          <div>
            <h3 className="fin-card-titulo">Transacciones Recientes</h3>
            <p className="fin-card-sub">Registro de movimientos del período</p>
          </div>
          <div className="fin-filtros">
            {["Todos", "Ingreso", "Egreso"].map(f => (
              <button
                key={f}
                className={`fin-filtro-btn ${filtroTipo === f ? "activo" : ""}`}
                onClick={() => setFiltroTipo(f)}
              >{f}</button>
            ))}
          </div>
        </div>

        <table className="fin-tabla">
          <thead>
            <tr>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Monto</th>
            </tr>
          </thead>
          <tbody>
            {filtradas.map(t => (
              <tr key={t.id}>
                <td>{t.descripcion}</td>
                <td><span className="fin-badge-cat">{t.categoria}</span></td>
                <td className="fin-fecha">{t.fecha}</td>
                <td>
                  <span className={`fin-tipo ${t.tipo === "Ingreso" ? "ingreso" : "egreso"}`}>
                    {t.tipo === "Ingreso" ? "↑" : "↓"} {t.tipo}
                  </span>
                </td>
                <td className={`fin-monto ${t.tipo === "Ingreso" ? "ingreso" : "egreso"}`}>
                  {t.tipo === "Egreso" ? "-" : "+"}{fmt(t.monto)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalAbierto && (
        <div className="fin-modal-overlay" onClick={() => setModalAbierto(false)}>
          <div className="fin-modal" onClick={e => e.stopPropagation()}>
            <h3 className="fin-modal-titulo">Nueva Transacción</h3>
            <div className="fin-modal-campos">
              <input className="fin-input" placeholder="Descripción" value={nueva.descripcion} onChange={e => setNueva({...nueva, descripcion: e.target.value})} />
              <input className="fin-input" placeholder="Categoría" value={nueva.categoria} onChange={e => setNueva({...nueva, categoria: e.target.value})} />
              <select className="fin-input" value={nueva.tipo} onChange={e => setNueva({...nueva, tipo: e.target.value})}>
                <option>Ingreso</option>
                <option>Egreso</option>
              </select>
              <input className="fin-input" placeholder="Monto" type="number" value={nueva.monto} onChange={e => setNueva({...nueva, monto: e.target.value})} />
              <input className="fin-input" placeholder="Fecha (ej: 07 Mar 2026)" value={nueva.fecha} onChange={e => setNueva({...nueva, fecha: e.target.value})} />
            </div>
            <div className="fin-modal-botones">
              <button className="fin-btn-cancelar" onClick={() => setModalAbierto(false)}>Cancelar</button>
              <button className="fin-btn-nueva" onClick={agregarTransaccion}>Agregar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
