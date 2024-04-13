# Sierpinski Triangle
This is a classic fractal drawn with a recursion algorithm and Turtle graphics. The Sierpinski Triangle’s sides are bisected and the triangle they form is removed. The procedure is then applied to the 3 remaining triangles, and to them recursively or until the Universe ends.

Note that the use of recursion allows the code to reflect the structure of the picture to be drawn. Let S be the initial triangle (which is invisible at first). When we enter the function S, we reset the scale by one half, because the internal triangles (that will be created next) have half the perimeter of the original one. Then we create the bottom left triangle with S(l,x,y), then the bottom right, then the top one. Then we do that to each of those triangles too – bottom left, bottom right, top – until they’re small enough, at which point we actually draw the individual triangles and fill them in with black.

I’d like to tell you that I wrote this amazingly simple program in a few minutes. It took me a couple of hours! Simplicity is hard work.

``` Python
#   Sierpinski Triangle
#   Authour: Alan Richmond, Python3.codes

from turtle import *
size=800
min=64
pf=0.8660254    # Pythagoras factor: sqrt(3)/2

def S(l,x,y):
    if l > min:                       # Not done yet?
        l=l/2                           # scale down by 2
        S(l,x,y)                        # bottom left triangle
        S(l,x+l,y)                      # bottom right triangle
        S(l,x+l/2,y+l*pf)               # top triangle
    else:                           # Done recursing
        goto(x,y); pendown()            # start at (x,y)
        begin_fill()                    # prepare to fill triangle
        forward(l); left(120)           # triangle base
        forward(l); left(120)           # triangle right
        forward(l)                      # triangle left
        end_fill()
        setheading(0)                   # face East
        penup(); goto(x,y)              # finish at (x,y)

penup()
speed('fastest')
S(size,-size/2,-size*pf/2.0)
done()
```
Due read:
[must read](http://www.oftenpaper.net/sierpinski.htm)
