import app from "./app";
import connectDB from "./config/db";

const PORT = process.env.PORT || 3333;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

