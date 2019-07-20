/*********************
Query regex
**********************/

GET index001/_search
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
