function Ventas() {
  return (
    <div>
      <h2 className="mb-4">💰 Ventas Diarias</h2>

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Fecha</th>
            <th>Total Ventas</th>
            <th>Método de Pago</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>03/03/2026</td>
            <td>$8,450</td>
            <td>Efectivo</td>
          </tr>
          <tr>
            <td>02/03/2026</td>
            <td>$7,900</td>
            <td>Tarjeta</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ventas;