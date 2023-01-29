const path = require('path');
const fs = require('fs');
const { Readable } = require('stream');

const mkdirsSync = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);  //创建的目录路径及权限
            return true;
        }
    }
}

const bufferToStream = (binary) => {
    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });
    return readableInstanceStream;
}

module.exports = {mkdirsSync, bufferToStream}