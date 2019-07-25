//What is "analyzer": "nuix_natural_language_analyser"

GET index001/_settings/

/* Result:

"nuix_natural_language_analyser": {
              "filter": [
                "lowercase"
              ],
              "char_filter": [
                "colon_splitter",
                "apostrophe_splitter",
                "unicode_apostrophe_splitter",
                "underscore_splitter",
                "period_splitter",
                "comma_splitter",
                "servicemark_splitter",
                "telephone_splitter",
                "trademark_splitter",
                "nfkc_normaliser"
              ],
              "type": "custom",
              "tokenizer": "standard"
            }

*/
