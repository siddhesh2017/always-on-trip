import { GoogleGenerativeAI } from "@google/generative-ai";
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap Budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo GeolocationCoordinates, rating, descriptions and suggest itineary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotels\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$60-$100 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/896000/895989/895989_100_b.jpg\",\n      \"geolocationCoordinates\": \"36.1699, -115.1423\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street Experience, offering a retro vibe and a casino.\"\n    },\n    {\n      \"hotelName\": \"The Golden Nugget\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$75-$150 per night\",\n      \"hotelImageUrl\": \"https://media.cntraveler.com/photos/5d7d7f80740f887a4f832e61/master/pass/golden-nugget-las-vegas-hotel-casino-exterior-pool-01.jpg\",\n      \"geolocationCoordinates\": \"36.1696, -115.1419\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel with a lively atmosphere, featuring a shark tank, a casino, and various dining options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$50-$100 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/1000000/900000/893000/893243/893243_100_b.jpg\",\n      \"geolocationCoordinates\": \"36.1155, -115.1715\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel known for its circus-themed attractions and a large casino.\"\n    },\n    {\n      \"hotelName\": \"Plaza Hotel & Casino\",\n      \"hotelAddress\": \"1 Main Street, Las Vegas, NV 89101\",\n      \"price\": \"$65-$120 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1900000/1850000/1848739/1848739_100_b.jpg\",\n      \"geolocationCoordinates\": \"36.1697, -115.1415\",\n      \"rating\": 4.0,\n      \"description\": \"A centrally located hotel on Fremont Street, offering a modern feel with a casino and dining options.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian mall with a canopy of LED lights, live entertainment, and a vibrant atmosphere.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/8442/fremont-street-experience-las-vegas-strip.jpg\",\n          \"geoCoordinates\": \"36.1699, -115.1423\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Afternoon - Evening (5 PM - 10 PM)\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"A museum showcasing vintage neon signs from Las Vegas's history.\",\n          \"placeImageUrl\": \"https://cdn.britannica.com/98/160398-050-57706A06/Neon-Museum-Las-Vegas-Nevada-United-States.jpg\",\n          \"geoCoordinates\": \"36.1731, -115.1454\",\n          \"ticketPricing\": \"$20-$30 per person\",\n          \"time\": \"Evening (7 PM - 9 PM)\"\n        },\n        {\n          \"placeName\": \"Heart Attack Grill\",\n          \"placeDetails\": \"A themed restaurant known for its unhealthy but delicious burgers and its unique service.\",\n          \"placeImageUrl\": \"https://media.timeout.com/images/103663781/image.jpg\",\n          \"geoCoordinates\": \"36.1680, -115.1412\",\n          \"ticketPricing\": \"N/A\",\n          \"time\": \"Late Night (10 PM - 12 AM)\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"plan\": [\n        {\n          \"placeName\": \"Hoover Dam\",\n          \"placeDetails\": \"A massive concrete arch-gravity dam on the Colorado River, a popular destination for its engineering marvel and scenic views.\",\n          \"placeImageUrl\": \"https://www.nps.gov/media/photo/legacy/upload/2018/11/09/c4f03821-f52a-4a0f-ad36-08848887f60f.jpg\",\n          \"geoCoordinates\": \"36.0071, -114.8978\",\n          \"ticketPricing\": \"$30 per person\",\n          \"time\": \"Morning (9 AM - 12 PM)\"\n        },\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic park offering hiking trails, rock climbing, and stunning red rock formations.\",\n          \"placeImageUrl\": \"https://www.nps.gov/media/photo/legacy/upload/2017/08/21/d78a799e-23b3-497d-8489-df42f48306bd.jpg\",\n          \"geoCoordinates\": \"36.1154, -115.2961\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"time\": \"Afternoon (1 PM - 4 PM)\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping and dining destination featuring the High Roller observation wheel, a variety of restaurants, and bars.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/5059/linq-promenade-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1217, -115.1723\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Evening (5 PM - 8 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A free attraction featuring stunning floral displays that change seasonally.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/4231/bellagio-conservatory-and-botanical-garden-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1183, -115.1741\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Morning (10 AM - 12 PM)\"\n        },\n        {\n          \"placeName\": \"The Venetian & The Palazzo\",\n          \"placeDetails\": \"A luxury resort complex featuring a replica of Venice, Italy, with canals, gondolas, and upscale shopping.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2954/the-venetian-and-the-palazzo-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1204, -115.1737\",\n          \"ticketPricing\": \"Free (for the gondola rides, it's around $30 per person)\",\n          \"time\": \"Afternoon (1 PM - 4 PM)\"\n        },\n        {\n          \"placeName\": \"The Strip\",\n          \"placeDetails\": \"Las Vegas Boulevard, home to world-class casinos, hotels, restaurants, and entertainment.\",\n          \"placeImageUrl\": \"https://www.visitlasvegas.com/media/2943/the-strip-las-vegas.jpg\",\n          \"geoCoordinates\": \"36.1218, -115.1724\",\n          \"ticketPricing\": \"Free\",\n          \"time\": \"Evening (5 PM - 10 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Please note:**\n\n* **Prices are approximate and can vary depending on the season and availability.**\n* **You can adjust the itinerary to your preferences and interests.**\n* **Consider bringing reusable water bottles to stay hydrated, especially during outdoor activities.**\n* **For more budget-friendly dining options, explore local eateries off the Strip.** \n* **Check out free events and shows offered by casinos and hotels on the Strip.**\n* **Pack comfortable shoes for walking, as you'll be doing a lot of it.**\n\nEnjoy your budget-friendly trip to Las Vegas! \n"},
          ],
        },
      ],
    });
  
