const env = 'local';
let DbName = 'sargatech_a1abilities';
let domainName = 'a1.sargatechnology.com';


console.log('env...', env);

if (env === 'prod') {
  DbName = 'sargatech_a1abilities';
  domainName = 'a1.sargatechnology.com'
} else {  
  DbName = 'a1abilities'
  domainName = 'localhost:5000'
}

module.exports = { dbName: DbName, domainName: domainName, env: env };