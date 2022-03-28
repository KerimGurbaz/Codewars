# Convert string to camel case

# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

# Examples

# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

def to_camel_case(text):
    return text[:1] + text.title()[1:].replace('_', '').replace('-', '')

# or 
text="the_pippi-was_Pippi"
y=text.replace("_"," ")
z=y.replace("-"," ")
q=z.title().replace(" ","")
print(text[0]+q[1:])

