const express=require("express")
const bodyParser=require("body-parser")
const dotenv=require("dotenv")
const cors=require("cors")

const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get("",(req,res)=>{
    res.status(200).send("Feigi Steinhaus👍")
})

app.listen(3001, () => {
    console.log(`my app is listening in http://localhost:3001`);
});

const sdk = require('api')('@render-api/v1.0#ja8rb1jlsxhh7qu');

sdk.auth('rnd_VgqLiNh4uWL6WMs1mFwGYNmbKwCS');
sdk.getServices({limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));