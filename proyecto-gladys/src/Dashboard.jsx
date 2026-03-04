function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">📊 Panel General</h2>

      <div className="row">

        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Ventas Hoy</h5>
              <h3>$8,450</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Ventas Mes</h5>
              <h3>$124,300</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Gastos</h5>
              <h3>$32,000</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-white bg-danger mb-3">
            <div className="card-body">
              <h5 className="card-title">Empleados</h5>
              <h3>12</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;