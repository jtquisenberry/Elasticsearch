// Basic search with source filtering
GET /index001/type001/_search
{
    "query": {
        "match_all": {}
    },
    "_source": [
        "user",
        "post_date",
        "text"
    ]    
}

