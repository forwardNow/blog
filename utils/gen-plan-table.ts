import axios from 'axios';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(objectSupport);

const plan = {
  partCountPerDay: 10,
  /** from 1 */
  startIndexOfParts: 39,
  startDateOfPlan: Date.now(),
}

const NONE_PLACEHOLDER = ' - ';

/**
 * 根据官网 API 获取 video parts
 * https://api.bilibili.com/x/web-interface/wbi/view?aid=807451085&w_rid=def4f859edefd4a75d624c8fa5b63d1d
 */
async function getVideoParts(): Promise<VideoPart[]> {
  const url = 'https://api.bilibili.com/x/web-interface/wbi/view';
  const params = {
    aid: '807451085',
    w_rid: 'def4f859edefd4a75d624c8fa5b63d1d'
  };

  const result: VideoResponse = await axios.get(url, { params }).then((res) => res.data);

  if (result.code !== 0) {
    return [];
  }

  return result.data.pages;
}

function buildTable(videoParts: VideoPart[]) {
  const header = ''
    + '| page num | part | duration | plan date | finish date | desc |\n'
    + '| -------- | ---- | -------- | --------- | ----------- | ---- |\n';

  let result = header;

  const {
    startDateOfPlan,
    partCountPerDay,
    startIndexOfParts,
  } = plan;

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

async function main() {
  const videoParts = await getVideoParts();
  const result = buildTable(videoParts);

  console.log(result);
}

main().then();


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
