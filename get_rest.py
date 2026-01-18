import re

filepath = 'react-course/src/data/lessons.js'
with open(filepath, 'r') as f:
    content = f.read()

# Find the start of Lesson 15
match = re.search(r'\{\s*id: 15,', content)
if match:
    print(content[match.start():])
else:
    print("Not found")
