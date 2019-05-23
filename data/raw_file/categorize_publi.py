""" refactor the publication into 6 sections
    - group leaders
    - others
"""
import os
import re
import json

#NAME_PATTERNS = {

def main():
    """ Monolithic =)"""
    original_json = os.path.join(os.pardir, 'publications.json')
    with open(original_json, 'r') as fread:
        publications = json.load(original_json)


