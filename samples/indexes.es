/******************
 * List indices 
 ******************/
GET /_cat/indices?v

GET /_alias

/****************
Create index
*****************/
PUT /index001 

/*****************************
Refresh index for searching
*****************************/
POST /index001/_refresh

/***************************
Get index settings
****************************/
GET index001/_settings

