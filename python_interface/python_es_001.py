import requests
import json

def get_field_mappings():
    # api-endpoint
    URL = "http://127.0.0.1:9200/index001/_mapping/_all"
    r = requests.get(url=URL)
    data = r.json()
    print(data)

def get_regex():

    # api-endpoint
    url = "http://127.0.0.1:9200/index001/_search"

    # headers
    headers = {'Content-type': 'application/json'}

    # Define JSON String
    params = """
    {
      "query": {
        "regexp": {
          "content": "(p|x)hotos"
        }
      },
      "_source": [
        "guid",
        "flag",
        "content"
      ]
    }
    """

    params = json.loads(params)
    print(params)

    # sending get request and saving the response as response object
    #response = requests.get(url=url, params=params, headers=headers) # params requires a dict()
    response = requests.get(url=url, json=params, headers=headers)

    # extracting data in json format
    data = response.json()
    print('hit count', data['hits']['total'])
    print('first guid', data['hits']['hits'][0]['_source']['guid'])

    print('DONE')


if __name__ == '__main__':
    get_regex()
    print('END')
