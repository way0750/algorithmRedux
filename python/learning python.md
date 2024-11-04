* data type:
js:
null
undefined


py:
None === js null and undefined

* obj:
js:
let obj = {a: 1, [b]: 2}
obj.a or obj['a]
delete obj.a

py:
obj = {'a': 1, b: 2}
b:2, the b, if it's not string then it is a variable
obj['a']
del obj['a]
Empty curly braces {} create a dictionary, not a set.

* for loop
js:
for (let char in) for in property key
for (let char of) for of property value

py:
for char in list/tuple: for in property value
for char in object: for in property key
or
for key, val in obj.items() # you will get tuple for each pair of key-value pair

* the ()
js:
for () {}
while () {}
if () {}
etc...

py:
for:
while:
if:

exception:
def funct(params):

* function return
js:
return "one value"

py:
return 'v1', 'v2', 'v3'
this will return a tuple
in which you can save them as
var1, var2, var3 = function()

# funtion def:
see the /? any params that go before / is positional args
see the *? any params that go after the * is key word args 
def my_function(a, b, /, *, c, d):
  print(a + b + c + d)

my_function(5, 6, c = 7, d = 8)


* exception handling
js:
try {
    ...
} catch() {

} finally {

}

python:
try:
except:
else:
finally:

* defining a function:
js:
function something(a, b=9, ...yo) {

}

py:
def TestFunct(a, b=99, *si, **yo):
  print(f'{a}')
  print(f'{b}')
  print(si)
  print(yo)

prints out:
1
2
(9, 9, 9)
{'nam': 3, 'age': 4}

the * in param will create a (), and put all the extra args in it, else it's just an empty tuple
the ** in param will create a dict obj {} and put all the extra named args in it, else it's jsut an empty obj
the position of arguments will determine what goes to where of course

and you can specificly name the argument to match the param

def TestFucn (name, age):
  print(name, age)

TestFucn(age=999, name='wow')

* module:
js
export const blahlblah
import { blahblah } from './asd/fa/dsf'

py:

# file: py/EverythingInTheFile.py
def JustAnything():
    print('no need to export explictly')


import EverythingInTheFile
# wait, how does it find the file to import moduel then? from the closest and up the chain?
import EverythingInTheFile as SimpleName

from EverythingInTheFile import JustAnything

# class
js:
class NameHere {
    constructor() {
        this.something
    }
}

py:
class NameHere:
    def __init__(self):
        # the self is required as the first argument
        # self === this from js
        # but when you are invoking the function, you don't need to provide self
        super().whatEverSueprClassMethodYouWannaCall();
        super().__init__(all the needed args here)

    
    def someinstanceMethod(self):


inheritance:
class NameHere(SuperClassNameHere):

# dictionary / obj
{ 'a': 9, 'b': 10 }
obj['c'] or 0 # this doesn't work
obj.get('c', 0) this works

In Python, dot notation is primarily used for accessing attributes and methods of objects,
including properties of class instances, methods of classes, and functions within modules.
Here are the main uses of dot notation in Python:

# tuple:
To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.
(1) # not ok!
(1,) # this works because of the comma

t = (4,5)
a, b, *c = t # this is ok even though there are more variables than values
BUT this is not ok:
t = (1,2,3,4,5)
a,c,c = t
there are more values than variables
python seems to care about match things a lot

# set
set()
s = set() # remember {} will create a dictionary object instead of a set
s.add()
s.remove()

s1 | s2 # union
s1 & s2 # intersection
s1 - s2 # difference

# ternary operator:
a if condition else b

val1 if Ture else val2

# string:
to reverse a string:
s[::-1]


# some very useful things:
Booelans: True and False
&&, ||, ! become and or not
str() converts to string
int() converts to integer

standard modules:
    math
    random
    os
    datetime
    sys
    collections

https://docs.python.org/3/library/stdtypes.html#typesseq
and
https://www.w3schools.com/python/python_operators.asp
has a lot of tricks