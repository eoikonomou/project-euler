module.exports = (time) => {
  const solutionTime = Date.now() - time;
  return `Solved in ${solutionTime < 1000 ? `${solutionTime}ms` : `${(solutionTime/1000).toFixed(2)}s`}`;
}
