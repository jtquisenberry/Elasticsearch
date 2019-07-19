/*************************
Adding a Type Generally
**************************/

PUT index001/_mapping/jqtype001
{
    "properties": {
        "username": {
            "type": "text"
        }
    }
}
