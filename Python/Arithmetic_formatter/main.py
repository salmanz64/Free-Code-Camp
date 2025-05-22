def arithmetic_arranger(problems, show_answers=False):
    if len(problems)>=6:
        return 'Error: Too many problems.'
    mathProblems = []

    first_line = ''
    second_line = ''
    third_line = ''
    fourth_line = ''
    for math in problems:
        #check whether its an addition or substraction
        if '+' in math:
            splitted_numbers = math.split('+')
            op='+'
            
        elif '-' in math:
            splitted_numbers = math.split('-')
            op='-'
        else:
            return "Error: Operator must be '+' or '-'."
        if splitted_numbers[0].strip().isdigit() and splitted_numbers[1].strip().isdigit():
            pass
        else:
            return "Error: Numbers must only contain digits."
        first_number = int(splitted_numbers[0])
        second_number = int(splitted_numbers[1])
        
        if len(str(first_number))>=5  or len(str(second_number))>=5:
            return 'Error: Numbers cannot be more than four digits.'
        
        #add the sum
        
        if op == "+":
            result = first_number+second_number
        else:
            result = first_number-second_number
        
        #to obtain the number of spaces and dash line needed
        max_lines = len(str(max(first_number,second_number))) +2
        diff_in_op = max_lines - len(str(second_number)) -1
        mathProblems.append([first_number,second_number])
        first_line+= f'{(max_lines-len(str(first_number)))*" "}{first_number}    '
        second_line+= f'{op}{(diff_in_op)*" "}{second_number}    '
        if show_answers:
            fourth_line += f'{(max_lines-len(str(result)))*" "}{result}    '
           
        third_line += f'{(max_lines)*"-"}    '
    #to strip all the trailing spaces at the end   
    first_line = first_line.rstrip(" ")
    second_line= second_line.rstrip(" ") 
    third_line = third_line.rstrip(" ")
        
            


        
    # works only if show_answer is true 
    if show_answers:
        fourth_line = fourth_line.rstrip()
        return f'{first_line}\n{second_line}\n{third_line}\n{fourth_line}' 
    return f'{first_line}\n{second_line}\n{third_line}'



#to print the result

print(arithmetic_arranger(["3 + 855", "988 + 40"], True))