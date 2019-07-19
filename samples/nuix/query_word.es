//Match a Single Word

GET _indexid_;item;schema-version=1/_search
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
