console.log(process.argv.slice(2));

concatFiles(process.argv[2], ...process.argv.slice(3));
