/*************************************
Delete by Query - Custom Metadata
**************************************/

POST index001/item-annotation/_delete_by_query?conflicts=proceed
{
    "query": {
        "term": {
            "custom-metadata;mode": "user"
        }
    }
}


/*************************************
Delete by Query - id
**************************************/

POST index001/tasks/_delete_by_query?conflicts=proceed
{
    "query": {
        "match": {
            "_id": "abc"
        }
    }
}