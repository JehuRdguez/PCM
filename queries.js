const { response } = require("express");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "planeacionmant",
  password: "12345",
  port: "5432",
});

//api de bitacora
const ObtencionRegistro = (request, response) => {
  pool.query(
    'SELECT * FROM bitacora WHERE estado = $1 ORDER BY ecodbitacora ASC',
    ['1'],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const ObtencionRegistroPorId = (request, response) => {
  const ecodbitacora = parseInt(request.params.id);
  pool.query(
    'SELECT * FROM bitacora WHERE ecodbitacora = $1',
    [ecodbitacora],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};


const crearRegistro = (request, response) => {
  const {
    tunidad,
    tunidadnegocios,
    tcaptura,
    tdescripcion,
    ttiporeporte,
    fhfecha,
    tpiezasutilizadas,
    tdisponibilidad,
    tsistema,
    tsubsistema,
    ttecnico,
    tsupervisor,
    tturno,
    tefectosfalla,
    estado
  } = request.body;

  pool.query(
    'INSERT INTO bitacora ( "tunidad", "tunidadnegocios", "tcaptura", "tdescripcion", "ttiporeporte", "fhfecha", "tpiezasutilizadas", "tdisponibilidad", "tsistema", "tsubsistema", "ttecnico", "tsupervisor", "tturno", "tefectosfalla", "estado")VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15) RETURNING * ',
    [
      tunidad,
      tunidadnegocios,
      tcaptura,
      tdescripcion,
      ttiporeporte,
      fhfecha,
      tpiezasutilizadas,
      tdisponibilidad,
      tsistema,
      tsubsistema,
      ttecnico,
      tsupervisor,
      tturno,
      tefectosfalla,
      estado
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send(result);
    }
  );
};

const actualizarRegistro = (request, response) => {
  const {
    ecodbitacora,
    tunidad,
    tunidadnegocios,
    tcaptura,
    tdescripcion,
    ttiporeporte,
    fhfecha,
    tpiezasutilizadas,
    tdisponibilidad,
    tsistema,
    tsubsistema,
    ttecnico,
    tsupervisor,
    tturno,
    tefectosfalla,
    estado
  } = request.body;
  pool.query(
    "UPDATE bitacora SET tunidad = $1, tunidadnegocios = $2, tcaptura  = $3, tdescripcion = $4, ttiporeporte = $5, fhfecha = $6, tpiezasutilizadas = $7, tdisponibilidad = $8, tsistema = $9, tsubsistema = $10, ttecnico = $11,tsupervisor = $12,tturno = $13, tefectosfalla = $14, estado = $15 WHERE ecodbitacora = $16 RETURNING * ",
    [
      tunidad,
      tunidadnegocios,
      tcaptura,
      tdescripcion,
      ttiporeporte,
      fhfecha,
      tpiezasutilizadas,
      tdisponibilidad,
      tsistema,
      tsubsistema,
      ttecnico,
      tsupervisor,
      tturno,
      tefectosfalla,
      ecodbitacora,
      estado
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send(result);
    }
  );
};

const bajaRegistro = (request, response) => {
  const { id } = request.params;
  const { estado } = request.body;
  pool.query(
    "UPDATE bitacora SET estado = $1 WHERE ecodbitacora = $2 RETURNING * ",
    [estado, id],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send(result.rows[0]);
    }
  );
};

const eliminarRegistro = (request, response) => {
  const ecodbitacora = parseInt(request.params.id);
  pool.query(
    'DELETE FROM bitacora WHERE ecodbitacora = $1',
    [ecodbitacora],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send(result);
    }
  );
};

// api de mantenimientoprevetivo
const getMantPrev = (request, response) => {
  pool.query(
    "SELECT * FROM mantpreventivo ORDER BY ecodmantprev ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getMantPrevPorId = (request, response) => {
  const ecodeusuario = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM mantpreventivo WHERE ecodmantprev = $1",
    [ecodmantprev],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearMantPrev = (request, response) => {
  const {
    ecodmantprev,
    bestado,
    fk_eunidadnegocios,
    fk_eunidad,
    fhultimomantenimiento,
    ehorometro,
    eodometro,
    fk_etipomantenimiento,
  } = request.body;

  pool.query(
    "INSERT INTO mantpreventivo (ecodmantprev, bestado, fk_eunidadnegocios, fk_eunidad, fhultimomantenimiento, ehorometro, eodometro, fk_etipomantenimiento)VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ",
    [
      ecodmantprev,
      bestado,
      fk_eunidadnegocios,
      fk_eunidad,
      fhultimomantenimiento,
      ehorometro,
      eodometro,
      fk_etipomantenimiento,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Usuario agregado con exito");
    }
  );
};

const actualizarMantPrev = (request, response) => {
  const {
    ecodmantprev,
    bestado,
    fk_eunidadnegocios,
    fk_eunidad,
    fhultimomantenimiento,
    ehorometro,
    eodometro,
    fk_etipomantenimiento,
  } = request.body;
  pool.query(
    "UPDATE mantpreventivo SET bestado = $1, fk_eunidadnegocios  = $2, fk_eunidad = $3, fhultimomantenimiento = $4, ehorometro = $5, eodometro = $6, fk_etipomantenimiento = $7 WHERE ecodmantprev = $8 RETURNING * ",
    [
      ecodmantprev,
      bestado,
      fk_eunidadnegocios,
      fk_eunidad,
      fhultimomantenimiento,
      ehorometro,
      eodometro,
      fk_etipomantenimiento,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Usuario actualizado con exito");
    }
  );
};

const eliminarMantPrev = (request, response) => {
  const ecodmantprev = parseInt(request.params.id);
  pool.query(
    "DELETE FROM mantpreventivo WHERE ecodmantprev = $1",
    [ecodmantprev],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Usuario eliminado con exito");
    }
  );
};
// api de mantenimineto

const getMantenimiento = (request, response) => {
  pool.query(
    "SELECT * FROM mantenimineto ORDER BY ecodtipomantenimiento ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getMantenimientoPorId = (request, response) => {
  const ecodtipomantenimiento = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM mantenimineto WHERE ecodtipomantenimiento = $1",
    [ecodtipomantenimiento],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearMantenimiento = (request, response) => {
  const { ecodtipomantenimiento, ecantidad } = request.body;

  pool.query(
    "INSERT INTO mantenimineto (ecodtipomantenimiento, ecantidad)VALUES ($1,$2) RETURNING * ",
    [ecodtipomantenimiento, ecantidad],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarMantenimiento = (request, response) => {
  const { ecodtipomantenimiento, ecantidad } = request.body;
  pool.query(
    "UPDATE mantenimineto SET ecantidad = $1 WHERE ecodtipomantenimiento = $2 RETURNING * ",
    [ecodtipomantenimiento, ecantidad],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarMantenimiento = (request, response) => {
  const ecodtipomantenimiento = parseInt(request.params.id);
  pool.query(
    "DELETE FROM mantenimineto WHERE ecodtipomantenimiento = $1",
    [ecodtipomantenimiento],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

// api de piezas

const getPiezas = (request, response) => {
  pool.query(
    "SELECT * FROM piezas ORDER BY ecodpiezas ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getPiezasPorId = (request, response) => {
  const ecodpiezas = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM piezas WHERE ecodpiezas = $1",
    [ecodpiezas],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearPiezas = (request, response) => {
  const { ecodpiezas, ecodigo } = request.body;

  pool.query(
    "INSERT INTO piezas (ecodpiezas, ecodigo)VALUES ($1,$2) RETURNING * ",
    [ecodpiezas, ecodigo],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarPiezas = (request, response) => {
  const { ecodpiezas, ecodigo } = request.body;
  pool.query(
    "UPDATE piezas SET ecodigo = $1 WHERE ecodpiezas = $2 RETURNING * ",
    [ecodpiezas, ecodigo],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarPiezas = (request, response) => {
  const ecodpiezas = parseInt(request.params.id);
  pool.query(
    "DELETE FROM piezas WHERE ecodpiezas = $1",
    [ecodpiezas],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

//   api de sistema
const getSistema = (request, response) => {
  pool.query(
    "SELECT * FROM sistema ORDER BY ecodsistema ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getSistemaPorId = (request, response) => {
  const ecodsistema = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM sistema WHERE ecodsistema = $1",
    [ecodsistema],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearSistema = (request, response) => {
  const { ecodsistema, tnombre } = request.body;

  pool.query(
    "INSERT INTO sistema (ecodsistema, tnombre)VALUES ($1,$2) RETURNING * ",
    [ecodsistema, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarSistema = (request, response) => {
  const { ecodsistema, tnombre } = request.body;
  pool.query(
    "UPDATE piezas SET tnombre = $1 WHERE ecodsistema = $2 RETURNING * ",
    [ecodsistema, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarSistema = (request, response) => {
  const ecodsistema = parseInt(request.params.id);
  pool.query(
    "DELETE FROM sistema WHERE ecodsistema = $1",
    [ecodsistema],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

// api de subsistema
const getSubsistema = (request, response) => {
  pool.query(
    "SELECT * FROM subsistema ORDER BY ecodsubsistema ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getSubsistemaPorId = (request, response) => {
  const ecodsubsistema = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM subsistema WHERE ecodsubsistema = $1",
    [ecodsubsistema],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearSubsistema = (request, response) => {
  const { ecodsubsistema, tnombre } = request.body;

  pool.query(
    "INSERT INTO subsistema (ecodsubsistema, tnombre)VALUES ($1,$2) RETURNING * ",
    [ecodsubsistema, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarSubsistema = (request, response) => {
  const { ecodsubsistema, tnombre } = request.body;
  pool.query(
    "UPDATE subsistema SET tnombre = $1 WHERE ecodsubsistema = $2 RETURNING * ",
    [ecodsubsistema, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarSubsistema = (request, response) => {
  const ecodsubsistema = parseInt(request.params.id);
  pool.query(
    "DELETE FROM subsistema WHERE ecodsubsistema = $1",
    [ecodsubsistema],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

//   api de tiporeporte
const getTipoReporte = (request, response) => {
  pool.query(
    "SELECT * FROM tiporeporte ORDER BY ecodtiporeporte ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getTipoReportePorId = (request, response) => {
  const ecodtiporeporte = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM tiporeporte WHERE ecodtiporeporte = $1",
    [ecodtiporeporte],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearTipoReporte = (request, response) => {
  const { ecodtiporeporte, tnombre } = request.body;

  pool.query(
    "INSERT INTO tiporeporte (ecodtiporeporte, tnombre)VALUES ($1,$2) RETURNING * ",
    [ecodtiporeporte, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarTipoReporte = (request, response) => {
  const { ecodtiporeporte, tnombre } = request.body;
  pool.query(
    "UPDATE tiporeporte SET tnombre = $1 WHERE ecodtiporeporte = $2 RETURNING * ",
    [ecodtiporeporte, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarTipoReporte = (request, response) => {
  const ecodtiporeporte = parseInt(request.params.id);
  pool.query(
    "DELETE FROM tiporeporte WHERE ecodtiporeporte = $1",
    [ecodtiporeporte],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

//   api de tipousuario
const getTipousuario = (request, response) => {
  pool.query(
    "SELECT * FROM tipousuario ORDER BY ecodtipousuario ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getTipousuarioPorId = (request, response) => {
  const ecodtipousuario = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM tipousuario WHERE ecodtipousuario = $1",
    [ecodtipousuario],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearTipousuario = (request, response) => {
  const { ecodtipousuario, tdescripcionusuario, bestado } = request.body;

  pool.query(
    "INSERT INTO tipousuario (ecodtipousuario, tdescripcionusuario,bestado)VALUES ($1,$2,$3) RETURNING * ",
    [ecodtipousuario, tdescripcionusuario, bestado],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarTipousuario = (request, response) => {
  const { ecodtipousuario, tdescripcionusuario, bestado } = request.body;
  pool.query(
    "UPDATE tipousuario SET tdescripcionusuario = $1, bestado = $2 WHERE ecodtiporeporte = $3 RETURNING * ",
    [ecodtipousuario, tdescripcionusuario, bestado],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarTipousuario = (request, response) => {
  const ecodtipousuario = parseInt(request.params.id);
  pool.query(
    "DELETE FROM tipousuario WHERE ecodtipousuario = $1",
    [ecodtipousuario],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

//   api de unidad
const getUnidad = (request, response) => {
  pool.query(
    "SELECT * FROM unidad ORDER BY ecodunidad ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUnidadPorId = (request, response) => {
  const ecodunidad = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM unidad WHERE ecodunidad = $1",
    [ecodunidad],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearUnidad = (request, response) => {
  const { ecodunidad, tnombre } = request.body;

  pool.query(
    "INSERT INTO unidad (ecodunidad, tnombre)VALUES ($1,$2) RETURNING * ",
    [ecodunidad, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarUnidad = (request, response) => {
  const { ecodunidad, tnombre } = request.body;
  pool.query(
    "UPDATE unidad SET tnombre = $1 WHERE ecodunidad = $2 RETURNING * ",
    [ecodunidad, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarUnidad = (request, response) => {
  const ecodunidad = parseInt(request.params.id);
  pool.query(
    "DELETE FROM unidad WHERE ecodunidad = $1",
    [ecodunidad],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

//   api de unidad de  negodios
const getUnidadNegocios = (request, response) => {
  pool.query(
    "SELECT * FROM unidaddenegocios ORDER BY ecodunidadnegocios ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUnidadNegociosPorId = (request, response) => {
  const ecodunidadnegocios = parseInt(request.params.id);
  pool.query(
    "SELECT * FROM unidaddenegocios WHERE ecodunidadnegocios = $1",
    [ecodunidadnegocios],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).json(result.rows);
    }
  );
};

const crearUnidadNegocios = (request, response) => {
  const { ecodunidadnegocios, tnombre } = request.body;

  pool.query(
    "INSERT INTO unidaddenegocios (ecodunidadnegocios, tnombre)VALUES ($1,$2) RETURNING * ",
    [ecodunidadnegocios, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Agregado con exito");
    }
  );
};

const actualizarUnidadNegocios = (request, response) => {
  const { ecodunidadnegocios, tnombre } = request.body;
  pool.query(
    "UPDATE unidaddenegocios SET tnombre = $1 WHERE ecodunidadnegocios = $2 RETURNING * ",
    [ecodunidadnegocios, tnombre],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Actualizado con exito");
    }
  );
};

const eliminarUnidadNegocios = (request, response) => {
  const ecodunidadnegocios = parseInt(request.params.id);
  pool.query(
    "DELETE FROM unidaddenegocios WHERE ecodunidadnegocios = $1",
    [ecodunidadnegocios],
    (error, result) => {
      if (error) {
        throw error;
      }
      response.status(200).send("Eliminado con exito");
    }
  );
};

//   api de usuario
const getUsuario = (request, response) => {
  pool.query(
    "SELECT * FROM usuario ORDER BY ecodusuario ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUsuarioPorId = (request, response) => {
    const enumtrabajador = parseInt(request.params.enumtrabajador);
    pool.query("SELECT * FROM usuario WHERE enumtrabajador = $1", [enumtrabajador],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).json(result.rows);
      }
    );
};

const crearUsuario = (request, response) => {
    const { ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, ttipousuario, enumtrabajador, tcontra } = request.body;

    pool.query(
      "INSERT INTO usuario (enumtrabajador, tcontra)VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ",
      [ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, ttipousuario, enumtrabajador, tcontra ],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).send(result);
      }
    );
};

const actualizarUsuario = (request, response) => {
    const { ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario } = request.body;
    pool.query(
      "UPDATE usuario SET bstatus = $1, tnombre = $2, tapellidopaterno = $3, tapellidomatero = $4,fk_ecodtipousuario = $5 WHERE ecodunidadnegocios = $6 RETURNING * ",
      [ecodusuario, bstatus, tnombre, tapellidopaterno, tapellidomaterno, fk_ecodtipousuario],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).send("Actualizado con exito");
      }
    );
  };

const eliminarUsuario = (request, response) => {
    const ecodusuario = parseInt(request.params.id);
    pool.query(
      "DELETE FROM usuario WHERE ecodusuario = $1",
      [ecodusuario],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).send("Eliminado con exito");
      }
    );
};

//   api de kpis
const getKpis = (request, response) => {
  pool.query(
    "SELECT * FROM kpis ORDER BY ecodkpis ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getKpisPorId = (request, response) => {
    const ecodkpis = parseInt(request.params.id);
    pool.query(
      "SELECT * FROM kpis WHERE ecodkpis = $1",
      [ecodkpis],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).json(result.rows);
      }
    );
};

const crearKpis = (request, response) => {
    const { ecodkpis} = request.body;

    pool.query(
      "INSERT INTO kpis (ecodkpis)VALUES ($1) RETURNING * ",
      [ecodkpis],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).send("Agregado con exito");
      }
    );
};

const actualizarKpis = (request, response) => {
    const { ecodkpis} = request.body;
    pool.query(
      "UPDATE kpis SET ecodkpis = $1 WHERE ecodkpis = $2 RETURNING * ",
      [ecodkpis],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).send("Actualizado con exito");
      }
    );
  };

const eliminarKpis = (request, response) => {
    const ecodkpis = parseInt(request.params.id);
    pool.query(
      "DELETE FROM kpis WHERE ecodkpis = $1",
      [ecodkpis],
      (error, result) => {
        if (error) {
          throw error;
        }
        response.status(200).send("Eliminado con exito");
      }
    );
};

const fltrarFecha = (reuqest, response)=>{ 
  pool.query(
    "SELECT fhfecha FROM bitacora WHERE ecodbitacora = fhfecha",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};


module.exports = {
  actualizarKpis,
  fltrarFecha,
  getKpisPorId,
  crearKpis,
  eliminarKpis,
  getKpis,
  ObtencionRegistro,
  ObtencionRegistroPorId,
  crearRegistro,
  actualizarRegistro,
  eliminarRegistro,
  getMantPrev,
  getMantPrevPorId,
  crearMantPrev,
  actualizarMantPrev,
  eliminarMantPrev,
  getMantenimiento,
  getMantenimientoPorId,
  crearMantenimiento,
  actualizarMantenimiento,
  eliminarMantenimiento,
  getPiezas,
  getPiezasPorId,
  crearPiezas,
  actualizarPiezas,
  eliminarPiezas,
  getSistema,
  getSistemaPorId,
  crearSistema,
  actualizarSistema,
  eliminarSistema,
  getSubsistema,
  getSubsistemaPorId,
  crearSubsistema,
  actualizarSubsistema,
  eliminarSubsistema,
  getTipoReporte,
  getTipoReportePorId,
  crearTipoReporte,
  actualizarTipoReporte,
  eliminarTipoReporte,
  getTipousuario,
  getTipousuarioPorId,
  crearTipousuario,
  actualizarTipousuario,
  eliminarTipousuario,
  getUnidad,
  getUnidadPorId,
  crearUnidad,
  actualizarUnidad,
  eliminarUnidad,
  getUnidadNegocios,
  getUnidadNegociosPorId,
  crearUnidadNegocios,
  actualizarUnidadNegocios,
  eliminarUnidadNegocios,
  getUsuario,
  getUsuarioPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  bajaRegistro
};
