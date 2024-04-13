# Lindenmayer systems

Lindenmayer systems, or L-systems, provide a very powerful way to construct fractals. Lindenmayer used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development. An L-system is a rewriting system and a type of formal grammar. It consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial “axiom” string from which to begin construction, and a mechanism for translating the generated strings into geometric structures.

For a simple example, let’s look at Lindenmayer’s original L-system for modelling the growth of algae. There are 2 ‘variables’, A and B. The rules are that (1) whenever we see A, we replace it with AB, and (2) whenever we see B, we replace it with A. We start with the string ‘A’, so that becomes ‘AB’ by rule 1. There’s nothing more in the original string, so now we scan ‘AB’. Again, the ‘A’ gets replaced by ‘AB’, and we move on to the next character, which is ‘B’; that gets replaced by ‘A’ so now the string has become ‘ABA’. On our third iteration, the string becomes ‘ABAAB’. The next one is ‘ABAABABA’. And so on. (Just as a side note, the lengths of these string are 1, 2, 3, 5, 8… remind you of anything? Hint, put another ‘1’ at the beginning of the sequence, and add it to the next number.)

We can extend this basic system with some drawing instructions, such as ‘-‘ means “turn left by some angle”, and ‘+’ indicates a right turn; ‘F’ could say “go forward”. These instructions can then be implemented very simply using Turtle graphics. For example, the Hilbert curve can be drawn using these rules:

A → − B F + A F A + F B −

B → + A F − B F B − F A +

``` python
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

penup();goto(0,100);pendown()
A(4)
```
A note about the implementation: this one is remarkably simple because we do the string replacements ‘on-the-fly’ with mutually recursive function calls. You’ll often see L-systems implemented by scanning the axiom (usually the first production rule) and building up the replacement string, and then scanning that, and so on until the string has been developed as far as needed. Then that string is ‘interpreted’ (like a little programming language!) to draw the picture. I’m not sure why they do that – presumably there’s a good reason? – but my way is much easier to understand!

Here’s a Dragon Curve:

``` python
#   Dragon curve using L-system
#   Authour:Alan Richmond, Python3.codes
#   https://en.wikipedia.org/wiki/L-system

from turtle import*

def X(n):
    if n>0:    L("X+YF+",n)
def Y(n):
    if n>0:    L("-FX-Y",n)

def L(s,n):
    for c in s:
        if   c=='-': lt(90)
        elif c=='+': rt(90)
        elif c=='X': X(n-1)
        elif c=='Y': Y(n-1)
        elif c=='F': fd(16)

X(8)

```

This next one adds a new feature – the ability to save values for future use, by pushing them onto a stack, and popping them off later. Push is indicated by ‘[‘, and pop by ‘]’. I hope you can see that there’s the beginnings of a realistic looking tree when the program has finished! Just add some scenery and textures…?


``` Python
#   Fractals using L-system
#   Authour:Alan Richmond, Python3.codes
#   https://en.wikipedia.org/wiki/L-system

from turtle import*
#from random import gauss

t=22                    # angle of branches
d=16                    # length of branches
n=4                     # max depth of recursion

X="F-[[X]+X]+F[+FX]-X"  # Lindenmayer system
F="F"

stack=[]

def x(n):
    if n>0: L(X,n)
    else:   dot(16,'green')

def f(n):
    if n>0: L(F,n)

def L(s,n):
    pensize(n*2)
    for c in s:

#        if   c=='-':    lt(gauss(t,t))
#        elif c=='+':    rt(gauss(t,t))
        if   c=='-':    lt(t)
        elif c=='+':    rt(t)
        elif c=='X':    x(n-1)
        elif c=='F':    f(n-1);fd(d)
        elif c=='[':    stack.append((pos(),heading(),n))
        elif c==']':
            ((i,j),h,p)=stack.pop()
            penup()
            goto(i,j)
            seth(h)
            pensize(p)
            pendown()

penup()
goto(0,-200)
pendown()
seth(90)
color('brown','green')
x(n)
```
