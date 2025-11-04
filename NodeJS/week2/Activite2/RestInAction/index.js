const express = require ('express');
const app = express();
const port = 4000;
const   resourcesRouter = require('./src/routes/resources.routes');



app.use(resourcesRouter);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});