// Determine Current Analyzer

GET index001/_mapping/_all

// or

GET index001/_mapping/docs/field/content

/*
Result:

{
  "index001": {
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
