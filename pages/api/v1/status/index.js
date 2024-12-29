import database from "infra/database.js";

const status = async (request, response) => {
  // console.log("🚀 ~ database:", database);
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log("🚀 ~ status ~ result:", result.rows);
  response.status(200).json({ message: "ok" });
};

export default status;
