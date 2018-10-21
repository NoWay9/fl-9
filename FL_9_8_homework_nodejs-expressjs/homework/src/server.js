const express = require('express');
const bodyparser= require('body-parser');
const app = express();
const route = require('./routes');
const authorizationMiddleware = require('./middlewares/delete-authorization');
const port = 3000;
app.use(bodyparser.json());
app.use(authorizationMiddleware.authorization());
app.use(route);
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});