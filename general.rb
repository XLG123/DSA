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
    uniq_sorted_nums = nums.sort.uniq
    (1..nums.length).to_a - uniq_sorted_nums
end

# p find_disappeared_numbers([1, 2, 3, 4, 7, 8])



# 485
# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
    max_consecutives = []
    max_consecutive = 0
    nums.each do |num|
        if num == 1
            max_consecutive += 1
        else
            max_consecutives.push(max_consecutive)
            max_consecutive = 0
        end
    end
    max_consecutives.push(max_consecutive)
    max_consecutives.max
end

p find_max_consecutive_ones([1, 1, 0, 1, 1, 1])
p find_max_consecutive_ones([1, 0, 1, 1, 0, 1])