

/**************************
Retrieve all documents
***************************/
GET index001/_search
{
    "query": {
        "match_all": {}
    }
}


/**************************
Retrieve documents by term
***************************/

/* Depending on the analyzer, it may be necessary to query
terms in lower case */

GET index001/_search
{
    "query": {
        "term": {
            "user": "jacob"
        }
    },
    "_source": [
        "user",
        "post_date",
        "text"
    ]
}
