var e=require("express");
var r=e.Router();
var multer=require("multer");
var conn=require("./conn");
r.post("/regi",(req,res)=>{
    console.log("sita ram ");
    console.log(req.body);
    const {status,fname,email,password,phonenum}=req.body;
    conn.query("select * from signup where email=?",[email],(err,result)=>
    {
        if(err){
            res.json({
                m:"star"
            });
        }
        else{
            if(result.length>0){
                res.send({
                    m:"already exist",
                    rk:result
                });
            }
            else{
                conn.query("insert into signup set?",req.body,(err,result1)=>
                {
                    if(err){
                        res.json({
                            m:err
                        });
                    }
                    else{
                        res.send({
                            m:result1,
                            k:"submitted succwssfully"
                        });
                    }
                });
        }
    }
    });
});


r.post('/login',(req,res)=>{
    console.log(req.body);
    email=req.body.email;
    ps=req.body.password;
    conn.query("select * from signup where email=? and password=?",[email,ps],(err,result)=>
    {
        if(err)
        {
            res.send({
                err:err
            });
        }
        else{
            if(result.length>0)
            {
                res.json({
                    ms:"true",
                    email:email,
                    ps:ps
                });
                conn.query("update signup set status=? where email=?",["active",email],(err,rs)=>
                {
                    if(err)
                    {
                        res.send(err);
                    }
                });
            }
            else{
                res.json({
                    ms:"not correct"
                })
            }
        }
    });
});
r.post('/pdata',(req,res)=>
{  
    conn.query("insert into product set?",req.body,(err,result)=>
    {
        if(err){
            res.json({
                m:err
            });
        }
        else{
            res.send({
                m:result,
                k:"submitted succwssfully"
            });
        }   
    })
});
r.post('/cdata',(req,res)=>
{
    conn.query("insert into catagary set?",req.body,(err,result)=>
    {
        if (err)
        {
            res.send(err);
        }
        else{
            res.send({
                m:"send successfully"
            });
        }
    });
});
r.get('/getdata',(req,res)=>
{
    conn.query("select * from catagary",(err,result)=>
    {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});
r.post('/delete',(req,res)=>
{
    const cat=req.body.k;
    conn.query("delete from catagary where cat=?",[cat],(err,result)=>
    {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});
r.get('/getpdata',(req,res)=>
{
    conn.query("select * from product",(err,result)=>
    {
        console.log(result);
        if(err)
        {
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});
r.post('/delete1',(req,res)=>
{
    pname=req.body.k;
    conn.query("delete from product where pname=?",[pname],(err,result)=>
    {
        if(err)
        {
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});
r.post('/submit2',(req,res)=>
{
    cn=req.body.cname;
    em=req.body.email;
    c=req.body.contact;
    city=req.body.city;
    a=req.body.address;
    pprice=req.body.pprice
    pname=req.body.pname;
    q=req.body.quantity;
    conn.query("insert into booking values(?,?,?,?,?,?,?,?)",[cn,em,c,city,a,pname,pprice,q],(err,result)=>
    {
      if(err)
      {
        res.send(err);
      }
      else{
        console.log("submitted ");
      }
    }
    );
});
r.post("/power",(req,res)=>
{
    conn.query("select * from signup where status=?",["active"],(err,result)=>
    {
        if(err)
        {
            res.send(err);
        }
        else
        {
          if(result.length==1)
          {
            res.json(
                {
                  submit:true,
                  data:result[0]  
                }
            )
          }  
          else
          {
            res.json(
                {
                    submit:false
                }
            )
          }
           

        }
    });
});
module.exports=r;