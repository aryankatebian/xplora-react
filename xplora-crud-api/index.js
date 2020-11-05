const { v4: uuidv4 } = require('uuid');

// get all the issues
function getIssues() {
  if (localStorage.getItem('issue') === null) {
    issue = [];
  } else {
    issue = JSON.parse(localStorage.getItem('issue'));
  }
  return issue;
}
module.exports.getIssues = getIssues;

// get single issues
function getSingleIssue(e) {
  let data;
  const issues = getIssues();
  issues.forEach((issue, index) => {
    if (issue[0].id === e) {
      return (data = issue[0]);
    }
  });
  return data;
}
module.exports.getSingleIssue = getSingleIssue;

// add a new issue
function addIssue(name, title, des) {
  const issue = getIssues();
  const data = [
    { name: name, title: title, des: des, id: uuidv4(), isDone: false },
  ];
  issue.push(data);
  localStorage.setItem('issue', JSON.stringify(issue));
}
module.exports.addIssue = addIssue;

// remove issue
function removeIssue(id) {
  const issues = getIssues();
  issues.forEach((issue, index) => {
    if (issue[0].id === id) {
      issues.splice(index, 1);
    }
  });

  localStorage.setItem('issue', JSON.stringify(issues));
  return issues;
}
module.exports.removeIssue = removeIssue;

// modify issue
function modifyIssue(id, title, name, des, isDone) {
  const issues = getIssues();
  issues.forEach((issue, index) => {
    if (issue[0].id === id) {
      issue[0].title = title;
      issue[0].name = name;
      issue[0].des = des;
      issue[0].isDone = isDone;
    }
  });
  localStorage.setItem('issue', JSON.stringify(issues));
  return issues;
}
module.exports.modifyIssue = modifyIssue;
