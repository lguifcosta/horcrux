const database = require('./db.js')
const createProffy = require('./createProffy')

database.then(async (db)=>{
        //inserir dados
        proffyValue= {
        name: "Diego Fernandes",
        whatsapp:"98988430394",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br></br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.",
        }

        classValue={

            //O proffy id virá pelo banco de dados

        }

await createProffy(db, {proffyValue, classValue})

 //consultar os dados inseridos

 //todos os proffys 

        const selectedProffys = await db.all("SELECT * FROM proffys")
       // console.log(selectedProffys)
        var tam = selectedProffys.length
        console.log(tam)
        //consultar as classes de um determinado proffy 
        //e trazer junto os dados dele
        const selectClassesAndProffys = await db.all(`
            SELECT classes.* ,proffys.*        
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
        `)
        //console.log(selectClassesAndProffys)

 })