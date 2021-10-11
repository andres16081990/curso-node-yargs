'use strict'
const fs = require('fs');
const colors = require('colors');

const createFile = async(number,list) =>{
try {
    let exit = '';
    if(list){
        console.log('=================='.green);
        console.log(`=Tabla Del ${number}=`.red);
        console.log('=================='.green);
    }
    
        
        for(let i= 0; i <= 10; i++){
            exit+=`${number} x ${i} = ${number * i} 
            `;
        };
        if(list){
            console.log(exit.cyan);
        }
    
    fs.writeFileSync(`./out/Multiplication-tables-${number}.txt`,exit);
    
    return`Multiplication table ${number} created`    
} catch (error) {
    throw error
}};

module.exports = {
    createFile
}