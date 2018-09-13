const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = require('express')();
const port = 3001;

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

const secret = "shhhhh";
const token_expiration = 10;

app.post('/api/login',(req,res)=>{
    const {username,password} = req.body;
    const token = createToken({username,password})
    res.send(token)
});

function createToken(payload) {
    return jwt.sign(payload, secret,{ expiresIn: token_expiration })
}

async function verifyToken(token) {
   try{
        const decoded = await jwt.verify(token,secret)
        return decoded
   }catch(e){
        console.log(e)
        return false
   }
}

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})