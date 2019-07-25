/***********************************
Aggregations - GROUP BY, COUNT(*)
************************************/

/*
https://www.elastic.co/guide/en/elasticsearch/reference/5.5/search-aggregations.html
*/

/*
https://www.quora.com/How-do-we-achieve-a-subquery-in-ElasticSearch

This technique returns distinct values and counts
*/

GET index001/_search
{
    "query": {
        "match_all": {}
    },
    "aggs": {
        "docs": {
            "terms": {
                "field": "path-mime-type",
                "size": 100000
            }
        }
    },
    "_source": [
        "aggregations"
    ]
}

/*
Result

"aggregations": {
    "docs": {
      "doc_count_error_upper_bound": 0,
      "sum_other_doc_count": 0,
      "buckets": [
        {
          "key": "application/vnd.nuix-evidence",
          "doc_count": 209812
        },
        {
          "key": "application/vnd.ms-outlook",
          "doc_count": 209773
        },
        {
          "key": "application/vnd.ms-outlook-folder",
          "doc_count": 209611
        },
        {
          "key": "filesystem/directory",
          "doc_count": 186841
        },
        {
          "key": "application/vnd.ms-outlook-note",
          "doc_count": 81832

*/

