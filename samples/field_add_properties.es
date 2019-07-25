/********************************
Add Properties to Existing Field
*********************************/

PUT index001/_mapping/jqtype001
{
    "properties": {
        "cows": {
            "type": "text"
        }
    }
}

/*
Result

{
  "acknowledged": true
}
*/
