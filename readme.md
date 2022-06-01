simple arg parser for node

how to use


`touch args.json`


example args.json

{
	"expect": [
		{
			"short_char": "i",
			"long_word": "info",
			"is_required": false
		}
	]
}

the `expect` array defines the options for your desired configuration for the library to be used with.
