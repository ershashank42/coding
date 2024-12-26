# Expected
# input = 'aabbbccdddd'
# output = 'a2b3c2d4'

inp = 'aabbbccdddd'

def _countAplha(inp):
    count = 1
    newStr = ''
    i = None
    if len(inp) == 1:
        newStr += inp + str(count)
    else:
        for i in range(1, len(inp)):
            if inp[i] == inp[i-1]:
                count += 1
            else:
                newStr += inp[i-1]
                newStr += str(count)
                count = 1
        newStr += inp[i]
        newStr += str(count)
    return newStr
print(_countAplha(inp))