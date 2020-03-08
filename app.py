from flask import Flask, render_template, jsonify, request
import pandas as pd

app = Flask(__name__)

@app.route('/', methods=['get'])
def main():
    return render_template('index.html')

@app.route('/get_data', methods=['get'])
def get_data():
    df = pd.read_csv('MOCK_DATA.csv', encoding='utf8')
    rows = df.to_json(orient='records')
    return jsonify(rows)

@app.route('/post_data', methods=['post'])
def post_data():
    print('From json: ',request.json)
    if request.json:
        print('id: ', request.json.get('id'))
        print('first_name: ', request.json.get('first_name'))
    return jsonify({'response': f'Post request {request.json.get("id")} successful'})

if __name__ == '__main__':
    app.run()