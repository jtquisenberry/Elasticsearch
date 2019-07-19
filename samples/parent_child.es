/****************
has_parent
*****************/

//Returns children having the given parent.

GET index001/_search
{
    "query": {
        "has_parent": {
            "parent_type": "docs",
            "query": {
                "term": {
                    "guid": "e8cb915fa08348d7af16dff97b599d43"
                }
            }
        }
    }
}


/*******************
Identifying Types
********************/

/*
The has_parent query requires that the query specify the type of the parent. 
Therefore, it is important to understand the parent-child hierarchy.
*/

GET index001/_mappings

/*
{
    "index001": {
        "mappings": {
            "docs": {<snip>},
            "item-annotation": {<snip>}
        }
    }
}
*/

/*********************************
Identifying Parents and Children
**********************************/

//Parent

/*
Notice that the full name of the _parents property includes a "#" suffix. 
Therefore, it should be searched with a wildcard.
*/

GET index001/_mapping/item-annotation/field/_parent*?include_defaults=true

/*
{
    "index001": {
        "mappings": {
            "_parent#docs": {
                "full_name": "_parent#docs",
                "mapping": {
                    "_parent": {
                        "type": "docs",
                        "eager_global_ordinals": true
                    }
                }
            }
        }
    }
}
*/


//Child

/*
It is not possible to query a child type.
*/
