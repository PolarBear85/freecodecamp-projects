def hanoi_solver(n):
    peg_1 = list(range(n,0,-1))
    peg_2 = []
    peg_3 = []

    print(peg_1,peg_2,peg_3)
    toh_mover(n,peg_1,peg_2,peg_3)

    print(peg_1,peg_2,peg_3)



    '''
    move 0 - N = 3 [3,2,1][][]
    move -1 - N = 2 [3,2,1][][]

    MOVE 1 - N= 1 [3,2][][1]
    Move 2 - N=2 [3][2][1]
    move 3 - N= 1 [3][2,1][]
    move 4 - N = 3 [][2,1][3]
    move 5 - N = 1 [1][2][3]
    move 6 - N = 2 [1][][3,2]
    move 7 - N = 1 [][][3,2,1]


    
    
    
    
    
    
    '''

def toh_mover(n,src,inter,dest):
    if n == 1:
        src.pop()
        dest.append(n)
    else:
        toh_mover(n-1,src,dest,inter)
        src.pop()
        dest.append(n)
        toh_mover(n-1,inter,src,dest)



hanoi_solver(3)