/*************************
Adding a Field Generally
**************************/

PUT index001/_mapping/docs
{
  "properties": {
    "jqfield001": {
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