from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_swagger_ui import get_swaggerui_blueprint
from sqlalchemy.sql import func 
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://jasmin:password@localhost:5432/database'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

SWAGGER_URL = '/swagger'
API_URL = '/static/swagger.json'
swagger_ui_blueprint = get_swaggerui_blueprint(SWAGGER_URL, API_URL, config={'app_name': "Flask API"})
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)

@app.route('/')
def home():
    return "Flask API routing working"

# this is defining the event model to store object statuses
class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    object_id = db.Column(db.String(50), unique=True, nullable=False)
    status = db.Column(db.String(50), nullable=False)
    timestamp = db.Column(db.String(50), default=func.now())

    def __repr__(self):
        return f'<Event {self.object_id}>'

with app.app_context():
    db.create_all()

# this is defining the endpoint to fetch the status of an object
@app.route('/status/<object_id>', methods=['GET'])
def get_object_status(object_id):
    event = Event.query.filter_by(object_id=object_id).first()
    if event:
        return jsonify({
            'object_id': event.object_id,
            'status': event.status,
            'timestamp': event.timestamp
        }), 200
    else:
        return jsonify({'message': 'Object not found'}), 404

@app.route('/add_event', methods=['POST'])
def add_event():
    data = request.get_json()
    object_id = data.get('object_id')
    status = data.get('status')

    if not object_id or not status:
        return jsonify({"error": "object_id and status are required"}), 400

    new_event = Event(object_id=object_id, status=status)
    db.session.add(new_event)
    db.session.commit()
    
    return jsonify({"message": "Data added successfully", "event": {
        "object_id": new_event.object_id,
        "status": new_event.status,
        "timestamp": new_event.timestamp
    }}), 201

# creating sample data to simulate the object status (called before each request)
@app.before_request
def create_sample_data():
    if Event.query.count() == 0:
        db.session.add(Event(object_id="obj1", status="Active", timestamp="2024-11-07 10:00:00"))
        db.session.add(Event(object_id="obj2", status="Inactive", timestamp="2024-11-07 10:10:00"))
        db.session.commit()

if __name__ == '__main__':
    app.run(debug=True)
