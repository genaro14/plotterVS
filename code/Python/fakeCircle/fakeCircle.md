# Circle with lines
The circle is an illusion created by 100 straight-line tangents to an invisible circle. The tangents are created by drawing a chord in a larger concentric circle, and moving it’s endpoints around by equal increments 100 times. The larger circle’s circumference is defined by x=sin(t), y=cos(t), for t in the range 0 to 2*pi. So a chord’s endpoints will be defined by 2 different values of t.

  + Import turtle & math libraries
  + Set r (radius) to 200 px.
  + Set angular increment to a 100th of the circle, i.e. 2*pi/100
  + Initialise the plotting angle  to 0, and an offset to something in the range 0:2*pi
  + Make 100 steps around the circle
  + compute endpoints (x1,y1), (x2,y2) of a chord
  + lift pen and goto first endpoint; drop it & goto second
  + increment angle
  + export canvas in eps format

``` Python
from turtle import*
from math import sin, cos, pi
r=200
inc=2*pi/100
t=0;n=1.5
for i in range(100):
    x1=r*sin(t);  y1=r*cos(t)
    x2=r*sin(t+n);y2=r*cos(t+n)
    penup();  goto(x1,y1)
    pendown();goto(x2,y2)
    t+=inc
ts = getscreen()
ts.getcanvas().postscript(file="circle.eps")

```
