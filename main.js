const prompt = require('prompt');
const colors = require('colors/safe');

const schema = {
  properties: {
    branch_version: {
      pattern: /^[0-9]+[0-9\.]*[0-9]+$/,
      message: 'branch_version must be only digits with dots',
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
      message: 'feature_label must be only letters, digits, or dashes'
    }
  }
}

prompt.message = '🍺';
prompt.delimiter = colors.green(': ')
prompt.start();

prompt.get(schema, function (err, result) {
  console.log('Command-line input received:');
  console.log('  branch_version: ' + result.branch_version);
  console.log('  feature_label: ' + result.feature_label);
  console.log('  JIRA_number: ' + result.JIRA_number);
  console.log('  dev_label: ' + result.dev_label);
});

