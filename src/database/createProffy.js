module.exports = async function(db, {proffyValue, classValue}){
    //inserir dados na table de teachers
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            number,
            pix,
            bio
        ) VALUES (
        " ${proffyValue.name}",
        " ${proffyValue.number}",
        "${proffyValue.pix}",
        " ${proffyValue.bio}"
        );  
        `)
console.log("CPjs")
    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela 

    const insertedClass = await db.run(`
        INSERT INTO classes (
                proffy_id
            ) VALUES (
            " ${proffy_id}"
            );
            `)
    
console.log("CPjs2")
    
    //inserir dados na tabela class_schendule

 
}