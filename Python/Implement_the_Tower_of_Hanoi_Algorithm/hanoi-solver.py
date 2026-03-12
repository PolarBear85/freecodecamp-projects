def hanoi_solver(n):
    peg_1 = list(range(n,0,-1))
    peg_2 = []
    peg_3 = []

    print(peg_1,peg_2,peg_3)
    toh_mover(n,peg_1,peg_2,peg_3)

    print(peg_1,peg_2,peg_3)

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