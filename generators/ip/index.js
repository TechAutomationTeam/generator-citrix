'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.Base.extend({
  constructor: function()
  {
    yeoman.Base.apply(this,arguments);
  },
  initializing: function()
  {
  },
  writing: function()
  {
    //write the file to the directory
    this.fs.copyTpl(
      this.templatePath('_NSIP.cs'),
      this.destinationPath('NSIP.cs'),
        {appName:this.config.get('appName'),
          nsUsername:this.config.get('nsUsername'),
          nsPassword:this.config.get('nsPassword'),
          nsAddress:this.config.get('nsAddress'),
          nsPort:this.config.get('nsPort')});
    this.log('\n');
    this.log(chalk.white('Added the Netscaler IP API helper class to the current project.'));
    this.log(chalk.white('To use the newly added code, you can added the following call in your code where needed.'));
    this.log('\n');
    this.log(chalk.bold.cyan('await Listips();'));
    this.log('\n');
  }
});
