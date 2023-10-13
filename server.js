const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const app = require('./middlewares/app');
const server = http.createServer(app);
server.listen(port,(err)=>{
    if(err){
        process.exit(1);
    }
    console.log(`Server Running at PORT : ${port}`);
});