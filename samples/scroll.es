// Run scroll
POST index001/_search?scroll=1m
{
    "query": {"match_all":{}},
    "size": 1
} 

// Get next chunk
POST /_search/scroll 
{
    "scroll" : "1m", 
    // Get the token from the run scroll
    "scroll_id" : "DnF1ZXJ5VGhlbkZldGNoBQAAAAAAAAB5FjVQTExfVDVMU3JtQzZmaFk1cnVzdkEAAAAAAAAAehY1UExMX1Q1TFNybUM2ZmhZNXJ1c3ZBAAAAAAAAAHsWNVBMTF9UNUxTcm1DNmZoWTVydXN2QQAAAAAAAAB8FjVQTExfVDVMU3JtQzZmaFk1cnVzdkEAAAAAAAAAfRY1UExMX1Q1TFNybUM2ZmhZNXJ1c3ZB" 
}

// Delete all scroll contexts
DELETE /_search/scroll/_all