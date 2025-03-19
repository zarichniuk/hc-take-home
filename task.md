**Important**

-   You have 8 hours to complete this part and upload your code to a repo of your choice.
    
-   The repository must be public.
    
-   Once you’ve completed the assignment, email your contact person with the repository link..
    

For this assignment, you will build an app using the  **Open-Meteo API**  to fetch weather data and create a simple, interactive experience. The app will have two primary screens: the Home Page and the Weather Details Page.

  

**Home Page**

  

**1. Current Weather**

-   Fetch and display the current weather based on the user's location using Open-Meteo’s API.
    
-   The page should display the following information:
    

-   Location Name (City, Country)
    
-   Temperature (in Celsius)
    
-   Weather Condition (e.g., Sunny, Rainy, Cloudy)
    
-   Weather Icon (representing the current condition)
    

**2. 5-Day Forecast**

-   A horizontal widget on the Home Page.
    
-   Displays a simple forecast for the next five days.
    
-   Each day should include:
    

-   Date
    
-   Expected high and low temperatures
    
-   Weather condition
    
-   Weather icon
    

**3. City Search**

-   Add a Search Bar at the top of the home page to allow users to search for weather data in different cities.
    
-   Display the search results below the search bar using a simple dropdown.
    
-   When a user searches, show relevant weather data for the entered city. Each result should be tappable and lead to the Weather Details Page.
    

  

**Weather Details Page**

When a user selects a location from the Home Page or search results, navigate to the Weather Details Page, showing detailed information about the selected location:

-   Location Name (Large, main heading at the top)
    
-   Temperature (Large, centered value)
    
-   Weather Condition (e.g., Clear Sky, Light Rain, Thunderstorm)
    
-   Full-size Weather Icon (A larger image displayed prominently on the page)
    
-   Wind Speed (Displayed in km/h)
    
-   Humidity (Percentage value)
    

  

**Additional Notes**

-   **API Usage:**
    

-   Refer to the  [Open-Meteo API](https://dk4ctf04.eu1.hs-sales-engage.com/Ctc/UE+23284/dk4CTF04/JkM2-6qcW6N1vHY6lZ3kCN4NbWSnR58mWW4bfKWc3BPl0fN4NH790GFQDFW8mzJ1f6ZmLJgN4KQk42NwBZJW2-Pn9v8FdZq1VDbySt2r-MdRW177Q6r4_hW0KW2Q7nwL3ys9ftW7Hp2qd31Y-63W79GbD97tZ71kN12CgvYZF4hfW3KCTRK24cvPlW6lqsNG6QcQSDVyb5466mNZj6W53PQ177XrmyrW6DdsgP4YH5jBN5NmBJXM6hxvW7X7Y0n4sqMh6W3N-DHs2bLc_xW10KDL-6jh0fWW7FW5db15mCVmf8GP4WW04) documentation for the appropriate endpoints and parameters to use.
    
-   Your task includes identifying the correct endpoints for:
    

-   Fetching current weather based on location.
    
-   Fetching a 5-day weather forecast.
    
-   Searching for weather data by city name.
    

-   **No API key is required for Open-Meteo's free endpoints.**
    

-   **Architecture and Code Quality:**
    

-   Ensure  **scalability**: the code should be easy to extend and maintain as the app grows.
    
-   Include  **error handling**  for network requests, showing appropriate responses if data cannot be fetched.
    
-   Write  **unit tests**  for key components, such as data models and network handling, to demonstrate test-driven development skills. (optional)
    
-   Properly manage  **state**  and  **lifecycle events**  to ensure the app behaves correctly when navigating between screens or when the app state changes (e.g., when rotating the device).
