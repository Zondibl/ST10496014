const sql = require("mssql")

// Configure the connection
const config = {
  user: "ST10496014",
  password: "Greenzone@?1",
  server: "st10496014bookingsystem.database.windows.net",
  database: "cldv7111_st10496014",
  options: {
    enableArithAbort: true // Required option for Node.js applications
  }
}

// Establish a connection to the database
sql.connect(config, (err) => {
  if (err) {
    console.error("Error connecting to SQL Server:", err)
    return
  }

  console.log("Connected to SQL Server!")

  // Perform database operations here

  // Close the connection when done
  sql.close()
})