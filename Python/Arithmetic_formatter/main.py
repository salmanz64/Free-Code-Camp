def arithmetic_arranger(problems, show_answers=False):
    if len(problems)>=6:
        return 'Error: Too many problems.'
    mathProblems = []
    first_line = ''
    second_line = ''
    third_line = ''
    for math in problems:
        
        if '+' in math:
            splitted_numbers = math.split('+')
            op='+'
            
        elif '-' in math:
            splitted_numbers = math.split('-')
            op='-'
        else:
            return "Error: Operator must be '+' or '-'."
        
        first_number = int(splitted_numbers[0])
        second_number = int(splitted_numbers[1])
        if len(str(first_number))>=5  or len(str(second_number))>=5:
            return "Error: Numbers cannot be more than four digits."
        max_lines = len(str(max(first_number,second_number))) +2
         
        diff_in_op = max_lines - len(str(second_number)) -1
        mathProblems.append([first_number,second_number])
        first_line+= f'{(max_lines-len(str(first_number)))*" "}{first_number}    '
        second_line+= f'{op}{(diff_in_op)*" "}{second_number}    '
        third_line += f'{(max_lines)*"-"}    '   
    first_line = first_line.rstrip(" ")
    second_line= second_line.rstrip(" ") 
    third_line = third_line.rstrip(" ")     
        
    

    return f'{first_line}\n{second_line}\n{third_line}'

print(arithmetic_arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]))