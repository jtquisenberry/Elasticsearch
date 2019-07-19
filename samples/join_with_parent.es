/**********************
JOINs with _parent
***********************/

/*
The _parent field must be added at the time a type is created. Attempting 
to specify the _parent after a type is created results in an error. 
https://stackoverflow.com/questions/35069735/create-a-parent-child-relationship-after-the-parent-type-already-exists

Even when specifying the _parent field during type creation, it is not 
possible for a type to be its own parent. Therefore, self-joins are not possible. 
https://www.elastic.co/guide/en/elasticsearch/reference/5.5/mapping-parent-field.html
*/

/***************************************
Adding a Type with a _parent Mapping
****************************************/

PUT index001/_mapping/jqtype002
{
    "_parent": {
        "type": "docs"
    }
}

/*
Result

{
  "acknowledged": true
}
*/

/**********************************************
Adding a Type with Itself as _parent (Fails)
***********************************************/

PUT index001/_mapping/jqtype003
{
    "_parent": {
        "type": "jqtype003"
    }
}

/*
Result

{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "The [_parent.type] option can't point to the same type"
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "The [_parent.type] option can't point to the same type"
  },
  "status": 400
}
*/

/**********************************************************
Adding a Type and then Adding the _parent Mapping (Fails)
***********************************************************/

PUT index001/_mapping/jqtype001
{
    "properties": {
        "username": {
            "type": "text"
        }
    }
}

PUT index001/_mapping/jqtype001
{
    "_parent": {
        "type": "docs"
    }
}

/*
Result

{
  "error": {
    "root_cause": [
      {
        "type": "illegal_argument_exception",
        "reason": "The _parent field's type option can't be changed: [null]->[docs]"
      }
    ],
    "type": "illegal_argument_exception",
    "reason": "The _parent field's type option can't be changed: [null]->[docs]"
  },
  "status": 400
}
*/
