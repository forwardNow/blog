/*
https://api.bilibili.com/x/web-interface/wbi/view?aid=807451085&w_rid=def4f859edefd4a75d624c8fa5b63d1d
*/


const plan = {
  partCountPerDay: 10,
  startIndexOfParts: 38,
  startDateOfPlan: Date.now(),
}
function main() {
  const videoParts = getVideoParts();
  buildTable(videoParts, partCountPerDay, startIndexOfParts, startDateOfPlan);
}

function getVideoParts() {
  /*
  <div id="multi_page">
    <ul class="list-box">
      <li class="">
        <a href="/video/BV1834y1676P?p=1" class="router-link-active" title="Day1.学习目标">
          <div class="clickitem">
            <div class="link-content">
              <img src="//s1.hdslb.com/bfs/static/jinkela/video/asserts/playing.gif" style="display: none;">
              <span class="page-num">P1</span>
              <span class="part">Day1.学习目标</span>
            </div>
            <div class="duration">01:39</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
  */
  return Array.from(document.querySelectorAll('#multi_page .list-box .router-link-active .clickitem'))
    .map((elt) => {
      const [ linkContentElt, durationElt] = elt.children;
      const [, pageNumElt, partElt] = linkContentElt.children;
      const pageNum = pageNumElt.textContent;
      const part = partElt.textContent;
      const duration = durationElt.textContent;

      return { pageNum, part, duration };
    });
}

/**
 * @param videoParts {array}
 * @param partCountPerDay {number} 每天看几个（part）
 * @param startIndexOfParts {number} 从第几个 part 开始
 * @param startDateOfPlan {number} 计划开始时间，单位 毫秒数（timestamp）
 */
function buildTable(videoParts, partCountPerDay, startIndexOfParts, startDateOfPlan) {
  const header = '' 
    + '| page num | part | duration | plan date | finish date | desc |\n'
    + '| -------- | ---- | -------- | --------- | ----------- | ---- |\n';

  let result = header;

  videoParts.forEach(({ pageNum, part, duration }, index) => {
    const planDate = '';
    const finishDate = '';
    const desc = ' '


    const row  = `| ${pageNum} | ${ part } | ${ duration } | ${planDate} | ${finishDate} | ${ desc } |\n`;

    result += `${row}`
  });
}