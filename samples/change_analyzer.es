/* 
Change Analyzer on Field "content" to "keyword"

You cannot change the mapping (including the analyzer) of an existing field. What you need to do if you want to change the mapping of existing documents is reindex those documents to another index with the updated mapping.

So, first create a new index, which you create with the new mapping. Then use the reindex API to get all documents from the old index A into the new index B. As those documents get reindexed, they will get the updated mapping applied to them. More info about the reindex API here: https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-reindex.html 196

https://discuss.elastic.co/t/change-analyzer-of-specific-property/99012
*/

PUT _indexid_;item;schema-version=1/_mapping/docs
{
    "properties": {
        "content": {
            "analyzer": "keyword",
            "type": "text"
        }
    }
}

/*
Result:

{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "Mapper for [content] conflicts with existing mapping in other types:\n[mapper [content] has different [store_term_vector] values, mapper [content] has different [analyzer]]"
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "Mapper for [content] conflicts with existing mapping in other types:\n[mapper [content] has different [store_term_vector] values, mapper [content] has different [analyzer]]"
  },
  "status": 400
}
*/

/*
Create New Index for "content"

Since it is not possible to change the analyzer of a field within a given index, this is an attempt to add a new index. This uses the reindex API.
*/ 

PUT jq_index_001 
{}

/*
Result

{
  "acknowledged": true,
  "shards_acknowledged": true
}
*/


PUT jq_index_001/_mapping/docs
{
    "properties": {
        "content": {
            "type": "text",
            "analyzer": "keyword"
        }
    }
}

/*
Result

{
  "acknowledged": true
}
*/

/*
Check the "content" Field
*/

GET jq_index_001/_mapping/docs/field/content

/*
Result

{
  "jq_index_001": {
    "mappings": {
      "docs": {
        "content": {
          "full_name": "content",
          "mapping": {
            "content": {
              "type": "text",
              "analyzer": "keyword"
            }
          }
        }
      }
    }
  }
}
*/

/********************
* Reindex
*********************/

POST _reindex
{
    "source": {
        "index": "_indexid;item;schema-version=1",
        "_source": [
            "guid",
            "flag",
            "content"
        ]
    },
    "dest": {
        "index": "jq_index_001"
    }
}


/************************
 Try a Basic Term
 ************************/

GET jq_index_001/_search
{
    "query": {
        "wildcard": {
            "content": "*photo*"
        }
    }
}

/*
Result

Hits = 1
*/

/*************
* Try Regex
**************/

GET jq_index_001/_search
{
    "query": {
        "regexp": {
            "content": "photos"
        }
    }
}

/*************************
Run Case-Sensitive Regex
**************************/

GET jq_index_001/_search
{
    "query": {
        "regexp": {
            "content": ".*approached.*EDRM.*"
        }
    }
}

/*
Result: 2 

hits
*/












