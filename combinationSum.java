class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        helper(candidates, target, 0, new ArrayList<>(), result);
        return result; 
    }

    private void helper(int[] candidates, int target, int index, List<Integer> current, List<List<Integer>> result) {
        if (target == 0) {
            // Found valid combination, add to list
            result.add(new ArrayList<>(current));
            return;
        }

        if (target < 0 || index == candidates.length) {
            return; // invalid combination
        }

        // option 1: include the current candidate
        current.add(candidates[index]); // push our value into current array
        helper(candidates, target - candidates[index], index, current, result);

        // option 2: skip the candidate
        current.remove(current.size() - 1); // remove the candidate we just added
        helper(candidates, target, index + 1, current, result); // increment index to attempt the next candidate
    }

}