import {
  ListNode
} from '../../leetcode/$classes.js';
import {
  addTwoNumbers,
  twoSum,
  findMedianSortedArrays,
  longestPalindrome,
} from '../../leetcode/problems.js'

;(() => {
  const nums = [11, 2, 7, 15]
  const target = 9
  const result = twoSum(nums, target)
  console.log(result)
})()

;(() => {
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
  const result = addTwoNumbers(l1, l2)
  console.log(result)
})()

;(() => {
  const nums1 = [1, 3, 4]
  const nums2 = [2, 5]
  const result = findMedianSortedArrays(nums1, nums2)
  console.log(result)
})()

;(() => {
  const s = 'babad'
  const result = longestPalindrome(s)
  console.log(result)
})()