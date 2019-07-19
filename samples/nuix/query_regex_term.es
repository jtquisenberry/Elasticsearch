// Run Regex

GET _indexid_;item;schema-version=1/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "regexp": {
                        "content": "photos"
                    }
                },
                {
                    "term": {
                        "guid": "fd8e52279ee246d781e06dbcace93c76"
                    }
                }
            ]
        }
    },
    "_source": [
        "guid",
        "flag",
        "content"
    ]
}

// Result: One document, one hit
