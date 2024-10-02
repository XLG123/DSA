# 263
# @param {Integer} n
# @return {Boolean}
def is_ugly(n)
    ugly_num = true
    if n <= 0
        ugly_num = false
    elsif n >= 2
        all_factors = []
        dividend = n
        (2..dividend).each do |num|
            if dividend % num == 0
                all_factors.push(num)
            end
        end

        all_factors.each do |factor|
            if factor > 5
                return false if factor % 6 == 1 || factor % 6 == 5 
            end
        end    
    end
    ugly_num
end