/************************
How to Index a Field
*************************/

/**************************
Retrieve Mappings
***************************/
GET index001/_mapping


/********************************
Add an index to a specified type,
specified field.
*********************************/

PUT index001/_mapping/items
{
    "properties": {
        "itemText": {
            "index": true
        }
    }
}


/*************************************
Add keyword index to "raw" subfield.
**************************************/
POST index001/_mapping/items
{
    "properties": {
        "itemText": {
            "type": "text",
            "index": false,
            "fields": {
                "raw": {
                    "type": "keyword"
                }
            }
        }
    }
}

/***************************************
Add text index to "raw3" subfield.
****************************************/

POST index001/_mapping/items
{
    "properties": {
        "itemText": {
            "type": "text",
            "index": false,
            "fields": {
                "raw3": {
                    "type": "text"
                }
            }
        }
    }
}


/****************************************
Test with searches
*****************************************/

GET index001/items/_search
{
    "query": {
        "regexp": {
            "itemText.raw": ".*EDRM.*"
        }
    }
}


GET my_index/doc/_search
{
    "query": {
        "regexp": {
            "city": ".*york.*"
        }
    }
}


GET index001/items/_search
{
    "query": {
        "multi_match": {
            "query": "quick brown foxes",
            "fields": [
                "itemText",
                "itemText.raw"
            ],
            "type": "most_fields"
        }
    }
}


