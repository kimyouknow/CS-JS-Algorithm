function solution(n, edge) {
  let answer = 0;
  let max = 0;
  // adjacent matrix
  // const graph = Array.from({length: n}, () => Array.from({length: n}, () => false));
  // adjacent list
  const graph = Array.from({ length: n }, () => []);
  const visited = Array.from({ length: n }, () => false);
  edge.forEach(([a, b]) => {
    // adjacent matrix
    // graph[a-1][b-1] = true
    // graph[b-1][a-1] = true
    // adjacent list
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
  });
  const queue = [];
  queue.push([0, 0]); // node, acc edge
  visited[0] = true;

  while (queue.length > 0) {
    const [cur, acc] = queue.shift();
    if (max < acc) {
      max = acc;
      answer = 1;
    } else if (max === acc) {
      answer++;
    }
    // adjacent matrix
    // for(let i = 0; i < n; i++){
    //     const next = graph[cur][i]
    //     if(!next) continue
    //     if(visited[i]) continue
    //     visited[i] = true
    //     queue.push([i, acc + 1])
    // }
    // adjacent list
    for (const next of graph[cur]) {
      if (visited[next]) continue;
      visited[next] = true;
      queue.push([next, acc + 1]);
    }
  }

  return answer;
}
