#   Hilbert curve using L-system
#   Authour: Alan Richmond, Python3.codes
#   https://en.wikipedia.org/wiki/L-system
#   Uses Lindenmayer System

from turtle import*
def A(n):
    if n>0:    L("-BF+AFA+FB-",n)

def B(n):
    if n>0:    L("+AF-BFB-FA+",n)

def L(s,n):
    for c in s:
        if   c=='-': lt(90)
        elif c=='+': rt(90)
        elif c=='A': A(n-1)
        elif c=='B': B(n-1)
        elif c=='F': fd(9)
speed('fastest')
penup();goto(-100,-100);pendown()
A(6
)

ts = getscreen()
ts.getcanvas().postscript(file="triangle.eps")
done()
