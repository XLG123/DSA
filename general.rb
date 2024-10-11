# 263
# @param {Integer} n
# @return {Boolean}
def is_ugly(n)
    if n <= 0
        return false
    elsif n == 1
        return true
    else 
        if n % 2 == 0
            is_ugly(n/2)
        elsif n % 3 == 0
            is_ugly(n/3)
        elsif n % 5 == 0
            is_ugly(n/5)
        else
            return false 
        end
    end
end



# 414
# @param {Integer[]} nums
# @return {Integer}
def third_max(nums)
    reversed_sorted_nums = nums.sort { |a, b| b <=> a }
    unique_reversed = reversed_sorted_nums.uniq
    if unique_reversed.length < 3
        return unique_reversed[0]
    else
        return unique_reversed[2]
    end
end



# 448
# @param {Integer[]} nums
# @return {Integer[]}
def find_disappeared_numbers(nums)
    sorted_nums = nums.sort.uniq
    disappeared_nums = []
    sorted_nums.each_with_index do |num, idx|
        temp = idx
        while temp+1 < sorted_nums[temp]
            disappeared_nums.push(temp+1)
            temp += 1
        end
    end
    disappeared_nums
end

find_disappeared_numbers([1, 2, 3, 4, 7, 8])