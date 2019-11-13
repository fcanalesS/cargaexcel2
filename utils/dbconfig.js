module.exports = {
    user          : process.env.USER,
  
    // Get the password from the environment variable
    // NODE_ORACLEDB_PASSWORD.  The password could also be a hard coded
    // string (not recommended), or it could be prompted for.
    // Alternatively use External Authentication so that no password is
    // needed.
    password      : process.env.PASSOWRD,
  
    // For information on connection strings see:
    // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
    connectString : "(DESCRIPTION=\n" +
                    "    (ADDRESS=\n" +
                    "      (PROTOCOL="+ process.env.PROTOCOL +")\n" +
                    "      (HOST="+ process.env.HOST +")\n" +
                    "      (PORT="+ process.env.PORT +")\n" +
                    "    )\n" +
                    "    (CONNECT_DATA=\n" +
                    "      (SID=" + process.env.SID + ")\n" +
                    "    )\n" +
                    "  )",
  
    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://oracle.github.io/node-oracledb/doc/api.html#extauth
    externalAuth  : false
  };


  /**
   * {
                user          : "system",
                password      : "oracle",
                connectString : "localhost:49161/XE"
        }
   */