(function(){
	const args = process.argv.splice(2);
	const argMap = args.filter(arg => arg.includes('=')).map(arg => arg.split('='));
	for(const arg of argMap) {
		process.env[arg[0]] = arg[1];
	}
})()
