const { exec } = require("child_process");
const moment = require('moment');
const path = require('path');

function run(start, stop, { randomIntervalDays = [1, 3], randomCommits = [1, 10] } = {}) {
  const dates = getDates(start, stop, { randomIntervalDays, randomCommits });

  // console.log(dates);
  update(dates);
}

function getDates(from, to, { randomIntervalDays, randomCommits }) {
  const dates = [];
  const start = moment(from);
  const end = moment(to);

  let curr = start;
  let repeatTimes = 1;

  while(curr.isBefore(end)) {
    dates.push(formatDate(curr));

    repeatTimes -= 1;

    if (repeatTimes <= 0) {
      const intervalDays = getRandomNum(...randomIntervalDays);
      curr = curr.add(intervalDays, 'days');
      repeatTimes = getRandomNum(...randomCommits);
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
// run('2023-05-27', '2023-06-13');
// run('2023-07-30', '2023-08-13', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-08-24', '2023-08-25', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-09-02', '2023-09-04', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-09-09', '2023-09-11', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-09-11', '2023-09-14', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-09-19', '2023-09-20', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-09-24', '2023-09-26', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-09-29', '2023-10-01', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-10-03', '2023-10-07', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-11-03', '2023-11-06', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-11-11', '2023-11-13', { randomIntervalDays: [1, 1], randomCommits: [1, 3] });
// run('2023-11-25', '2023-11-27', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2023-11-27', '2023-12-04', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2023-12-04', '2023-12-11', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2023-12-04', '2023-12-18', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2023-12-23', '2023-12-25', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2024-01-06', '2024-01-08', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2024-01-13', '2024-01-15', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
// run('2024-01-20', '2024-01-22', { randomIntervalDays: [1, 1], randomCommits: [1, 10] });
run('2025-01-01', '2025-01-16', { randomIntervalDays: [1, 3], randomCommits: [1, 10] });

/*
echo "xxx" >> ./UE4/books/test.txt
git commit -m "update"
GIT_COMMITTER_DATE="2023-05-07T09:51:07" git commit --amend --date="2023-05-07T09:51:07" -m "update"
*/
