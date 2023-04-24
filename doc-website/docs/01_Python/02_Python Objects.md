

:::tip Lesson you will be learnt after reading this:

- What are variables, operators, keywords, and objects 
- How to use numbers and fractions within a Python program.
- Appreciate the importance of strings
- Comprehend slicing and indexing techniques for working with strings.
- Comprehend slicing and indexing techniques for working with strings.
- Understand the importance of tuples

:::

Anaconda ca be use to write a programm in python or its IDLE can also be use which you can downlaod from this [link](https://www.python.org/downloads/). After downloading this just search for python IDLE in window star button and you will get the window like this

![Python IDLE](/img/python_IDLE.png)
<!-- <img src="/img/python_IDLE.png" alt="Python IDLE" style = "height:100px;width:100px"> -->

The >> symbol in Python IDLE is called the "prompt". It indicates that Python is waiting for the user to enter a command or expression.This python IDLE can be used as calculator.

When you see the >> prompt in the IDLE shell, you can start typing a command or expression, and then press Enter to execute it. Python will evaluate the command or expression and return the result, which will be displayed on the next line with a new prompt.

For example, if you type 2 + 3 at the >> prompt and then press Enter, Python will evaluate the expression and return the result 5 on the next line:


```jsx 
>>> 2 + 3
5
>>>
```

try out basic mathematical operation on you own like substraction, addition and multiplication.

In the above case, the Python interpreter is used to execute the commands. This
is referred to as a **script** mode. This mode works with small codes. Though
simple commands can be executed on the command line, the complex programs
can be written in a file. A file can be created as follows:

**Step 1**. Go to FILE NEW

**Step 2**. Save the file as **calculation.py**

**Step 3**. Write the following code in the file

```jsx "calculation.py"
print(3+5) 
print(3*5)   
print(3**5)
print(5/3)
print(5%3)
print(5/2)
```


**Step 4**. Go to debug and run the program.

Alternatively, the script can be executed on the command prompt as follow:

1.  Open Command Prompt by pressing the Windows key + R, typing "cmd" in the Run dialog box, and then pressing Enter.
2.  Navigate to the directory where your Python script is saved using the "cd" command. For example, if your script is saved in a folder called "Python" on your desktop, type:
```jsx
cd C:\Users\your_username\Desktop\Python
```
3.  Once you are in the correct directory, type the following command to execute your Python script:
```jsx
C:\Users\your_username\Desktop\Python>python calculation.py
```

## What are Python Variable ?

In order to store value, We need variable i.e variable is a name that refere to a value or an **object**. Python serves to manipulate the variable and it lets us to use these variable later. As a matter of fact, everything in python is an object.

An object is an instance of a class, and it has a unique **identity**, **type**, and **value**.

| Item    | Description |
| ----------- | ----------- |
| Identity      | unique address that identifies the object in memory       |
| Type   | kind of data it can hold i.e. int, float etc        |
|Value | actual data that it holds   |

Let's understand it better with an example

```jsx
x = 10

print("Its identity is: {}".format(id(x)))
print("its type is: {}".format(type(x)))
print("its value is: {}".format(x))
```

After this above code you will get

```
Its identity is: 1342770735696
its type is: <class 'int'>
its value is: 10

```

Variables in Python are **dynamically typed**, which means that the type of the variable is determined by the value that is assigned to it. Unlike other programming languages, you do not need to declare the type of a variable in Python before using it.

Here's an example of creating and using a variable in Python:

```jsx
# assigning a value to a variable
x = 10

# printing the value of the variable
print(x)

# re-assigning the variable to a new value
x = "Hello World"

# printing the new value of the variable
print(x)
```
In this example, we create a variable `x` and assign it a value of `10`. We then `print` the value of the variable using the `print` function. We then re-assign the variable to a new value of `"Hello World"` and print the new value of the variable.

## Data Types

Notice in above example that first we assigned a integer value to `x` than after printing its value we agained assigned `x` a string of alphabet, In Python, there are several built-in types of objects that can be used in programming. Here are some of the most commonly used types of objects in Python:

| Type  |   Description |   Python Notation |
|-------|---------------|-----------|
| Numbers|three types of numbers: integer, Float and Complex| **int()**, **float()**, **complex()**|
|Text   |  sequence of characters, enclosed in single or double quotes.| **str()**|
|Sequence | ordered collection of elements | **list()**, **tuple()** |
|Mapping    | collection of key-value pairs| **dict()**|
|Set    | unordered collection of unique elements   | **set()**|

You can get the data type of any object by using the type() function:

## Retrieving the data type

You can get the data type of any object by using the **type()** function:
```jsx
>>>x = 5
>>>print(type(x))
<class 'int'>
>>>y = "Hello"
>>>print(type(y))
<class 'str'>
```

## Setting Data Types

As mentiones earlier variable in Python are dynamic type ,but you can specify the data type 

|Dynamically Assigned| Manually assigned    | Data type |
|---------|-----|--------|
|x = 5 | x = int(5) | int|
|x = 5.0| x = float(5.0) | int|
|x = "hello" | x = str('hello')|str|
|x = ["apple", "banana", "cherry"]|x = list(("apple", "banana", "cherry"))|list|
|x =("apple", "banana", "cherry")| x = tuple(("apple", "banana", "cherry"))| tuple|

## Keywords

In Python, keywords are the reserved words that have a special meaning and purpose. These keywords cannot be used as variable names or any other identifiers, since they are already reserved for specific operations or statements in the Python language.

Some examples of Python keywords are **if**, **else**, **for**, **while**, **and**, **or**, **not**, **in**, **def**, **class**, **try**, **except**, **finally**, **import**, **from**, **as**, **with**, **global**, **nonlocal**, **assert**, **yield**, **lambda**, **return**, **pass**, **break**, **continue**, **del**, **is**, **None**, **True**, and **False**.

It is important to note that Python keywords are case sensitive, meaning that **if** and **IF** are not the same.

Do not get intimated by these long list of keyword, you will get know about each of these as you move along this course.

## Operators: 

These are special symbols which help the user to carry out
operations like addition, subtraction, etc. Python provides following type of
operators

|Type of operators | Symbol |
|-------|--------|
|Arithmetic operators| +, –, *, /, %, ** and // |
|  Assignment operators |  =, + =, – =, *=, /=, %=, **= and //= |
|  Logical operators |  or, and, and not |
|  Relational operators |  <, <=, >, >=, != or < > and == |


## Fundamental Data Types: Revisiting
### Numbers
Numbers are the simplest data types. Numbers comprise of integers, floats,
decimals, and complexes in Python

|Numbers |Explanation|
|------|---------|
|Integers |Which do not have any fractional part|
|Floating point numbers |That do have a fractional part|
|Complex numbers |The numbers having a real and an imaginary part|
|Decimal |Those having fixed precision|
|Rational |Those having a numerator and a denominator|
|Sets |Abstraction of a mathematical set|

Operators supported in numbers

|Operators|Description|
|-----|----------|
|+| Addition|
|– |Subtraction|
|*| Multiplication|
|**| Power|
|%| Modulo|

Try out all the operation on number in Python IDLE

Apart from using thses operators to do basic mathematical calculation, one can use the Python library which is called `math`.For example if one needs to calculate the square root of a
number, then importing math and using math.sqrt() is a solution

```jsx
import math
x = 9
math.sqrt(x)

output:3.0
```
Some of the most important functions that can be use using `math` library

|Function|Description|Example|output|
|----------|-----------|---------|-------|
|Ceil|The ceiling of a given number is the nearest integer greater than or equal to that number|math.ceil(2.678)|3|
|fabs|The absolute value of a number is its positive value|math.fabs(-2.76)|2.67|
|factorial|The factorial of a number x is defined as the continued product of the numbers from 1 to that value|math.factorial(4)|24|
|Floor|The floor of a given number is the nearest integer smaller than or equal to that number|math.floor(2.67)|2|

### Strings
In Python a string is a predefined object which contains characters. The string in
Python is non-mutable; that is, once defined the value of a string cannot be
changed.Strings in python are surrounded by either single quotation marks, or double quotation marks.

**'Hello'** is tha same as **"Hello"**
Assigning a string to a variable is done with the variable name followed by an equal sign and the string

```jsx
name = "Abhishek"
Print(name)
```

strings in Python are arrays hence the value at a particular location of a string can be displayed using **indexing**.
The syntax of the above is as follows.

`<name of the String>[index]`

:::caution 

Indexing in python start from location **0**

:::

So, `name[0]` would print the first letter of the string, which is **“A”**

```jsx
print(name[0])
A
```

**Negative indexing** in a string refers to the character present at the `nth` position beginning from the end. In the above case, `name[-2]` would generate **“e.”**

**The length** of a string can be found by calling the `len` function

```jsx
print(len(name))
8
```
The last character of a given string can also be printed using the following.

```jsx
print(name[len(name)-1])
```

**Concatenation** of string in Python can be done usning operator **+**

```jsx
name = name + " " + 'Dixit'
print(name)
Abhishek Dixit
```

**Slicing**, in strings, refers to removing some part of a string. for example in above defined `name` we want to extract the portion after the first letter we can write `[1:]`.

```jsx
name[1:]
bhishek
```
In the same way the portion of the string after the first two letters can be
extracted as follows
```jsx
name[2:]
hishek
```
It may be noted that the last two characters cannot be removed in the same way
as the first two.

```jsx
name[:2]
Ab
```
In order to accomplish the above task, negative indexing ought to be used.

```jsx
name[:-2]
abhish
```
**String built-in methods**

Python has a set of built-in methods that you can use on strings

|Function| Description | Example | Output|
|-----|-------|---------|-------|
|upper()|returns the string in upper case|name.upper()|ABHISHEK|
|lower()|returns the string in lower case|name.lower()|abhishek|
|strip()|removes any whitespace from the beginning or the end|name.strip()||
|replace()|replaces a string with another string|name.replace("A", "R")|Rabhishek|

### Lists

A list, in Python, is a collection of objects i.e. it can store the similar element or dissimilar element. Unlike strings, lists are **mutable**. That is, an element at a particular position can be changed in a list. A list is useful in dealing with homogeneous and heterogeneous sequences.

- A list can be a homogenous i.e. It can have similar data type like `[1, 2, 3]`
- It can be heterogenous i.e. it contain different elements  like `[1, “hello,” 2.4]`
- A list can also be empty `([])`
- A list can also contain a list 

:::tip 

A List is created using square bracket i.e. [ ] or we can also use **list()** constructor

:::

For example, the following list of subjects has elements “Hindi,” “Mathematics,” and “English.” The list can be printed using the usual print function

```jsx
>>subjects = ['Hindi', 'Mathematics', 'English']
>>print(subjects)
['Hindi', 'Mathematics', 'English']
```

```jsx 
# List creation using list() constructor
>>subjects = list(('Hindi', 'Mathematics', 'English'))
>>print(subjects)
['Hindi', 'Mathematics', 'English']
```

List items are **ordered**, **changeable**, and allow **duplicate values**.

**ordered** means list itmes are indexed and have a defined order, first item has index `[0]`, second item `[1]` and so on.

```jsx
>>subjects = ['Hindi', 'Mathematics', 'English']
>>print(subjects[0])
Hindi
<<print(subjects[2])
English
```
If one wants to access the last element of list then it can be access by `[-1]

```jsx
>>subjects = ['Hindi', 'Mathematics', 'English']
>>print(subjects[1])
English
```


**Changeable** meaning that we can change, add, and remove items in a list after it has been created.

**Duplicates** means, since lists are indexed, lists can have items with the same value.

List also supports **slicing** same as we discussed under string.

### Tuples

Tuples are used to store multiple items in a single variable. It is collection which is ordered and unmutable.

:::tip 

A tuple is created using round bracket i.e. () or we can also use **tuple()** constructor

:::

```jsx
>>subjects = ('Hindi', 'Mathematics', 'English')
>>print(subjects)
('Hindi', 'Mathematics', 'English')

# Tuple creation using tuple() constructor

>>subjects = tuple(('Hindi', 'Mathematics', 'English'))
>>print(subjects)
('Hindi', 'Mathematics', 'English')
```

Tuple items are **ordered**, **unchangeable**, and allow **duplicate values**.

**ordered** means tuple itmes are indexed and have a defined order, first item has index `[0]`, second item `[1]` and so on.

**Unchangeable** meaning that we can not change, add, and remove items in a list after it has been created.

**Duplicates** means, since tuples are indexed, tuples can have items with the same value.

Tuples are extremely useful in operations like **swapping** etc. Swapping in Python
is as simple as assigning (a, b) to (b, a).

```jsx
print('Enter the first number\t:')
a= int(input())
print('Enter the second number\t:')
b= int(input())
print('\nThe numbers entered are ',a,' & ', b)
(a, b) = (b, a)
print('\nThe numbers now are ',a,' & ', b)
---------------------------------------------
output:
Enter the first number	:
3
Enter the second number	:
4
The numbers entered are  3  &  4
The numbers now are  4  &  3
```

### Sets

Sets are used to store multiple items in a single variable and it is a collection which is **unordered**, **unchangeable**, and **unindexed**. **No duplicate** members

:::tip 

A set is created using curly bracket i.e. { } or we can also use **set()** constructor

:::

```jsx
>>subjects = {'Hindi', 'Mathematics', 'English'}
>>print(subjects)
{'English', 'Hindi', 'Mathematics'}

# set creation using set() constructor

>>subjects = set(('Hindi', 'Mathematics', 'English'))
>>print(subjects)
{'English', 'Hindi', 'Mathematics'}
```

**Unordered** means that the items in a set do not have a defined order. Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

**Unchangeable** meaning that we cannot change the items after the set has been created, but you can remove items and add new items.

**Duplicates not Allowed** means, it can not have two items with the same value.

### Dictionary

It is a collection of **key:value** pair which is **ordered** and **changeable** and it does not allow duplicate members.

:::tip 
Dictionaries are written with curly brackets, and have keys and values like **{key:value}**
:::

```jsx
my_dict = { "first_name": "Abhishek",
         "last_name": "dixit", 
         "age": 35 
         } 
print(my_dict)
{'first_name': 'Abhishek', 'last_name': 'dixit', 'age': 35}
```

:::caution
As of Python version 3.7, dictionaries are **ordered**. In Python 3.6 and earlier, dictionaries are **unordered**.
:::

When we say that dictionaries are ordered, it means that the items can be refered by indexing and unordered means that the items does not have a defined order, you cannot refer to an item by using an index.


