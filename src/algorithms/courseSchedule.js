/**
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * Some courses may have prerequisites, for example to take course 0 you have to first take
 * course 1, which is expressed as a pair: [0,1]
 * Given the total number of courses and a list of prerequisite pairs, is it possible for you to
 * finish all courses?
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
module.exports.canFinish = (numCourses, prerequisites) => {
  let adjacencyList = [];
  let openSet = [];
  let activeSet = new Set();
  let visitedSet = new Set();

  for (let i = 0; i < numCourses; i++) {
    adjacencyList[i] = [];
    openSet.push(i);
  }

  for (let i = 0; i < prerequisites.length; i++) {
    adjacencyList[prerequisites[i][1]].push(prerequisites[i][0]);
  }

  while (openSet.length) {
    if (hasCycle(openSet.shift(), adjacencyList, openSet, activeSet, visitedSet)) {
      return false;
    }
  }

  return true;
};

const hasCycle = (node, adjacencyList, openSet, activeSet, visitedSet) => {
  const neighbours = adjacencyList[node];
  activeSet.add(node);

  for (let i = 0; i < neighbours.length; i++) {
    if (visitedSet.has(neighbours[i])) {
      continue;
    }

    if (activeSet.has(neighbours[i])) {
      return true;
    }

    if (hasCycle(neighbours[i], adjacencyList, openSet, activeSet, visitedSet)) {
      return true;
    }
  }

  activeSet.delete(node);
  visitedSet.add(node);

  return false;
};
