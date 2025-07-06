class Rectangle:
    def __init__(self,width,height):
        self.width = width
        self.height = height

    def set_height(self,height):
        self.height = height

    def set_width(self,width):
        self.width = width;

    def get_area(self):
        return self.width * self.height

    def get_perimeter(self):
        return (2* self.width + 2 * self.height)

    def get_diagonal(self):
        return (self.width ** 2 + self.height ** 2) ** 0.5

    # shows the picture of the shape
    def get_picture(self):

        if self.width > 50 or self.height > 50:
            return 'Too big for picture.'
        shape_repr = ''
        for i in range(self.height):
            shape_repr += "*"*self.width + '\n'
        return shape_repr

    # to find the no. of shapes inside the shape
    def get_amount_inside(self,shape):
        no_of_shapes_in_row = self.width // shape.width
        no_of_shapes_in_col = self.height // shape.height
        total_shapes = no_of_shapes_in_row * no_of_shapes_in_col
        return total_shapes


    def __str__(self):
        args_list =  [f'{key}={val}' for key,val in vars(self).items()]
        args = ', '.join(args_list)
        return f'{self.__class__.__name__}({args})'

# to make it child class 
class Square(Rectangle):
    #assign super() class attr
    def __init__(self,side):
        super().__init__(side,side)

    def set_side(self,side):
        super().set_height(side)
        super().set_width(side)

    def set_width(self,side):
        self.set_side(side)
        
    def set_height(self,side):
        self.set_side(side)

    def __str__(self):
        return f'{self.__class__.__name__}(side={self.width})'


rect = Rectangle(10,5)
print(rect.get_area())
rect.set_height(3)
print(rect.get_perimeter())
print(rect)
print(rect.get_picture())

sq = Square(9)
print(sq.get_area())
sq.set_side(4)
print(sq.get_diagonal())

print(sq)
print(sq.get_picture())

rect.set_height(8)
rect.set_width(16)
print(rect.get_amount_inside(sq))