const { PATH_FILE } = require("../common/constant");
var fs = require("fs");
    

exports.createFile = async(file_name, data) => {
    await fs.writeFile (`${PATH_FILE}/${file_name}`, JSON.stringify(data), function(err) {
        if (err) {
            console.log(err)
            return false;
        }
        return true
        }
    );
}