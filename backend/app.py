from flask import Flask, request

app = Flask(__name__)

@app.route("/questions", methods=['POST'])
def submit_form():
    data = request.form.to_dict()
    print("Form data received:", data)
    # Assuming add_system_message and handle_query are defined elsewhere
    # system_prompt = add_system_message(data)
    # return handle_query(system_prompt)
    return "Form data received successfully"

if __name__ == '__main__':
    app.run(debug=True)