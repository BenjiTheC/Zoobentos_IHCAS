"""format the file and get the publication array"""
import os
import re
import json

def main():
    """Monolithic -.-"""
    with open('./YanlingLiang_publications.txt', 'r') as fread:
        long_str = fread.read()
        lst_of_lines = long_str.split('\n')
        #print(lst_of_lines)

        lines_group = []
        curr_line = []
        lines_iterator = iter(lst_of_lines)
        while True:
            try:
                curr_part = next(lines_iterator)
            except StopIteration:
                break
            else:
                #print('\n\n\n\n', curr_part)
                if curr_part:
                    curr_line.append(curr_part)
                else:
                    line = ' '.join(curr_line)
                    #print('\n\n\n\n', line)
                    if line:
                        lines_group.append(line)
                    curr_line = []

    publi_lst = []
    pattern = r'[\d]* *\.(.*)'
    for ind, line in enumerate(lines_group):
        reg = re.search(pattern, line)
        publi_lst.append(reg.group(1).strip())
    
    with open('YanlingLiang_publications.json', 'w+') as fjson:
        json.dump(publi_lst, fjson, indent=4)

if __name__ == '__main__':
    main()
