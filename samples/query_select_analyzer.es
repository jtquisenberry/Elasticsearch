
/*********************************
Select a query-time analyzer
**********************************/

/* This is for full-text queryies, and not regular expressions. */

GET index001/_search
{
    "query": {
        "match": {
            "user": {
                "query": "jacob",
                "analyzer":"keyword"
            }
            
        }   
        
    }
}