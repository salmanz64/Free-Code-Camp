import copy
import random

class Hat:
    #to use the instances arguments in contents
    def __init__(self,**kwargs):
        self.contents = []
        for color,num in kwargs.items():
            for i in range(num):
                self.contents.append(color)
        
    
    # draw method to draw balls from list of balls
    def draw(self,num):
        drawn_balls = []
        if num>=len(self.contents):
            drawn_balls = self.contents[:]
            self.contents.clear()
            return drawn_balls
        for _ in range(num):
            random_num = random.randrange(len(self.contents))
            
            ball = self.contents.pop(random_num)
            
            drawn_balls.append(ball)
            
        return drawn_balls

#it shows the probability of the balls that are obtained by checking if the obtained is equal to the num_balls_drawn or greater
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
    successful_tries = 0
    for num in range(num_experiments):
        isSuccessful=False
        copyhat = copy.deepcopy(hat)
        obtained_balls = copyhat.draw(num_balls_drawn)
        dict_format_of_balls = {}
        for color in obtained_balls:
               if color in dict_format_of_balls:
                   dict_format_of_balls[color] +=1
               else:
                    dict_format_of_balls[color] = 1
        for color,num in expected_balls.items():
            if color in dict_format_of_balls:
                if dict_format_of_balls[color]>=num:
                    isSuccessful=True
                else:
                    isSuccessful = False
                    break
            else:
                isSuccessful = False
                break
        if isSuccessful:
            successful_tries+=1                     

    return successful_tries/num_experiments
        




hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat,
                  expected_balls={'red':2,'green':1},
                  num_balls_drawn=5,
                  num_experiments=2000)