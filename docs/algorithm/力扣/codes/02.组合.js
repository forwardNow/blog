const combine = (n, k) => {
  const res = [];

  const helper = (startIndex, path) => { //startIndex表示搜索的起点位置 path是每条分支的一个组合）
    if (path.length == k) {
      res.push(path.slice());       //需要拷贝一份 避免受其他分支的影响
      return;                       
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {//剪枝
      path.push(i);                    //加入path
      helper(i + 1, path);             //下一层递归
      path.pop();                      //回溯状态
    }
  };

  helper(1, []); //递归入口
  return res;
}

console.log(combine(13, 3));