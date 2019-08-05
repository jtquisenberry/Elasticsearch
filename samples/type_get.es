/*****************************
Retrieve types
******************************/

GET index001/_mapping/_all



GET index001/_search
{
    "aggs": {
        "typesAgg": {
            "terms": {
                "field": "_type",
                "size": 200
            }
        }
    },
    "size": 0
}