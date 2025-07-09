import axios from 'axios';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(objectSupport);

// 在网络面板搜索 aid w_rid 关键字
const CONFIG = {
  // https://api.bilibili.com/x/web-interface/wbi/view?aid=765670802&w_rid=764f98bc44d84a7284780803f62e64de
  request: {
    url: 'https://api.bilibili.com/x/web-interface/wbi/view',
    method: 'get',
    params: {
      aid: '553267404',
      w_rid: '1190f7110a7359f021f66e2bcd09888f'
    }
  },
  plan: {
    /** 每天看几个视频 */
    partCountPerDay: 5,
    /** 从第几个视频开始看，从 1 开始 */
    startIndexOfParts: 1,
    /** 计划开始日期，Unix 时间戳 */
    startDateOfPlan: Date.now(),
  }
};

const NONE_PLACEHOLDER = ' - ';

async function generatePlanTable() {
  const videoParts = await getVideoParts();
  const result = buildTable(videoParts);
  console.log(result);
}

async function getVideoParts(): Promise<VideoPart[]> {
  const result: VideoResponse = await axios.request(CONFIG.request).then((res) => res.data);

  if (result.code !== 0) {
    return [];
  }

  return result.data.pages;
}

function buildTable(videoParts: VideoPart[]) {
  const header = ''
    + '| 索引 | 名称 | 时长 | 计划完成日期 | 实际完成日期 | 说明 |\n'
    + '| -------- | ---- | -------- | --------- | ----------- | ---- |\n';

  let result = header;

  const {
    startDateOfPlan,
    partCountPerDay,
    startIndexOfParts,
  } = CONFIG.plan;

  const startDate = dayjs(startDateOfPlan);

  videoParts.forEach(({ page, part, duration }) => {
    let planDate = NONE_PLACEHOLDER;
    const finishDate = NONE_PLACEHOLDER;
    const desc = NONE_PLACEHOLDER;

    const fmtDuration = dayjs({ seconds: duration }).format('mm:ss');

    if (page >= startIndexOfParts) {
      const index = page - startIndexOfParts; // 第几条数据
      const pageNum = Math.floor(index / partCountPerDay + 1); // 第几条数据在第几页
      planDate = startDate.add(pageNum - 1, 'days').format('YYYY-MM-DD');
    }

    const row  = `| ${page} | ${ part } | ${ fmtDuration } | ${planDate} | ${finishDate} | ${ desc } |\n`;

    result += `${row}`
  });

  return result;
}


generatePlanTable();


//#region types
interface VideoResponse {
  code: number,
  message: string,
  data: VideoData,
}

interface VideoData {
  pages: VideoPart[],
}

/**
 * @example
 *
 * {
 *   "page": 1,
 *   "part": "Day1.学习目标",
 *   "duration": 99,
 * }
 */
interface VideoPart {
  /** starting from 1 */ 
  page: number,
  part: string,
  /** unit seconds */ 
  duration: number,
}
//#endregion
