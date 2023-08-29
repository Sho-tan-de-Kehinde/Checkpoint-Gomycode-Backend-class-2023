const passwordgenerate = require('generate-password');

function generate(){

let password = passwordgenerate.generate({
    length: 10,
    numbers: true,
    symbols: false,
});

return password;

}

module.exports = generate;