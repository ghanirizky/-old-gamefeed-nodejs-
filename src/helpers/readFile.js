const { PATH_FILE } = require("../common/constant");
var fs = require("fs");
    

exports.readFile = async(file_name) => {

    let rawdata = await fs.readFileSync(`${PATH_FILE}/${file_name}`);
    let data = JSON.parse(rawdata);

    return data
}