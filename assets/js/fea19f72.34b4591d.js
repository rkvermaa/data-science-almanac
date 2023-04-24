"use strict";(self.webpackChunkdoc_website=self.webpackChunkdoc_website||[]).push([[3161],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6021:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i=void 0,o={unversionedId:"Python/Python Objects",id:"Python/Python Objects",title:"Python Objects",description:"- What are variables, operators, keywords, and objects",source:"@site/docs/01_Python/02_Python Objects.md",sourceDirName:"01_Python",slug:"/Python/Python Objects",permalink:"/data-science-almanac/docs/Python/Python Objects",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_Python/02_Python Objects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intoduction To Python",permalink:"/data-science-almanac/docs/Python/Introduction To Python"},next:{title:"Conditional Statement",permalink:"/data-science-almanac/docs/Python/Conditional Statement"}},s={},p=[{value:"What are Python Variable ?",id:"what-are-python-variable-",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Retrieving the data type",id:"retrieving-the-data-type",level:2},{value:"Setting Data Types",id:"setting-data-types",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Operators:",id:"operators",level:2},{value:"Fundamental Data Types: Revisiting",id:"fundamental-data-types-revisiting",level:2},{value:"Numbers",id:"numbers",level:3},{value:"Strings",id:"strings",level:3},{value:"Lists",id:"lists",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Sets",id:"sets",level:3},{value:"Dictionary",id:"dictionary",level:3}],m={toc:p},d="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(d,(0,a.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Lesson you will be learnt after reading this:",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"What are variables, operators, keywords, and objects "),(0,r.kt)("li",{parentName:"ul"},"How to use numbers and fractions within a Python program."),(0,r.kt)("li",{parentName:"ul"},"Appreciate the importance of strings"),(0,r.kt)("li",{parentName:"ul"},"Comprehend slicing and indexing techniques for working with strings."),(0,r.kt)("li",{parentName:"ul"},"Comprehend slicing and indexing techniques for working with strings."),(0,r.kt)("li",{parentName:"ul"},"Understand the importance of tuples"))),(0,r.kt)("p",null,"Anaconda ca be use to write a programm in python or its IDLE can also be use which you can downlaod from this ",(0,r.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"link"),". After downloading this just search for python IDLE in window star button and you will get the window like this"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Python IDLE",src:n(2331).Z,width:"868",height:"508"})),(0,r.kt)("p",null,'The >> symbol in Python IDLE is called the "prompt". It indicates that Python is waiting for the user to enter a command or expression.This python IDLE can be used as calculator.'),(0,r.kt)("p",null,"When you see the >> prompt in the IDLE shell, you can start typing a command or expression, and then press Enter to execute it. Python will evaluate the command or expression and return the result, which will be displayed on the next line with a new prompt."),(0,r.kt)("p",null,"For example, if you type 2 + 3 at the >> prompt and then press Enter, Python will evaluate the expression and return the result 5 on the next line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>> 2 + 3\n5\n>>>\n")),(0,r.kt)("p",null,"try out basic mathematical operation on you own like substraction, addition and multiplication."),(0,r.kt)("p",null,"In the above case, the Python interpreter is used to execute the commands. This\nis referred to as a ",(0,r.kt)("strong",{parentName:"p"},"script")," mode. This mode works with small codes. Though\nsimple commands can be executed on the command line, the complex programs\ncan be written in a file. A file can be created as follows:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),". Go to FILE NEW"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),". Save the file as ",(0,r.kt)("strong",{parentName:"p"},"calculation.py")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),". Write the following code in the file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'"calculation.py"','"calculation.py"':!0},"print(3+5) \nprint(3*5)   \nprint(3**5)\nprint(5/3)\nprint(5%3)\nprint(5/2)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4"),". Go to debug and run the program."),(0,r.kt)("p",null,"Alternatively, the script can be executed on the command prompt as follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Open Command Prompt by pressing the Windows key + R, typing "cmd" in the Run dialog box, and then pressing Enter.'),(0,r.kt)("li",{parentName:"ol"},'Navigate to the directory where your Python script is saved using the "cd" command. For example, if your script is saved in a folder called "Python" on your desktop, type:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"cd C:\\Users\\your_username\\Desktop\\Python\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Once you are in the correct directory, type the following command to execute your Python script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"C:\\Users\\your_username\\Desktop\\Python>python calculation.py\n")),(0,r.kt)("h2",{id:"what-are-python-variable-"},"What are Python Variable ?"),(0,r.kt)("p",null,"In order to store value, We need variable i.e variable is a name that refere to a value or an ",(0,r.kt)("strong",{parentName:"p"},"object"),". Python serves to manipulate the variable and it lets us to use these variable later. As a matter of fact, everything in python is an object."),(0,r.kt)("p",null,"An object is an instance of a class, and it has a unique ",(0,r.kt)("strong",{parentName:"p"},"identity"),", ",(0,r.kt)("strong",{parentName:"p"},"type"),", and ",(0,r.kt)("strong",{parentName:"p"},"value"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Identity"),(0,r.kt)("td",{parentName:"tr",align:null},"unique address that identifies the object in memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Type"),(0,r.kt)("td",{parentName:"tr",align:null},"kind of data it can hold i.e. int, float etc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"actual data that it holds")))),(0,r.kt)("p",null,"Let's understand it better with an example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'x = 10\n\nprint("Its identity is: {}".format(id(x)))\nprint("its type is: {}".format(type(x)))\nprint("its value is: {}".format(x))\n')),(0,r.kt)("p",null,"After this above code you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Its identity is: 1342770735696\nits type is: <class 'int'>\nits value is: 10\n\n")),(0,r.kt)("p",null,"Variables in Python are ",(0,r.kt)("strong",{parentName:"p"},"dynamically typed"),", which means that the type of the variable is determined by the value that is assigned to it. Unlike other programming languages, you do not need to declare the type of a variable in Python before using it."),(0,r.kt)("p",null,"Here's an example of creating and using a variable in Python:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'# assigning a value to a variable\nx = 10\n\n# printing the value of the variable\nprint(x)\n\n# re-assigning the variable to a new value\nx = "Hello World"\n\n# printing the new value of the variable\nprint(x)\n')),(0,r.kt)("p",null,"In this example, we create a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and assign it a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),". We then ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," the value of the variable using the ",(0,r.kt)("inlineCode",{parentName:"p"},"print")," function. We then re-assign the variable to a new value of ",(0,r.kt)("inlineCode",{parentName:"p"},'"Hello World"')," and print the new value of the variable."),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"Notice in above example that first we assigned a integer value to ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," than after printing its value we agained assigned ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," a string of alphabet, In Python, there are several built-in types of objects that can be used in programming. Here are some of the most commonly used types of objects in Python:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Python Notation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"three types of numbers: integer, Float and Complex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"int()"),", ",(0,r.kt)("strong",{parentName:"td"},"float()"),", ",(0,r.kt)("strong",{parentName:"td"},"complex()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text"),(0,r.kt)("td",{parentName:"tr",align:null},"sequence of characters, enclosed in single or double quotes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"str()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"ordered collection of elements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"list()"),", ",(0,r.kt)("strong",{parentName:"td"},"tuple()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"collection of key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"dict()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Set"),(0,r.kt)("td",{parentName:"tr",align:null},"unordered collection of unique elements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"set()"))))),(0,r.kt)("p",null,"You can get the data type of any object by using the type() function:"),(0,r.kt)("h2",{id:"retrieving-the-data-type"},"Retrieving the data type"),(0,r.kt)("p",null,"You can get the data type of any object by using the ",(0,r.kt)("strong",{parentName:"p"},"type()")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>>x = 5\n>>>print(type(x))\n<class 'int'>\n>>>y = \"Hello\"\n>>>print(type(y))\n<class 'str'>\n")),(0,r.kt)("h2",{id:"setting-data-types"},"Setting Data Types"),(0,r.kt)("p",null,"As mentiones earlier variable in Python are dynamic type ,but you can specify the data type "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Dynamically Assigned"),(0,r.kt)("th",{parentName:"tr",align:null},"Manually assigned"),(0,r.kt)("th",{parentName:"tr",align:null},"Data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x = 5"),(0,r.kt)("td",{parentName:"tr",align:null},"x = int(5)"),(0,r.kt)("td",{parentName:"tr",align:null},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x = 5.0"),(0,r.kt)("td",{parentName:"tr",align:null},"x = float(5.0)"),(0,r.kt)("td",{parentName:"tr",align:null},"int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'x = "hello"'),(0,r.kt)("td",{parentName:"tr",align:null},"x = str('hello')"),(0,r.kt)("td",{parentName:"tr",align:null},"str")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x = ",'["apple", "banana", "cherry"]'),(0,r.kt)("td",{parentName:"tr",align:null},'x = list(("apple", "banana", "cherry"))'),(0,r.kt)("td",{parentName:"tr",align:null},"list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'x =("apple", "banana", "cherry")'),(0,r.kt)("td",{parentName:"tr",align:null},'x = tuple(("apple", "banana", "cherry"))'),(0,r.kt)("td",{parentName:"tr",align:null},"tuple")))),(0,r.kt)("h2",{id:"keywords"},"Keywords"),(0,r.kt)("p",null,"In Python, keywords are the reserved words that have a special meaning and purpose. These keywords cannot be used as variable names or any other identifiers, since they are already reserved for specific operations or statements in the Python language."),(0,r.kt)("p",null,"Some examples of Python keywords are ",(0,r.kt)("strong",{parentName:"p"},"if"),", ",(0,r.kt)("strong",{parentName:"p"},"else"),", ",(0,r.kt)("strong",{parentName:"p"},"for"),", ",(0,r.kt)("strong",{parentName:"p"},"while"),", ",(0,r.kt)("strong",{parentName:"p"},"and"),", ",(0,r.kt)("strong",{parentName:"p"},"or"),", ",(0,r.kt)("strong",{parentName:"p"},"not"),", ",(0,r.kt)("strong",{parentName:"p"},"in"),", ",(0,r.kt)("strong",{parentName:"p"},"def"),", ",(0,r.kt)("strong",{parentName:"p"},"class"),", ",(0,r.kt)("strong",{parentName:"p"},"try"),", ",(0,r.kt)("strong",{parentName:"p"},"except"),", ",(0,r.kt)("strong",{parentName:"p"},"finally"),", ",(0,r.kt)("strong",{parentName:"p"},"import"),", ",(0,r.kt)("strong",{parentName:"p"},"from"),", ",(0,r.kt)("strong",{parentName:"p"},"as"),", ",(0,r.kt)("strong",{parentName:"p"},"with"),", ",(0,r.kt)("strong",{parentName:"p"},"global"),", ",(0,r.kt)("strong",{parentName:"p"},"nonlocal"),", ",(0,r.kt)("strong",{parentName:"p"},"assert"),", ",(0,r.kt)("strong",{parentName:"p"},"yield"),", ",(0,r.kt)("strong",{parentName:"p"},"lambda"),", ",(0,r.kt)("strong",{parentName:"p"},"return"),", ",(0,r.kt)("strong",{parentName:"p"},"pass"),", ",(0,r.kt)("strong",{parentName:"p"},"break"),", ",(0,r.kt)("strong",{parentName:"p"},"continue"),", ",(0,r.kt)("strong",{parentName:"p"},"del"),", ",(0,r.kt)("strong",{parentName:"p"},"is"),", ",(0,r.kt)("strong",{parentName:"p"},"None"),", ",(0,r.kt)("strong",{parentName:"p"},"True"),", and ",(0,r.kt)("strong",{parentName:"p"},"False"),"."),(0,r.kt)("p",null,"It is important to note that Python keywords are case sensitive, meaning that ",(0,r.kt)("strong",{parentName:"p"},"if")," and ",(0,r.kt)("strong",{parentName:"p"},"IF")," are not the same."),(0,r.kt)("p",null,"Do not get intimated by these long list of keyword, you will get know about each of these as you move along this course."),(0,r.kt)("h2",{id:"operators"},"Operators:"),(0,r.kt)("p",null,"These are special symbols which help the user to carry out\noperations like addition, subtraction, etc. Python provides following type of\noperators"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type of operators"),(0,r.kt)("th",{parentName:"tr",align:null},"Symbol"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arithmetic operators"),(0,r.kt)("td",{parentName:"tr",align:null},"+, \u2013, *, /, %, ** and //")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assignment operators"),(0,r.kt)("td",{parentName:"tr",align:null},"=, + =, \u2013 =, *=, /=, %=, **= and //=")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Logical operators"),(0,r.kt)("td",{parentName:"tr",align:null},"or, and, and not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relational operators"),(0,r.kt)("td",{parentName:"tr",align:null},"<, <=, >, >=, != or < > and ==")))),(0,r.kt)("h2",{id:"fundamental-data-types-revisiting"},"Fundamental Data Types: Revisiting"),(0,r.kt)("h3",{id:"numbers"},"Numbers"),(0,r.kt)("p",null,"Numbers are the simplest data types. Numbers comprise of integers, floats,\ndecimals, and complexes in Python"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Numbers"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integers"),(0,r.kt)("td",{parentName:"tr",align:null},"Which do not have any fractional part")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Floating point numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"That do have a fractional part")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Complex numbers"),(0,r.kt)("td",{parentName:"tr",align:null},"The numbers having a real and an imaginary part")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("td",{parentName:"tr",align:null},"Those having fixed precision")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rational"),(0,r.kt)("td",{parentName:"tr",align:null},"Those having a numerator and a denominator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sets"),(0,r.kt)("td",{parentName:"tr",align:null},"Abstraction of a mathematical set")))),(0,r.kt)("p",null,"Operators supported in numbers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operators"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"+"),(0,r.kt)("td",{parentName:"tr",align:null},"Addition")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,r.kt)("td",{parentName:"tr",align:null},"Subtraction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiplication")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"**"),(0,r.kt)("td",{parentName:"tr",align:null},"Power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"%"),(0,r.kt)("td",{parentName:"tr",align:null},"Modulo")))),(0,r.kt)("p",null,"Try out all the operation on number in Python IDLE"),(0,r.kt)("p",null,"Apart from using thses operators to do basic mathematical calculation, one can use the Python library which is called ",(0,r.kt)("inlineCode",{parentName:"p"},"math"),".For example if one needs to calculate the square root of a\nnumber, then importing math and using math.sqrt() is a solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import math\nx = 9\nmath.sqrt(x)\n\noutput:3.0\n")),(0,r.kt)("p",null,"Some of the most important functions that can be use using ",(0,r.kt)("inlineCode",{parentName:"p"},"math")," library"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ceil"),(0,r.kt)("td",{parentName:"tr",align:null},"The ceiling of a given number is the nearest integer greater than or equal to that number"),(0,r.kt)("td",{parentName:"tr",align:null},"math.ceil(2.678)"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fabs"),(0,r.kt)("td",{parentName:"tr",align:null},"The absolute value of a number is its positive value"),(0,r.kt)("td",{parentName:"tr",align:null},"math.fabs(-2.76)"),(0,r.kt)("td",{parentName:"tr",align:null},"2.67")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"factorial"),(0,r.kt)("td",{parentName:"tr",align:null},"The factorial of a number x is defined as the continued product of the numbers from 1 to that value"),(0,r.kt)("td",{parentName:"tr",align:null},"math.factorial(4)"),(0,r.kt)("td",{parentName:"tr",align:null},"24")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Floor"),(0,r.kt)("td",{parentName:"tr",align:null},"The floor of a given number is the nearest integer smaller than or equal to that number"),(0,r.kt)("td",{parentName:"tr",align:null},"math.floor(2.67)"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))),(0,r.kt)("h3",{id:"strings"},"Strings"),(0,r.kt)("p",null,"In Python a string is a predefined object which contains characters. The string in\nPython is non-mutable; that is, once defined the value of a string cannot be\nchanged.Strings in python are surrounded by either single quotation marks, or double quotation marks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"'Hello'")," is tha same as ",(0,r.kt)("strong",{parentName:"p"},'"Hello"'),"\nAssigning a string to a variable is done with the variable name followed by an equal sign and the string"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'name = "Abhishek"\nPrint(name)\n')),(0,r.kt)("p",null,"strings in Python are arrays hence the value at a particular location of a string can be displayed using ",(0,r.kt)("strong",{parentName:"p"},"indexing"),".\nThe syntax of the above is as follows."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<name of the String>[index]")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Indexing in python start from location ",(0,r.kt)("strong",{parentName:"p"},"0"))),(0,r.kt)("p",null,"So, ",(0,r.kt)("inlineCode",{parentName:"p"},"name[0]")," would print the first letter of the string, which is ",(0,r.kt)("strong",{parentName:"p"},"\u201cA\u201d")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"print(name[0])\nA\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Negative indexing")," in a string refers to the character present at the ",(0,r.kt)("inlineCode",{parentName:"p"},"nth")," position beginning from the end. In the above case, ",(0,r.kt)("inlineCode",{parentName:"p"},"name[-2]")," would generate ",(0,r.kt)("strong",{parentName:"p"},"\u201ce.\u201d")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The length")," of a string can be found by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"len")," function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"print(len(name))\n8\n")),(0,r.kt)("p",null,"The last character of a given string can also be printed using the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"print(name[len(name)-1])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Concatenation")," of string in Python can be done usning operator ",(0,r.kt)("strong",{parentName:"p"},"+")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"name = name + \" \" + 'Dixit'\nprint(name)\nAbhishek Dixit\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Slicing"),", in strings, refers to removing some part of a string. for example in above defined ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," we want to extract the portion after the first letter we can write ",(0,r.kt)("inlineCode",{parentName:"p"},"[1:]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"name[1:]\nbhishek\n")),(0,r.kt)("p",null,"In the same way the portion of the string after the first two letters can be\nextracted as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"name[2:]\nhishek\n")),(0,r.kt)("p",null,"It may be noted that the last two characters cannot be removed in the same way\nas the first two."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"name[:2]\nAb\n")),(0,r.kt)("p",null,"In order to accomplish the above task, negative indexing ought to be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"name[:-2]\nabhish\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"String built-in methods")),(0,r.kt)("p",null,"Python has a set of built-in methods that you can use on strings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upper()"),(0,r.kt)("td",{parentName:"tr",align:null},"returns the string in upper case"),(0,r.kt)("td",{parentName:"tr",align:null},"name.upper()"),(0,r.kt)("td",{parentName:"tr",align:null},"ABHISHEK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lower()"),(0,r.kt)("td",{parentName:"tr",align:null},"returns the string in lower case"),(0,r.kt)("td",{parentName:"tr",align:null},"name.lower()"),(0,r.kt)("td",{parentName:"tr",align:null},"abhishek")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strip()"),(0,r.kt)("td",{parentName:"tr",align:null},"removes any whitespace from the beginning or the end"),(0,r.kt)("td",{parentName:"tr",align:null},"name.strip()"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace()"),(0,r.kt)("td",{parentName:"tr",align:null},"replaces a string with another string"),(0,r.kt)("td",{parentName:"tr",align:null},'name.replace("A", "R")'),(0,r.kt)("td",{parentName:"tr",align:null},"Rabhishek")))),(0,r.kt)("h3",{id:"lists"},"Lists"),(0,r.kt)("p",null,"A list, in Python, is a collection of objects i.e. it can store the similar element or dissimilar element. Unlike strings, lists are ",(0,r.kt)("strong",{parentName:"p"},"mutable"),". That is, an element at a particular position can be changed in a list. A list is useful in dealing with homogeneous and heterogeneous sequences."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A list can be a homogenous i.e. It can have similar data type like ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 2, 3]")),(0,r.kt)("li",{parentName:"ul"},"It can be heterogenous i.e. it contain different elements  like ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, \u201chello,\u201d 2.4]")),(0,r.kt)("li",{parentName:"ul"},"A list can also be empty ",(0,r.kt)("inlineCode",{parentName:"li"},"([])")),(0,r.kt)("li",{parentName:"ul"},"A list can also contain a list ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A List is created using square bracket i.e. ","[ ]"," or we can also use ",(0,r.kt)("strong",{parentName:"p"},"list()")," constructor")),(0,r.kt)("p",null,"For example, the following list of subjects has elements \u201cHindi,\u201d \u201cMathematics,\u201d and \u201cEnglish.\u201d The list can be printed using the usual print function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>subjects = ['Hindi', 'Mathematics', 'English']\n>>print(subjects)\n['Hindi', 'Mathematics', 'English']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"# List creation using list() constructor\n>>subjects = list(('Hindi', 'Mathematics', 'English'))\n>>print(subjects)\n['Hindi', 'Mathematics', 'English']\n")),(0,r.kt)("p",null,"List items are ",(0,r.kt)("strong",{parentName:"p"},"ordered"),", ",(0,r.kt)("strong",{parentName:"p"},"changeable"),", and allow ",(0,r.kt)("strong",{parentName:"p"},"duplicate values"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ordered")," means list itmes are indexed and have a defined order, first item has index ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]"),", second item ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]")," and so on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>subjects = ['Hindi', 'Mathematics', 'English']\n>>print(subjects[0])\nHindi\n<<print(subjects[2])\nEnglish\n")),(0,r.kt)("p",null,"If one wants to access the last element of list then it can be access by `","[-1]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>subjects = ['Hindi', 'Mathematics', 'English']\n>>print(subjects[1])\nEnglish\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Changeable")," meaning that we can change, add, and remove items in a list after it has been created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duplicates")," means, since lists are indexed, lists can have items with the same value."),(0,r.kt)("p",null,"List also supports ",(0,r.kt)("strong",{parentName:"p"},"slicing")," same as we discussed under string."),(0,r.kt)("h3",{id:"tuples"},"Tuples"),(0,r.kt)("p",null,"Tuples are used to store multiple items in a single variable. It is collection which is ordered and unmutable."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A tuple is created using round bracket i.e. () or we can also use ",(0,r.kt)("strong",{parentName:"p"},"tuple()")," constructor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>subjects = ('Hindi', 'Mathematics', 'English')\n>>print(subjects)\n('Hindi', 'Mathematics', 'English')\n\n# Tuple creation using tuple() constructor\n\n>>subjects = tuple(('Hindi', 'Mathematics', 'English'))\n>>print(subjects)\n('Hindi', 'Mathematics', 'English')\n")),(0,r.kt)("p",null,"Tuple items are ",(0,r.kt)("strong",{parentName:"p"},"ordered"),", ",(0,r.kt)("strong",{parentName:"p"},"unchangeable"),", and allow ",(0,r.kt)("strong",{parentName:"p"},"duplicate values"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ordered")," means tuple itmes are indexed and have a defined order, first item has index ",(0,r.kt)("inlineCode",{parentName:"p"},"[0]"),", second item ",(0,r.kt)("inlineCode",{parentName:"p"},"[1]")," and so on."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unchangeable")," meaning that we can not change, add, and remove items in a list after it has been created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duplicates")," means, since tuples are indexed, tuples can have items with the same value."),(0,r.kt)("p",null,"Tuples are extremely useful in operations like ",(0,r.kt)("strong",{parentName:"p"},"swapping")," etc. Swapping in Python\nis as simple as assigning (a, b) to (b, a)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"print('Enter the first number\\t:')\na= int(input())\nprint('Enter the second number\\t:')\nb= int(input())\nprint('\\nThe numbers entered are ',a,' & ', b)\n(a, b) = (b, a)\nprint('\\nThe numbers now are ',a,' & ', b)\n---------------------------------------------\noutput:\nEnter the first number  :\n3\nEnter the second number :\n4\nThe numbers entered are  3  &  4\nThe numbers now are  4  &  3\n")),(0,r.kt)("h3",{id:"sets"},"Sets"),(0,r.kt)("p",null,"Sets are used to store multiple items in a single variable and it is a collection which is ",(0,r.kt)("strong",{parentName:"p"},"unordered"),", ",(0,r.kt)("strong",{parentName:"p"},"unchangeable"),", and ",(0,r.kt)("strong",{parentName:"p"},"unindexed"),". ",(0,r.kt)("strong",{parentName:"p"},"No duplicate")," members"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A set is created using curly bracket i.e. { } or we can also use ",(0,r.kt)("strong",{parentName:"p"},"set()")," constructor")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},">>subjects = {'Hindi', 'Mathematics', 'English'}\n>>print(subjects)\n{'English', 'Hindi', 'Mathematics'}\n\n# set creation using set() constructor\n\n>>subjects = set(('Hindi', 'Mathematics', 'English'))\n>>print(subjects)\n{'English', 'Hindi', 'Mathematics'}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unordered")," means that the items in a set do not have a defined order. Set items can appear in a different order every time you use them, and cannot be referred to by index or key."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unchangeable")," meaning that we cannot change the items after the set has been created, but you can remove items and add new items."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Duplicates not Allowed")," means, it can not have two items with the same value."),(0,r.kt)("h3",{id:"dictionary"},"Dictionary"),(0,r.kt)("p",null,"It is a collection of ",(0,r.kt)("strong",{parentName:"p"},"key:value")," pair which is ",(0,r.kt)("strong",{parentName:"p"},"ordered")," and ",(0,r.kt)("strong",{parentName:"p"},"changeable")," and it does not allow duplicate members."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Dictionaries are written with curly brackets, and have keys and values like ",(0,r.kt)("strong",{parentName:"p"},"{key:value}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"my_dict = { \"first_name\": \"Abhishek\",\n         \"last_name\": \"dixit\", \n         \"age\": 35 \n         } \nprint(my_dict)\n{'first_name': 'Abhishek', 'last_name': 'dixit', 'age': 35}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"As of Python version 3.7, dictionaries are ",(0,r.kt)("strong",{parentName:"p"},"ordered"),". In Python 3.6 and earlier, dictionaries are ",(0,r.kt)("strong",{parentName:"p"},"unordered"),".")),(0,r.kt)("p",null,"When we say that dictionaries are ordered, it means that the items can be refered by indexing and unordered means that the items does not have a defined order, you cannot refer to an item by using an index."))}u.isMDXComponent=!0},2331:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/python_IDLE-c2d3f061ab2eed74257c832678d12143.png"}}]);