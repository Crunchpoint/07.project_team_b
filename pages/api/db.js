// const { createPool } = require("mysql");

// const pool = createPool({
//   host: process.env.NEXT_PUBLIC_HOST,
//   user: process.env.NEXT_PUBLIC_USER,
//   password: process.env.NEXT_PUBLIC_PASSWORD,
//   database: process.env.NEXT_PUBLIC_DATABASE,
//   port: process.env.NEXT_PUBLIC_PORT,
// });

// pool.getConnection(() => {
//   console.log("success");
// });

// const executeQuery = async (query, arraParms) => {
//   return await new Promise((resolve) => {
//     pool.query(query, arraParms, (err, data) => {
//       resolve(data);
//     });
//   });
// };

// module.exports = { executeQuery };

const oracledb = require("oracledb");

async function initialize() {
  try {
    const pool = await oracledb.createPool({
      user: "ADMIN",
      password: "Etwlgns47823",
      connectString:
        "(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.ap-chuncheon-1.oraclecloud.com))(connect_data=(service_name=gc9715b6815211e_d0yybjmjcnoxwilw_medium.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))",
    });
    console.log("Connection Pool created!");
    return pool;
  } catch (err) {
    console.error("init() error: " + err.message);
  }
}

let pool;

async function executeQuery(query, arraParms) {
  if (!pool) {
    pool = await initialize();
  }

  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.execute(query, arraParms);
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error("Error closing connection:", error.message);
      }
    }
  }
}

module.exports = { executeQuery };
