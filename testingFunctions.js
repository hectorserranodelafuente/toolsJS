// Testing functions
var expectConsole = ( fx, args, resultExpected, stringShowed ) => {
					 expect(fx,args,resultExpected) ? console.log("%c"+stringShowed+" => TRUE"  ,'background-color:green;color:white') 
												    : console.log("%c"+stringShowed+" => FALSE" ,'background-color:red;color:white')
																  }
var expect = ( fx, args, resultExpected) => ( fx.apply(this,args) === resultExpected ) ? true : false

/* Example
var showFirstCharacter = (s) => s[0]

expectConsole(showFirstCharacter,["hello"],'h', "The first character of the word hello is expected to be h ") // TRUE
expectConsole(showFirstCharacter,["hello"],'e', "The first character of the word hello is expected to be e ") // FALSE
*/