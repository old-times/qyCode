import {fetch,post,patch,put} from '@/utils/request';
export default {
  /**
   * 1.1 上方总数接口
   * @params {String} nd : 全量的时候可以不传，要传就传空字符串，其它时候传 '2019' '2018'，暂支持年度查询
   * @return code:0请求成功！如果请求成功返回 JSON数据包
   */
  countTotalWsla: nd => {
    return post("/gdssfw/ssfwpt/count2/countTotalWsla", { nd });
  }
};
