/*****************************************
Copy documents from one index to another
******************************************/

POST _reindex
{
    "source": {
        "index": "index001",
        "_source": [
            "post_date",
            "text",
            "user"
        ]
    },
    "dest": {
        "index": "index002"
    }
}


GET index002/_search




