import sys

# 표준 입력을 파일로 설정하기 -> input.txt를 읽어들여옴
sys.stdin = open("input_21924.txt", "r") 

# 표준 입력을 파일로 바꿨으므로, 
# input() 함수는 더이상 사용자 입력을 받지 않고, 지정된 입력 파일을 읽게 됨.
n,m = map(int, input().split())

# list comprehension을 이용해 이후의 입력값을 받아옴
arr = [list(map(int, input().split())) for _ in range(m)]


import sys

n,m = map(int, sys.stdin.readline().split())
arr = [list(map(int, sys.stdin.readline().split())) for _ in range(m)]