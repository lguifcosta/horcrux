module.exports = async function(add,{profileValue} ){
  
  
    const selectedProfile = await add.run(`
    INSERT INTO profile(
        name, 
        number,
        pix, 
        bio
    )VALUES(
        "${profileValue.name}",
        "${profileValue.number}",
        "${profileValue.pix}",
        "${profileValue.bio}"
    )
    `)
    
 
 

}