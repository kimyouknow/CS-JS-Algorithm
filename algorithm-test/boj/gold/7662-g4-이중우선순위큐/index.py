import sys
import os
import heapq

inputFile = os.path.join(os.path.dirname(__file__), '1.txt')
sys.stdin = open(inputFile, 'r')

input = sys.stdin.readline
n = int(input())

def solution():
    t = int(input())
    minHeap, maxHeap = [], []
    map = {}
    for _ in range(t):
        [order, value] = input().split()
        value = int(value)
        if order == "I":
            heapq.heappush(minHeap, value)
            heapq.heappush(maxHeap, -value)
            map[value] = True
        elif order == "D":
            if value == 1:
                while maxHeap and not map[-maxHeap[0]]:
                    heapq.heappop(maxHeap)
                if maxHeap:
                  map[-maxHeap[0]] = False
                  heapq.heappop(maxHeap)
            if value == -1:
                while minHeap and not map[minHeap[0]]:
                  heapq.heappop(minHeap)
                if minHeap:
                    map[minHeap[0]] = False
                    heapq.heappop(minHeap)
    while minHeap and not map[minHeap[0]]:
        heapq.heappop(minHeap)
    while maxHeap and not map[-maxHeap[0]]:
        heapq.heappop(maxHeap)

    if not minHeap or not maxHeap:
        print("EMPTY")
    else:
        print(-maxHeap[0],  minHeap[0])
            


for _ in range(n):
  solution()