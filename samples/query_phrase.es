/*************************************
Match a phrase in a specified field.
**************************************/

GET index001/_search
{
    "query": {
        "match_phrase": {
            "content": "edrm enron email data set"
        }
    }
}
