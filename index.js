const express = require('express');
require('./config');
const Product = require('./product');
const app = express();

app.use(express.json())

app.post('/create',async (req,resp)=>{
    let data =  new Product(req.body)
    let result  = await data.save()
    console.log(result)
    resp.send(result)

});

app.delete('/delete/:_id',(req,resp) =>{
    let data = Product.deleteOne(req.params)
    resp.send(data) 

})
app.get('/list',(req,resp)=>{
    let data = Product.find()
    resp.send(data)

})


app.put('/update:_id',(req,resp)=>{
    let data = Product.updateOne(req.params,
        {
            $set:req.body
        })

        req.send(data)

})
app.listen(4000);