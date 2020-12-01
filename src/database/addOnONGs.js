module.exports = async function(add,{profileValue} ){
  console.log("adong1")
  
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
    
    console.log("adong2")
 

}