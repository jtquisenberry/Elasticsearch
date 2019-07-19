// Determine Current Analyzer

GET _indexid_;item;schema-version=1/_mapping/_all

// or

GET _indexid_;item;schema-version=1/_mapping/docs/field/content

/*
Result:

{
  "_indexid_;item;schema-version=1": {
    "mappings": {
      "docs": {
        "content": {
          "full_name": "content",
          "mapping": {
            "content": {
              "type": "text",
              "term_vector": "yes",
              "analyzer": "nuix_natural_language_analyser",
              "fielddata": true
            }
          }
        }
      }
    }
  }
}
*/
