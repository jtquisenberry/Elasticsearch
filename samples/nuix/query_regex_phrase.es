//Cannot Search for Phrase with Regular Expression

/*
As with Nuix regex searches, a regular expression must match a term, not a phrase. This is probably due to this:

	You are trying to match terms, not the entire string. If this is being indexed with StandardAnalyzer, as I would suspect, your dates will be separated into multiple terms.
	https://stackoverflow.com/questions/25313051/elasticsearch-and-regex-queries

Perhaps this behavior can be changed with indexing options.
*/ 

GET _indexid_;item;schema-version=1/_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "regexp": {
                        "content": "chuck mcgee"
                    }
                },
                {
                    "term": {
                        "guid": "2ca295f353784babaf64b10b1f9c6465"
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