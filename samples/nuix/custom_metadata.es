/***************************************
Example Document with Custom Metadata
****************************************/

/*
Guid: 7c8eebd23a60462fa2e2995573be388c
_id: 9a0f61699c254a04bb0a40ee47aa34a7.2
*/


GET _indexid_;item;schema-version=1/_search
{
    "query": {
        "term": {
            "guid": "7c8eebd23a60462fa2e2995573be388c"
        }
    }
}


/************************
Example Document
*************************/

GET _indexid_;item;schema-version=1/item-annotation/_search
{
    "query": {
        "term": {
            "custom-metadata;mode": "user"
        }
    }
}

/*
Result

{
  "took": 0,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 1,
    "max_score": 6.2486873,
    "hits": [
      {
        "_index": "_indexid_;item;schema-version=1",
        "_type": "item-annotation",
        "_id": "item=9a0f61699c254a04bb0a40ee47aa34a7.2;engine.item-custom-metadata=DogsCMDogs",
        "_score": 6.2486873,
        "_routing": "9a0f61699c254a04bb0a40ee47aa34a7.2",
        "_parent": "9a0f61699c254a04bb0a40ee47aa34a7.2",
        "_source": {
          "annotation-name": "DogsCMDogs",
          "annotation-type": "item-custom-metadata",
          "custom-metadata;metadata-fieldtype": "text",
          "custom-metadata;mode": "user",
          "custom-metadata;string-value": "I like dogs."
        }
      }
    ]
  }
}
*/

/*************************************
Delete by Query - Custom Metadata
**************************************/

POST _indexid_;item;schema-version=1/item-annotation/_delete_by_query?conflicts=proceed
{
  "query": {
    "term": {
      "custom-metadata;mode": "user"
    }
  }

}