const express = require("express");
const app = express();
app.use(express.static("public"));
const servicesController = require("./controllers/ServicesController");
const employeesController = require("./controllers/EmploeesController");
const usersController = require("./controllers/UsersController");
app.route("/services")
    .get(servicesController.get);
app.route("/users")
    .get(usersController.get);
app.route("/employees")
    .get(employeesController.get);
app.listen(3000);