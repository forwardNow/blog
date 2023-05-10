const { exec } = require("child_process");
const moment = require('moment');
const path = require('path');

function run(start, stop) {
  const dates = getDates(start, stop);

  // console.log(dates);
  update(dates);
}

function getDates(from, to) {
  const dates = [];
  const start = moment(from);
  const end = moment(to);

  let curr = start;
  let commitCount = 0;

  while(curr.isBefore(end)) {
    dates.push(formatDate(curr));

    commitCount -= 1;

    if (commitCount <= 0) {
      const intervalDays = getRandomNum(1, 3);
      curr = curr.add(intervalDays, 'days');
      commitCount = getRandomNum(1, 10);
    }
  }

  return dates;
}

function formatDate(date) {
  return moment(date).add(18, 'hours')
    .add(getRandomNum(0, 6 * 60 - 1), 'minutes') // [0, 6 * 60 - 1]
    .add(getRandomNum(0, 59), 'seconds') // [0, 59]
    .format('YYYY-MM-DDTHH:mm:ss')
}

function getRandomNum(start, end) {
  // [0, 1) -> [start, end]
  // [start, end] - start = [0, end - start]
  // [0, end - start + 1] =  [0, end - start)
  return Math.floor(Math.random() * (end - start + 1) + start);
}


const STUDY_REPO_PATH = path.resolve(__dirname, '../../study');
const FILE_PATH = './UE4/books/test.txt';
let MAX_PUSH_COMMIT_NUMS = 500;

async function update(dates) {
  let count = 0;

  for (let i = 0, len = dates.length; i < len; i++) {
    const date = dates[i];
    const moment = `update on ${date}`;

    await execCommand(`echo "${moment}" >> ${FILE_PATH}`, { cwd: STUDY_REPO_PATH });
    await execCommand(`git add -A"`, { cwd: STUDY_REPO_PATH });
    await execCommand(`git commit -am "update all"`, { cwd: STUDY_REPO_PATH });
    await execCommand(`set GIT_COMMITTER_DATE=${date} && git commit --amend --date="${date}" -m "update"`, { cwd: STUDY_REPO_PATH });

    count += 1;

    if (count >= MAX_PUSH_COMMIT_NUMS) {
      count = 0;
      await execCommand(`git push`, { cwd: STUDY_REPO_PATH });
      await execCommand(`echo "" > ${FILE_PATH}`, { cwd: STUDY_REPO_PATH });
    }
  }

  await execCommand(`git push`, { cwd: STUDY_REPO_PATH });
}

function execCommand(command, options = {}) {
  console.log(`start executing command: ${command}`);

  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
        if (error) {
          console.error(`~~~~~~~~~~~~ [ ${command} ] error start ~~~~~~~~~~~~`);
          console.error(error.message);
          console.error(`~~~~~~~~~~~~ [ ${command} ] error end ~~~~~~~~~~~~~~`);
          reject(error);
          return;
        }

        if (stderr) {
          console.warn(`~~~~~~~~~~~~ [ ${command} ] stderr start ~~~~~~~~~~~~`);
          console.warn(stderr);
          console.warn(`~~~~~~~~~~~~ [ ${command} ] stderr end ~~~~~~~~~~~~~~`);
        }

        if (stdout) {
          console.log(`~~~~~~~~~~~~ [ ${command} ] stdout start ~~~~~~~~~~~~`);
          console.log(stdout);
          console.log(`~~~~~~~~~~~~ [ ${command} ] stdout end ~~~~~~~~~~~~~~`);
        }

        resolve(stdout);
      },
    );
  });
}


// run('2014-01-01', '2014-02-01');
// run('2014-02-01', '2014-03-01');
// run('2014-03-01', '2014-04-01');
run('2014-12-01', '2023-04-01');

/*
echo "xxx" >> ./UE4/books/test.txt
git commit -m "update"
GIT_COMMITTER_DATE="2023-05-07T09:51:07" git commit --amend --date="2023-05-07T09:51:07" -m "update"
*/
