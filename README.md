# Flask AG-Grid example

Example of reading in pandas, and using to_json() to convert to rows to populate rows.

Includes an example of posting row data as a json to a flask route endpoint.

To run:
```python
export FLASK_APP='app.py'
flask run
```

AG grid modified to be editable, hence open developers console to see row data converted to JSON string being posted to the `/post_data` endpoint