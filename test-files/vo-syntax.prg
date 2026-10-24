// Gap #1: && comment with apostrophe
nX := 1 && don't do this
nY := 2
// Gap #2: asterisk comment
* old style comment
// Gap #3: unterminated strings end at end of line
cMsg := "abc
cMsg := 'abc
nZ := 3
// Gap #4: numbers
local n := 42 as int
nA := 3.14 + .5 + 0x1F + 0b1010 + 1.5e10 + 1_000 + $12.50 + 10u + 2.5m
dA := 2026.10.24
dB := {^2026-10-24}
// Gap #5: logic literals and NIL
lOk := .T.
lNo := .F. .OR. .Y. .AND. .N.
uX := NIL
// Gap #6: preprocessor
#include "VOWin32APILibrary.vh"
#define DEBUG_LEVEL 2 // level
#ifdef DEBUG
#else
#endif
#if __XSHARP__
#endif
#error this is an error
#warning this is a warning as is
#pragma warnings(165, off)
#region Helpers
#endregion
#stdout hello
#nullable enable
#ycommand FOO => BAR
#ytranslate FOO => BAR
// Gap #7: member names after : and .
nX := oWin:Text + oObj:Value
o:Add(1)
o:End()
oX:Throw()
cX := System.Environment.NewLine
// Gap #8: FUNC inside identifier
local cFunc as string
// Gap #9: ACCESS/ASSIGN names
access Name class Customer
assign Name(cValue) class Customer
// Gap #10: TEXT/RUN/CANCEL/QUIT/EXTERNAL/THEN are not control keywords
cX := oCtl:Text
// Gap #11: bracket strings
cB := [say "hi"]
Foo([abc], x)
return [done]
[Serializable];
// Gap #12: property
property Name as string auto
property Age as int get _age set _age := value
oX:Init()
// Gap #13: types and THIS
func Bar(n as long) as long
local s as short
local d as datetime
local p as nint
local q as nuint
THIS:Name := "x"
// Gap #14: entity names
define DEF_X := 10
global gCount as int
global const gMax := 5
vostruct _winPOINT
union _winU
delegate MyHandler(sender as object) as void
event Changed as EventHandler
constructor()
destructor()
// Gap #15: string prefixes and interpolation
cP := i"Dir C:\{cSub}\"
cQ := E"x\ty"
cR := ie"tab\t{nX}"
cS := EI"A{nY}\n"
cC := c'x'
cD := c"y"
// Gap #16: as / using
recover using oErr
using System.Collections.Generic
using static System.Math
begin using var oStream := GetStream()
end using
// Gap #17: doc comment
/// <summary>
// Gap #18: keywords
with oObj
end with
init1 procedure Start
local aT as tuple
nZ := astype(o, Foo)
p := stackalloc int[10]
o := __castclass(Foo, x)
_memvar cName
// Gap #19: class rule
class A inherit B implements I1, I2
class C from D
// Gap #20: scope names
nI := 42L + 1.5S
sSym := #MySymbol
// P3: compiler macros and bitwise operators
cE := __ENTITY__ + __FILE__ + __DIALECT_VO__
nB := _AND(n1, n2) + _OR(n1, n2) + _XOR(n1, n2) + _NOT(n1)
// Regression: what was already good
if nX > 1
elseif nX < 0
else
endif
do case
case nX == 1
otherwise
endcase
do while lOk
enddo
for i := 1 upto 10 step 2
next
foreach x in aList
next
foreach var y in aList
next
begin sequence
recover
end sequence
try
catch e as Exception
finally
end try
switch nX
case 1
end switch
repeat
until lOk
/* block comment */
cA := "double" + 'single' + e"esc\n"
nZ := SELF:Name
public class Customer inherit System.Object
protect cName as string
hidden nAge as int
static function Foo(a as int) as string
procedure DoIt()
method Show() as void class Customer
cLong := "a" + ;
	"b"
nX := 1 ; nY := 2
begin namespace MyApp.Models
end namespace
end class
nQ := a := 1 + b .AND. c
nR := a:b:c(1)[2]:d
nS := a::b
