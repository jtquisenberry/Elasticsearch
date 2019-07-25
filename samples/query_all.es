/************************
Match all query
*************************/

GET index001/_search
{
    "query": {
        "match_all": {}
    }
}