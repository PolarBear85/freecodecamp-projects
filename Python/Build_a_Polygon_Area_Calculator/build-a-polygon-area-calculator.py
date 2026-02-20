from abc import abstractmethod
import math

class Rectangle():
    def __init__(self,width:int,height:int) -> None:
        self._width = width
        self._height = height

    def __str__(self):
        return f"Rectangle(width={self._width}, height={self._height})"

    #Width property
    @property
    def width(self):
        return self._width

    def set_width(self,width):
        if width<= 0:
            raise ValueError("Width must be more than 0")
        else:
            self._width = width

    #Height property
    @property
    def height(self):
        return self._height
    

    def set_height(self,height:int):
        if height <= 0:
            raise ValueError("Height must be more than 0")
        else:
            self._height = height

    def get_area(self)-> int:
        return self._height * self._width

    def get_perimeter(self)->int:
        return 2*(self._width + self._height)

    def get_diagonal(self)->int:
        return math.sqrt((self._width**2)+(self._height ** 2))

    def get_picture(self)->str:

        if self._height > 50 or self._width > 50:
            return "Too big for picture"
        else:
            image = ""
            for row in range(self._height):
                image += "*" * self._width +"\n"
            return image

    def get_amount_inside(self,shape)->int:
        pass


class Square(Rectangle):
    def __init__(self,side):
        super().__init__
        self._width = side
        self._height = side
        self._side = side

    def __str__(self):
        return f"Square(side={self._side})"

    def set_side(self,side):
        self.set_height(side)
        self.set_width(side)

rect = Rectangle(3, 6)
print(rect.get_diagonal())
#rect.set_height(3)
#print(rect.get_perimeter())
#print(rect)
#print(rect.get_picture())
'''
sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())
print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))

'''


'''
dave = Rectangle(3,6)
print(dave)
print(dave.get_area())
print(dave.get_perimeter())
print(dave.get_diagonal())
print(dave.get_picture())

jeff = Square(12)
print(jeff)
print(jeff.get_area())
print(jeff.get_perimeter())
print(jeff.get_diagonal())
print(jeff.get_picture())
'''