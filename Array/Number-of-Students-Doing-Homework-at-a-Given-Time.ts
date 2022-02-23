// Easy - https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
function busyStudent(
  startTime: number[],
  endTime: number[],
  queryTime: number,
): number {
  let students = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) students++;
  }
  return students;
}
