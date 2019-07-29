/*******************************
Time Stamp Range
********************************/

GET /_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "wildcard": {
                        "app_name": "*Analytics*"
                    }
                },
                {
                    "range": {
                        "@timestamp": {
                            "gte": "2019-02-01T00:00:00.000",
                            "lte": "2019-02-03T00:00:00.000",
                            "time_zone": "+00:00"
                        }
                    }
                }
            ]
        }
    }
}

