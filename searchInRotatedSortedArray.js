class Solution {
    public int search(int[] nums, int target) {
        // They say n(log(n)) runtime complexity
        // I don't know if binary search will work flat out for this problem though. 

        // I think I just need to implement binary search but make cases that reset the array if you go over the edge? 
        // This is a pretty tough problem. 
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int center = left + (right - left) / 2;

            if (nums[center] == target) {
                return center;
            }

            // if (right == center) {
            //     if (left == right || left == (right - 1)) {
            //         return - 1;
            //     }
            // }

            // if (nums[right] < target && nums[left] > target) {
            //     return -1;
            // }

            if (nums[center] <= target) {
                if (nums[right] <= target) {
                    // shift left 
                    right = center - 1;
                } else {
                    // shift right
                    left = center + 1;
                }
            } else {
                if (nums[left] >= target) {
                    // shift right
                    left = center + 1;
                } else {
                    // shift left
                    right = center - 1;
                }
            }
        }
        return -1;
    }
}