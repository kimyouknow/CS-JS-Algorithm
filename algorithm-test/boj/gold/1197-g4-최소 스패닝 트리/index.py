import os
import sys

def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]


def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b

file_path = os.path.join(os.path.dirname(__file__), "1.txt")
sys.stdin = open(file_path, "r")

v, e = map(int, input().split())
parent = [0] * (v + 1) # 부모 테이블 초기화하기


edges = []
answer = 0

# 테이블 초기화
for i in range(1, v + 1):
    parent[i] = i


for _ in range(e):
    a, b, cost = map(int, input().split())
    # 비용순으로 정렬하기 위해서 튜플의 첫 번째 원소를 비용으로 설정
    edges.append((cost, a, b))

edges.sort()


for edge in edges:
    cost, a, b = edge
    # 사이클이 발생하지 않는 경우에만 집합에 포함
    if find_parent(parent, a) != find_parent(parent, b):
        union_parent(parent, a, b)
        answer += cost

print(answer)