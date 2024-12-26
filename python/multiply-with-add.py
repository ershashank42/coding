# input1 = 3
# input2 = 4
# output = 12
# condition - don't use multiplication, use minimum + operator

def multiplyWithAdd(a,b):
    big = max(a,b)
    small = min(a,b);
    result = 0;
    for i in range(small):
        result += big
    return result
input1 = 3
input2 = 4
print(multiplyWithAdd(input1, input2))

