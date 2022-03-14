const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

// if(process.env.NODE_ENV !== "production"){
//     require('dotenv').config();
// }
// require('./utils/connectdb');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true,
    optionsSuccessStatus:200,
}));

app.use(express.static(path.join(__dirname, "frontend", "build")))


app.get('/', (req,res) => {
    res.send('HOME');
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Serving on PORT ${PORT}`);
})