Regular Expression Plus Term

GET _indexid_;item;schema-version=1/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "regexp": {
                        "content": "photos"
                    }
                },
                {
                    "term": {
                        "guid": "2ca295f353784babaf64b10b1f9c6465"
                    }
                }
            ]
        }
    },
    "_source": [
        "guid",
        "flag",
        "content"
    ]
}
