const Generator = require('yeoman-generator')

module.exports = class extends Generator{
  prompting(){
    return this.prompt([
      {
        type:'input',
        name:'name',
        message:'your project name',
        default:this.appname
      }
    ]).then((answers)=>{
      this.answers = answers
    })
  }
  writing(){
    // 把每一个文件都通过模版转换到目标路径
    const templates = [
      'public/favicon.ico',
      'public/index.html',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/App.vue',
      'src/main.js',
      'babel.config.js',
      'package.json',
      'package-lock.json',
      'README.md',
    ]
    templates.forEach((items)=>{
      // items => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(items),
        this.destinationPath(items),
        this.answers
      )
    })
  }
}
