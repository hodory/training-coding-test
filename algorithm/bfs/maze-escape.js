function solution(maze) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, 1, -1];

  function bfs(x, y) {
    const queue = [];
    queue.push([x, y]);

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= 5 || ny >= 6) continue;

        if (maze[nx][ny] === 0) continue;

        if (maze[nx][ny] === 1) {
          // 이동 가능한 위치로 첫 방문시에만
          maze[nx][ny] = maze[x][y] + 1; // maze[x][y]에서 한 칸을 이동해야 해당 위치에 도착 할 수 있음을 기록
          queue.push([nx, ny]);
        }
      }
    }
  }

  bfs(0, 0);

  return maze[4][5];
}

solution([
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]);
