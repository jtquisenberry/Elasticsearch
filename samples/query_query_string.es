/*****************************
Run a query string
******************************/

GET index001/_search
{
    "query": {
        "query_string": {
            "default_field": "user",
            "query": "*j* AND *aco*"
        }
    },
    "_source": [
        "post_date",
        "text",
        "user"
    ]
}
