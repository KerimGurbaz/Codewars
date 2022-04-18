You can find some examples in the test fixtures.


while True:
  if seconds >=3600:
    seconds -= 3600
    hh +=1  
  elif seconds >=60:
    seconds -=60
    mm +=1 
  else:
    seconds
    break
if len(str(hh))>1:
  hh
else:
  hh="0"+str(hh)
if len(str(mm))>1:
  mm
else:
  mm="0"+str(mm)

if len(str(seconds))>1:
  seconds
else:
  seconds="0"+str(seconds)


  
print(str(hh)+":"+str(mm)+":"+str(seconds))
  


# or 


def make_readable(s):
    return '{:02}:{:02}:{:02}'.format(s / 3600, s / 60 % 60, s % 60)


# or 

def make_readable(seconds):
    h= seconds/60**2
    m= (seconds%60**2)/60
    s= (seconds%60**2%60)
    return "%02d:%02d:%02d" % (h, m, s)
kerimgurbaz@Damla-iMac Codewars % 
