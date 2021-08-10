var FileSaver = require('file-saver');
var zip = require('./zip');

module.exports = function(gj, options) {
    var content = zip(gj, options);
    FileSaver.saveAs(content, 'download.zip');
};
