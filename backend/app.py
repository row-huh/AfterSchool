from flask import Flask

# create a flask app - it's like creating an instance of the Flask object
app = Flask(__name__)

# create a function that takes using a post request and initially prints on the terminal 
# will figure out how to send to vertex-ai soon

@app.route('/questionnaire', methods=['POST'])
def get_questionnaire_data():
    # get the data from the post request
    #TODO
    # print data
    #TODO
    # return a random html response
    
    return "Hello world"


# hello world nlahaisnfsianfpinsd