const argv = require('yargs')
                .option('n',{
                    alias: 'number',
                    type: 'number',
                    demandOption: true,
                    describe:'this is the number base to create the table '
                })
                .check((argv,options)=>{
                    if(isNaN(argv.n)){
                        throw 'the number has to be a number';
                    };
                    return true;
                })
                .option('l',{
                    alias:'list',
                    type:'boolean',
                    demandOption: false,
                    describe:'allows you to see the table in console'
                })
                .check((argv,options)=>{
                    const isBoolean = typeof argv.l
                    if(isBoolean || undefined){
                        return true
                    }
                    if(!isBoolean){
                        console.log(argv.l)
                        throw 'The flag must be a boolean'
                    }
                })
                .argv;

module.exports = argv