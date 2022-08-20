# 78 Insertion Sort

Insertion is pretty similar to selection and bubble, however, there are some key distinctions. There are situation where insertion sort does well.

- builds up the sort by gradually creation a larger left half which is always sorted.

[**5**,*3*,4,1,2]<br>
[**3**,**5**,*4*,1,2]<br>
[**3**,**4**,**5**,*1*,2]<br>
[**1**,**3**,**4**,**5**,*2*]<br>
[**1**,**2**,**3**,**4**,**5**]<br>