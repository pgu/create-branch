const prompt = require('prompt');



//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['branch_version', 'feature_label', 'JIRA_number', 'dev_label'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  branch_version: ' + result.branch_version);
  console.log('  feature_label: ' + result.feature_label);
  console.log('  JIRA_number: ' + result.JIRA_number);
  console.log('  dev_label: ' + result.dev_label);
});

