"""Dump the file pathes of intro pictures into json file"""
import os
import re
import json


def main():
    """As always, go monolithic =)"""
    fdir = os.path.join('public', 'image', 'intro_pics')
    pic_lst = []

    for pic_name in os.listdir(fdir):
        pic_lst.append(os.path.join(fdir, pic_name))

    with open(os.path.join('data', 'intro_pics.json'), 'w+') as fjson:
        json.dump(pic_lst, fjson, indent=4)

if __name__ == '__main__':
    main()
