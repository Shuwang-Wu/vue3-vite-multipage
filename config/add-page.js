/*
 * @Author: Shuwang_wu
 * @Date: 2022-06-06 14:11:38
 * @LastEditTime: 2022-06-06 14:49:17
 * @LastEditors: Shuwang_wu
 * @FilePath: \h5-pages\config\add-page.js
 * @Description: add new page
 */
const fs = require("fs")
const path = require("path")
const PAGE = process.env.npm_config_page

const copy = (src, dst) => {
  let paths = fs.readdirSync(src)
  paths.forEach((path) => {
    var _src = src + "/" + path
    var _dst = dst + "/" + path
    fs.stat(_src, (err, stats) => {
      if (err) throw err
      if (stats.isFile()) {
        let readable = fs.createReadStream(_src)
        let writable = fs.createWriteStream(_dst)
        readable.pipe(writable)
      } else if (stats.isDirectory()) {
        checkDirectory(_src, _dst, copy)
      }
    })
  })
}

const checkDirectory = (src, dst, callback) => {
  fs.access(dst, fs.constants.F_OK, (err) => {
    if (err) {
      fs.mkdirSync(dst)
      callback(src, dst)
    } else {
      callback(src, dst)
    }
  })
}

const SOURCES_DIRECTORY = "./src/pages/guide"
checkDirectory(SOURCES_DIRECTORY, path.resolve(`./src/pages/${PAGE}`), copy)
