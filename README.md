# plotterVS
Pen plotter repository for documenting pen plotter desing and usage.

## Background

I´ve been using DIY pen plotters for a while, 3d printed mostly, they were a lot of fun, but those lack of being reliable. This model it's my 2nd iteration trying to solve that issue and wanting to get a good quality final product, based on my particular needs and understanding of the "best" desing that fits the purpose but keeping the costs as low as possible. 
![Desing](/doc/img/freecad.png)

## Part list for A4 size:
* 2040 vslot: x1 285mm
* 2020 vslot: x2 285mm, .x2 440mm
* Aluminum Corners: x4
* V wheels 22mm: x9 
* Wheel spacers: x6
* Excentric nuts: x3
* Bolts & Nuts
* Gt2 pulleys: 1x 5mm, 2x 8mm
* Gt2 belt.
* Gt2 freewheel. 3mm
* 8mm rod, at least 360mm
* Motors Nema 17 x2
* Servo G90
* Aruino Nano & nanoshield CNC with A4988 drivers  

Firmware: [GRBL Servo by Misan](https://github.com/misan/grbl-servo)

Arduino case: [Thigiverse link](https://www.thingiverse.com/thing:2379541)

## Code Snippets
Code repository for plotting
### Python 
+ Fake cyrcle
[Circle of Lines](./code/python/fakeCircle/fakeCircle.md).
+ L Systems
[Lindenmayer Systems](./code/python/lindenmayerSystems/lindenmayerSystems.md)

