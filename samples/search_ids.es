
GET /index001/_search
{
    "query": {
        "ids" : {
            "type" : "type001",
            "values" : ["1", "2", "5"]
        }
    }
}