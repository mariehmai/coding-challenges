// import {
//   Interval,
// } from '/opt/node/lib/lintcode/index.js';

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param intervals: an array of meeting time intervals
   * @return: if a person could attend all meetings
   */
  static canAttendMeetings(intervals) {
    intervals.sort((a, b) => {
      if (b[0] === a[0]) return 0;
      if (b[0] < a[0]) return 1;
      if (b[0] > a[0]) return -1;
    })

    for (let i = 0; i < intervals.length; i+=2) {
      if (intervals[i+1][0] < intervals[i][1]) {
        return false;
      }
    }

    return true;
  }
}

console.log(Solution.canAttendMeetings([[0,30],[5,10],[15,20]])) // false;
console.log(Solution.canAttendMeetings([[5,8],[5,7],[9,15]])) // false;
console.log(Solution.canAttendMeetings([[5,8],[9,15]])) // true;
console.log(Solution.canAttendMeetings([[9,15],[5,8]])) // true;
