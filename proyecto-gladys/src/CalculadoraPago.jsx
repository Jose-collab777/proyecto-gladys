import { useState } from "react";
import "./componentes/CalculadoraPago.css";

const IMSS_RATE = 0.0315;
const ISR_TABLA = [
  { limite: 8952, tasa: 0.0192, cuota: 0 },
  { limite: 21175, tasa: 0.064, cuota: 172 },
  { limite: 37200, tasa: 0.1088, cuota: 956 },
  { limite: 433000, tasa: 0.16, cuota: 3530 },
  { limite: Infinity, tasa: 0.30, cuota: 74640 },
];

function calcularISR(salarioMensual) {
  for (const fila of ISR_TABLA) {
    if (salarioMensual <= fila.limite) {
      return fila.cuota + (salarioMensual - (fila.cuota === 0 ? 0 : 0)) * fila.tasa;
    }
  }
  return 0;
}

export default function CalculadoraPago() {
  const [salarioBase, setSalarioBase] = useState("");
  const [horasExtra, setHorasExtra] = useState(0);
  const [bonos, setBonos] = useState(0);
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const base = parseFloat(salarioBase) || 0;
    const extra = parseFloat(horasExtra) || 0;
    const bono = parseFloat(bonos) || 0;
    const valorHoraExtra = (base / 30 / 8) * 2;
    const totalExtra = extra * valorHoraExtra;
    const ingresoTotal = base + totalExtra + bono;
    const imss = ingresoTotal * IMSS_RATE;
    const isr = calcularISR(ingresoTotal) * 0.25; // simplificado quincenal
    const totalDeducciones = imss + isr;
    const netoAPagar = ingresoTotal - totalDeducciones;

    setResultado({
      salarioBase: base,
      horasExtraImporte: totalExtra,
      bonos: bono,
      ingresoTotal,
      imss,
      isr,
      totalDeducciones,
      netoAPagar,
    });
  };

  const fmt = (n) => `$${n.toLocaleString("es-MX", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="cp-container">
      <div className="cp-header">
        <h3 className="cp-titulo">Calculadora de Pago</h3>
        <p className="cp-subtitulo">Calcula el salario neto con deducciones</p>
      </div>

      <div className="cp-body">
        <div className="cp-form">
          <div className="cp-campo">
            <label className="cp-label">Salario Base Mensual</label>
            <div className="cp-input-prefix">
              <span>$</span>
              <input className="cp-input" type="number" placeholder="0.00" value={salarioBase} onChange={e => setSalarioBase(e.target.value)} />
            </div>
          </div>

          <div className="cp-campo">
            <label className="cp-label">Horas Extra</label>
            <input className="cp-input" type="number" placeholder="0" min="0" value={horasExtra} onChange={e => setHorasExtra(e.target.value)} />
          </div>

          <div className="cp-campo">
            <label className="cp-label">Bonos / Comisiones</label>
            <div className="cp-input-prefix">
              <span>$</span>
              <input className="cp-input" type="number" placeholder="0.00" value={bonos} onChange={e => setBonos(e.target.value)} />
            </div>
          </div>

          <button className="cp-btn-calcular" onClick={calcular}>Calcular Nómina</button>
        </div>

        {resultado && (
          <div className="cp-resultado">
            <h4 className="cp-resultado-titulo">Desglose de Pago</h4>

            <div className="cp-seccion">
              <p className="cp-seccion-label">PERCEPCIONES</p>
              <div className="cp-fila">
                <span>Salario Base</span>
                <span>{fmt(resultado.salarioBase)}</span>
              </div>
              <div className="cp-fila">
                <span>Horas Extra</span>
                <span>{fmt(resultado.horasExtraImporte)}</span>
              </div>
              <div className="cp-fila">
                <span>Bonos</span>
                <span>{fmt(resultado.bonos)}</span>
              </div>
              <div className="cp-fila total">
                <span>Total Percepciones</span>
                <span>{fmt(resultado.ingresoTotal)}</span>
              </div>
            </div>

            <div className="cp-seccion">
              <p className="cp-seccion-label">DEDUCCIONES</p>
              <div className="cp-fila">
                <span>IMSS (3.15%)</span>
                <span className="cp-negativo">-{fmt(resultado.imss)}</span>
              </div>
              <div className="cp-fila">
                <span>ISR (estimado)</span>
                <span className="cp-negativo">-{fmt(resultado.isr)}</span>
              </div>
              <div className="cp-fila total">
                <span>Total Deducciones</span>
                <span className="cp-negativo">-{fmt(resultado.totalDeducciones)}</span>
              </div>
            </div>

            <div className="cp-neto">
              <span>NETO A PAGAR</span>
              <span className="cp-neto-monto">{fmt(resultado.netoAPagar)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
