const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)

/* MONGOOSE SETUP */
const PORT = 3001;
MONGO_ConnectionString = "mongodb+srv://pranitabhadviya:UkoT9Jln2NLZy2Pc@backenddb.nkfk0k0.mongodb.net/HostHaven?retryWrites=true&w=majority"
mongoose
  .connect("mongodb+srv://pranitabhadviya:UkoT9Jln2NLZy2Pc@backenddb.nkfk0k0.mongodb.net/HostHaven?retryWrites=true&w=majority", {
    dbName: "HostHeaven_1",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));