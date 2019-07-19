/****************************
Example Document with a Tag
*****************************/

/************
Document
*************/

GET _indexid_;item;schema-version=1/_search
{
    "query": {
        "term": {
            "guid": "7c8eebd23a60462fa2e2995573be388c"
        }
    }
}

/******************************
Tagged Documents in Item Index
*******************************/

GET _indexid_;item;schema-version=1/item-annotation/_search
{
    "query": {
        "term": {
            "annotation-name": "top|second"
        }
    }
}

/*
Result

"hits": [
      {
        "_index": "_indexid_;item;schema-version=1",
        "_type": "item-annotation",
        "_id": "item=9a0f61699c254a04bb0a40ee47aa34a7.6;engine.tag=top|second",
        "_score": 6.612041,
        "_routing": "9a0f61699c254a04bb0a40ee47aa34a7.6",
        "_parent": "9a0f61699c254a04bb0a40ee47aa34a7.6",
        "_source": {
          "annotation-name": "top|second",
          "annotation-type": "item-tag",
          "annotation-definition-id": "engine.tag=top|second"
        }
      },
      {
        "_index": "_indexid_",
        "_type": "item-annotation",
        "_id": "item=9a0f61699c254a04bb0a40ee47aa34a7.7;engine.tag=top|second",
        "_score": 6.5643253,
        "_routing": "9a0f61699c254a04bb0a40ee47aa34a7.7",
        "_parent": "9a0f61699c254a04bb0a40ee47aa34a7.7",
        "_source": {
          "annotation-name": "top|second",
          "annotation-type": "item-tag",
          "annotation-definition-id": "engine.tag=top|second"
        }
      },

*/

/*************************
Tag in Annotation Index
**************************/

GET _indexid_;annotation-definition;schema-version=1/_search
{
    "query": {
        "term": {
            "annotation-name": "top|second"
        }
    }
}

/*
Result

{
  "took": 0,
  "timed_out": false,
  "_shards": {
    "total": 1,
    "successful": 1,
    "failed": 0
  },
  "hits": {
    "total": 1,
    "max_score": 1.2039728,
    "hits": [
      {
        "_index": "_indexid_;annotation-definition;schema-version=1",
        "_type": "tag-definition",
        "_id": "engine.tag=top|second",
        "_score": 1.2039728,
        "_source": {
          "annotation-name": "top|second"
        }
      }
    ]
  }
}
*/


// Example 2

GET _indexid_;annotation-definition;schema-version=1/_search
{
    "query": {
        "term": {
            "_type": "tag-definition"
        }
    }
}


/****************
Tag a Document
*****************/

/*
NAME

To tag a document, create a new document with a type of "item-annotation". The ID 
must be specified in the URL portion of the request.  The ID looks like this:

"_id": "item=9a0f61699c254a04bb0a40ee47aa34a7.7;engine.tag=top|second"

And is composed of these parts:
	• "item="
	• ID of the Item
	• engine.tag
	• Name of the tag
    
In this example, document with guid="ba9cfc75fdcd4022b9e73f9bd28970fe" has _id="9a0f61699c254a04bb0a40ee47aa34a7.28"
*/

/*
ROUTING

Routing is required. Routing looks like this:

"_routing": "9a0f61699c254a04bb0a40ee47aa34a7.6"

The route consists of the ID of the item.
*/

/*
REFRESH

Use the refresh parameter to make the results immediately searchable.

?refresh=true

It is unclear when this is useful, and overuse may cause performance degradation.
*/

/*
_parent

The tag must be associated with the parent. This is done by setting the _parent 
value of the tag to the _id of the document.

parent=9a0f61699c254a04bb0a40ee47aa34a7.13

Example

Guid = 87d2c38fe2a3470aa028aa2790613f91
_id = 9a0f61699c254a04bb0a40ee47aa34a7.13
*/


GET _indexid_;item;schema-version=1/_search
{
    "query": {
        "term": {
            "guid": "87d2c38fe2a3470aa028aa2790613f91"
        }
    }
}


PUT _indexid_;item;schema-version=1/item-annotation/item=9a0f61699c254a04bb0a40ee47aa34a7.13;engine.tag=top|second?routing=9a0f61699c254a04bb0a40ee47aa34a7.13&parent=9a0f61699c254a04bb0a40ee47aa34a7.13
{
  "annotation-name": "top|second",
  "annotation-type": "item-tag",
  "annotation-definition-id": "engine.tag=top|second"
}

/*
Result

{
  "_index": "_indexid_;item;schema-version=1",
  "_type": "item-annotation",
  "_id": "item=9a0f61699c254a04bb0a40ee47aa34a7.25;engine.tag=top|second",
  "_version": 1,
  "result": "created",
  "_shards": {
    "total": 1,
    "successful": 1,
    "failed": 0
  },
  "created": true
}
*/


/******************
To Delete Tag
*******************/

DELETE _indexid_;annotation-definition;schema-version=1/tag-definition/engine.tag=port%20Tags|My_Tag

/**********************
Delete Item from Tag
***********************/

/*
Routing is required.
*/

DELETE _indexid_;item;schema-version=1/item-annotation/item=9a0f61699c254a04bb0a40ee47aa34a7.12;engine.tag=top|second?routing=9a0f61699c254a04bb0a40ee47aa34a7.12









