import requests
import json

# Replace these with your actual User ID and API Key
USER_ID = 'your_user_id'
API_KEY = 'your_api_key'

# Define the GraphQL query to get podcast series and episodes
query = """
{
  getPodcastSeries {
    uuid
    name
    description
    episodes {
      uuid
      name
      description
      audioUrl
    }
  }
}
"""

# Define the headers for the request
headers = {
    "Content-Type": "application/json",
    "X-USER-ID": USER_ID,
    "X-API-KEY": API_KEY
}

# Make the POST request to the GraphQL API endpoint
response = requests.post(
    'https://api.taddy.org',
    headers=headers,
    data=json.dumps({"query": query})
)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()
    # Check for errors in the response
    if "errors" in data:
        print("Errors:", data["errors"])
    else:
        # Filter and print the podcast series and episodes for the "Business" genre
        for series in data["data"]["getPodcastSeries"]:
            if "business" in series["name"].lower() or "business" in series["description"].lower():
                print(f"Podcast Series: {series['name']}")
                print(f"Description: {series['description']}")
                print("Episodes:")
                for episode in series["episodes"]:
                    print(f"  - {episode['name']}")
                    print(f"    Description: {episode['description']}")
                    print(f"    Audio URL: {episode['audioUrl']}")
else:
    print("Failed to fetch data:", response.status_code, response.text)
