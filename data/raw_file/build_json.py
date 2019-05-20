""" Build JSON data file for the website
    IMPORTANT: Always run it on the top level of the directory
"""
import os
import re
import json

def file_reading_gen(path, fields, sep=',', header=False):
    """ A generator that reads text files and returns all of the values on a single line on each call to next()"""
    try:
        open_file = open(path, 'r')
    except FileNotFoundError:
        raise FileNotFoundError(f"{path} can't be found or opened")
    else:
        with open_file:

            for ind, line in enumerate(open_file):
                if header:
                    header = False
                    continue

                res = line.rstrip('\n\r').split(sep)

                if len(res) != fields:               # raise ValueError if the fields don't match
                    raise ValueError(f"{path} has {len(res)} fields in line {ind} but expected {fields}")
                yield tuple(res)

def main():
    """It's a tiny little script, just go monolithic..."""

    member_lst = []

    fpath = './members.csv'
    for first_name, last_name, title, research_area, email, phone, fax, order in file_reading_gen(fpath, 8, header=True):
        member = {}
        member['first_name'], member['last_name'], member['title'], member['research_area'], member['email'], member['phone'], member['fax'], member['order'] =\
        first_name, last_name, title, research_area, email, phone, fax, int(order)

        member_lst.append(member)

    member_lst.sort(key=lambda member: member['order'])

    with open(os.path.join(os.path.pardir, 'members.json'), 'w+') as fjson:
        json.dump(member_lst, fjson, indent=4)

if __name__ == '__main__':
    main()
