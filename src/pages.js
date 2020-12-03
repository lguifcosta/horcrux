const { render } = require('nunjucks');
const Database = require('./database/db')
const dataBase2 = require('./database/admition');
const nodemon = require('nodemon');

//const {  getSubjects, convert } = require("./utils/format")

function pageLanding (req, res) {
    return res.render("index.html")
}

async function donate (req, res)  {
  //  const filters = req.query

  //  if (1+1 ==2) {
   // console.log("redimensionamento")
       
   // return res.render("study.html");
        
   // }else{console.log("pages-ln17")} 
   
   // const timeToMinutes = convertHoursToMinutes(filters.time)
    

 

//caso haja erro na consulta de dados 
const add = await dataBase2
const profiles = await add.all("SELECT * FROM profile");



  return res.render("donate.html", { profiles})
}
  
function register (req, res) {
   
    return res.render("register.html" )
}
function pageMore (req, res){
  return res.render("more.html")
}
async function saveOng(req, res) {
  console.log("2")
  const createProffy = 
  require('./database/createProffy')
  
    const proffyValue = {
    name: req.body.name ,
    number: req.body.number ,
    pix: req.body.pix,
    bio: req.body.bio
   }



    try {
      
        const db = await Database
    await createProffy(db, { proffyValue})

  //  let queryString = "?subject" + req.body.name
  //  queryString+= "&weekday" + req.body.weekday[0]
  // queryString+= "&time" + req.body.time_from[0]
  
  return res.redirect("/ajudar", )
 } catch (error) {
       console.log(error) }

    }
    async function login(req,res){


     return res.render("login.html") 
    
    
    }

    async function loged(req, res){
    const Un = "horcrux1"
    const Pw = "horcruxsh2020"
      const pass = {
        username: req.body.username ,
        password: req.body.password
      }
   
    
      if(pass.username == Un && pass.password == Pw){
        return res.redirect("30Grsv32bs")
      }else{
        return res.redirect("/")
      }

     
    }

    async function manager(req,res){
      
      if(1+1 == 2){
      const db = await Database
    const proffys = await db.all("SELECT * FROM proffys");

    

  
      return res.render("manager.html",{proffys})
    }else{ 
      return res.redirect("/")
    }
    }

    async function admit (req,res){
      console.log("new ong admited")
      
      const addOnONGs = require('./database/addOnONGs')
      const profileValue = {
        name: req.body.name,
        number: req.body.number,
        pix: req.body.pix,
        bio: req.body.bio
      }
      try{
        
        
      const add = await dataBase2
      
        await addOnONGs(add, {profileValue})
      

       

        return res.redirect("/ajudar")
    }catch(error){
      
    }
    }

module.exports = {
    pageLanding,
    donate,
    register,
    pageMore, 
    saveOng,
    login,
    loged,
    manager,
    admit
}