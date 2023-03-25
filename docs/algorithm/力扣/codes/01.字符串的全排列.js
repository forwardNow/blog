function permutation(str) {
  const results = [];
  const sortedStr = [...str].sort((a, b) => a > b ? 1 : -1).join('');

  dfs('', sortedStr, results);

  return results;
}

/*
 ""      "abc"
         "a"     "bc"
                 "ab"    "c"
                         "abc"   ""
                 "ac"    "b"
                         "acb"   ""
         "b"     "ac"
                 "ba"    "c"
                         "bac"   ""
                 "bc"    "a"
                         "bca"   ""
         "c"     "ab"
                 "ca"    "b"
                         "cab"   ""
                 "cb"    "a"
                         "cba"   ""
*/ 
function dfs(curr, rest, results, deep = 0) {
  //console.log('\t'.repeat(deep), JSON.stringify(curr), '\t', JSON.stringify(rest));

  if (rest.length === 0) {
    results.push(curr);
    return;
  }

  for (let i = 0, len = rest.length; i < len; i++) {
    // 去重
    if (i > 0 && rest[i] === rest[i-1]) {
      continue;
    }
    const newCurr = curr + rest[i];
    const newRest = rest.slice(0, i) + rest.slice(i + 1);


    dfs(newCurr, newRest, results, deep + 1);
  }
}


console.log(permutation('abc'))