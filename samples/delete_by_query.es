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