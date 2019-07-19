/**************************************
JOINs with join (Elasticsearch 6.5)
***************************************/

/*
The join datatype establishes one-to-many relationships. It is probably 
necessary to add a join mapping to setup these relationships.
https://www.elastic.co/guide/en/elasticsearch/reference/current/parent-join.html

In version 6.3+, the _parent type was replaced with join. 
*/

/****************************
JOINs with Terms Queries
*****************************/

/*
A terms query may work as a join on a single document. It queries values 
from a particular field in a document and finds documents having those values 
in a specified property. This is a one-to-many relationship, but only one 
document is on the left side. This is guaranteed because a document ID must 
be specified.
*/


// Example 1

/*
At first we index the information for user with id 2, specifically, its 
followers, then index a tweet from user with id 1. Finally we search on 
all the tweets that match the followers of user 2.
https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-terms-query.html#query-dsl-terms-lookup
*/

PUT nuix-2b827c30016f40dca1abeb93d3a43d52;item;schema-version=1/jqtype001/2
{
    "followers": [
        "1",
        "3"
    ]
}

PUT nuix-2b827c30016f40dca1abeb93d3a43d52;item;schema-version=1/jqtype001/1
{
    "user": "1"
}

GET nuix-2b827c30016f40dca1abeb93d3a43d52;item;schema-version=1/jqtype001/_search
{
    "query": {
        "terms": {
            "user": {
                "index": "nuix-2b827c30016f40dca1abeb93d3a43d52;item;schema-version=1",
                "type": "jqtype001",
                "id": "2",
                "path": "followers"
            }
        }
    }
}

/*
Result

{
  "took": 1,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 1,
    "max_score": 0.2876821,
    "hits": [
      {
        "_index": "nuix-2b827c30016f40dca1abeb93d3a43d52;item;schema-version=1",
        "_type": "jqtype001",
        "_id": "1",
        "_score": 0.2876821,
        "_source": {
          "user": "1"
        }
      }
    ]
  }
}
*/


// Example 2

GET nuix-7674bc4a60b74ea7bac8996a98b0cb94;item;schema-version=1/_search
{
    "query": {
        "terms": {
            "path-mime-type": {
                "index": "nuix-7674bc4a60b74ea7bac8996a98b0cb94;item;schema-version=1",
                "type": "docs",
                "id": "f3f51bbe7cac4550959295bbe3afa580.141",
                "path": "path-mime-type"
            }
        }
    }
}

/*
Result

{
  "took": 46,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 209812,
    "max_score": 0.24210723,
    "hits": [
      {
*/

