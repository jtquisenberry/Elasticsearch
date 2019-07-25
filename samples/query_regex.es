/*********************
Query regex
**********************/

GET index001/_search
{
    "query": {
        "regexp": {
            "user": "(j|z)acob"
        }
    },
    "_source": [
        "user",
        "post_date",
        "text"
    ]
}


GET index001/_search
{
    "query": {
        "regexp": {
            "user": ".*aco.*"
        }
    }
}
