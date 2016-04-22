import json
import itertools


def get_date(item):
    return "%04d-%02d-%02d" % (item['date']['year'], item['date']['month'], item['date']['day'])

with open('holidays.src.json') as f:
    data = json.load(f)

groupes = itertools.groupby(data, lambda x: x['date']['year'])
data = { year: { get_date(item): item['localName'] for item in group }
    for year, group in groupes }

with open('../static/holidays.json', 'w') as f:
    f.write(json.dumps(data, indent=4, sort_keys=True))

