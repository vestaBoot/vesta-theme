const { genIndex, Packager } = require("@vesta/devmaid");
const gulp = require("gulp");

let pkgr = new Packager({
    root: __dirname,
    src: "src",
    targets: ["es6"],
    files: [".npmignore", "LICENSE", "README.md"],
    publish: "--access=public",
});

const pkgrTasks = pkgr.createTasks();

module.exports = {
    default: gulp.series(indexer, pkgrTasks.default),
    publish: gulp.series(indexer, pkgrTasks.deploy, pkgrTasks.publish)
}

function indexer() {
    genIndex("src");
    return Promise.resolve();
}