/************************************
Nested aggregation
*************************************/

GET _index_id_;item;schema-version=1\_search
{
  "size": 0,
  "aggs": {
    "dedupe_unique": {
      "filter": {
        "has_child" : {
          "type": "item-annotation",
          "query": {
             "bool": {
               "must": [
                { "term": {"annotation-type": "item-itemset-batch" } },
                { "term": { "itemset-batch;classification": "ORIGINAL" } }
               ]
            }
          }
        }
      },
      "aggs": {
        "sum_uniquefilesize": {
          "sum": {"field": "file-size" }
        }
      }
    },
    "dedupe_duplicate": {
       "filter": {
        "has_child" : {
          "type": "item-annotation",
          "query": {
             "bool": {
               "must": [
                { "term": {"annotation-type": "item-itemset-batch" } },
                { "term": { "itemset-batch;classification": "ORIGINAL" } }
               ]
            }
          }
        }
      },
      "aggs": {
        "sum_duplicatefilesize": {
          "sum": {"field": "file-size" }
        }
      }
    }
  }
}
