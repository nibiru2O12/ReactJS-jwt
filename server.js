const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = require('express')();
const port = 3001;

app.use(bodyparser.urlencoded({extended:true}))

const secret = "shhhhh";
const token_expiration = 60;

app.get('/login',(req,res)=>{
    const token = createToken({user:'rj sample'})
    verifyToken(token)
    res.send('ok')
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