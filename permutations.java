class Solution {
    private void helper(int[] nums, Set<Integer> visited, List<Integer> permutation, List<List<Integer>> output) {
        if (visited.size() == nums.length) {
            output.add(new ArrayList<>(permutation));
            return;
        }

        for (int i = 0; i < nums.length; i++) {
            if (!visited.contains(nums[i])) {
                visited.add(nums[i]);
                permutation.add(nums[i]);

                helper(nums, visited, permutation, output);

                visited.remove(nums[i]);
                permutation.remove(permutation.size() - 1);
            }
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> output = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        List<Integer> permutation = new ArrayList<>();

        helper(nums, visited, permutation, output);
        return output;
    }
}