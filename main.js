#!/usr/bin/env node
 //第一行其中#!/usr/bin/env node表示用node解析器执行本文件。

 const program = require('commander')
 // const pkg = require('../package')
 const chalk = require('chalk')
 const download = require('download-git-repo');
 const ora = require('ora');
 const spinner = ora('Loading undead unicorns');
 
 /**
  * version
  */
 // program
 // .version(chalk.green(`${pkg.version}`))
 program
     .version(chalk.green('1.0.1'))
 
 /**
  * init 项目
  */
 program
     .command('create <app-name>')
     .description('generate a project from a remote template (legacy API, requires ./wk-init)')
     .option('-c, --clone', 'Use git clone when fetching remote template')
     .action((appName) => {
         console.log(appName)
         spinner.start('开始下载');
         download('direct:https://github.com/parasol-pubilc-project/parasol-template.git', appName, {
             clone: true
         }, err => {
             if (err) {
                 spinner.fail(chalk.green('下载失败 \n' + err));
                 process.exit();
             }
             spinner.succeed(chalk.green(`下载成功`));
         });
     })
 
 program.parse(process.argv)