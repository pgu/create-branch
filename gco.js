#!/usr/bin/env node

const prompt = require('prompt');
const colors = require('colors/safe');
const shell = require('shelljs');

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}

const schema = {
  properties: {
    branch_version: {
      pattern: /^([0-9]+([0-9\.]*[0-9]+)*|master)$/,
      message: 'branch_version must be only digits with dots or \'master\'',
      required: true
    },
    feature_label: {
      pattern: /^[a-zA-Z0-9\-]+$/,
      message: 'feature_label must be only letters, digits, or dashes'
    },
    JIRA_number: {
      pattern: /^[0-9]+$/,
      message: 'JIRA_number must be only digits'
    },
    dev_label: {
      pattern: /^[a-zA-Z0-9\-]+$/,
      message: 'dev_label must be only letters, digits, or dashes'
    }
  }
}

prompt.message = '-';
prompt.delimiter = colors.green(': ')
prompt.start();

prompt.get(schema, (err, result) => {
  
  if (err) {
    console.error(err);
    shell.exit(1);
  }

  const feature_label = result.feature_label ? '__' + result.feature_label : ''
  const full_name = [
    result.branch_version, 
    feature_label,
    result.JIRA_number,
    result.dev_label
  ].filter(v => !!v)
  .join('_');

  console.log('-------------');
  console.log('🍺  Full name: ' + colors.bgGreen(colors.black(' ' + full_name + ' ')));
  console.log('-------------');

  shell.exec('git checkout -b ' + full_name)
});

