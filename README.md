# MovieMate 🎬

**Stop scrolling. Start watching.**

MovieMate is an intelligent movie recommendation web application that finds your perfect film in minutes. Answer just 6 quick questions about your preferences, and our algorithm matches you with movies tailored to your taste using the TMDB (The Movie Database) API.

## ✨ Features

- **Quick Quiz Format**: 6 personalized questions to gather your movie preferences
- **Streaming Platform Filtering**: Choose from multiple streaming services:
  - Netflix
  - Amazon Prime Video
  - Disney+ / JioHotstar
  - Apple TV+
  - HBO Max
  - Sony Liv
  - Zee5
  - Or "I Don't Mind" for all platforms

- **Genre Selection**: Pick from 10+ genres including Action, Comedy, Thriller, Horror, Romance, Sci-Fi, Documentary, Animation, Drama, and Fantasy

- **Runtime Preferences**: Filter movies by duration:
  - Under 90 minutes
  - Around 2 hours
  - 2.5+ hours
  - Doesn't matter

- **Recommendation Types**:
  - Blockbuster Hits (most popular)
  - Fan Favorites (most voted)
  - Hidden Gems (less popular)
  - Surprise Me (highest revenue)

- **IMDb Rating Filter**: Set your minimum acceptable rating (9+, 8+, 7+, 6+)

- **Instant Results**: Get personalized movie recommendations with:
  - Movie title
  - Movie poster
  - Plot overview
  - Direct watch link

- **Surprise Feature**: Skip the questions and get a random recommendation instantly

- **Beautiful UI**: Modern, gradient-based dark theme with smooth animations and responsive design

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with glassmorphism effects and animated gradients
- **APIs**: TMDB API v3 for movie database
- **Fonts**: Poppins (body text), Bebas Neue (headings)

## 📋 Project Structure

```
NYC-hackathon-R2/
├── index1.html          # Main application interface
├── main.js              # JavaScript logic for API calls and navigation
├── style1.css           # Styling and animations
├── style.css            # (Empty - legacy)
├── index.html           # (Empty - legacy)
├── TMDB_api_Key.txt     # API configuration
├── images/              # Streaming platform logos
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API calls

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ANPANMAN1011/NYC-hackathon-R2.git
cd NYC-hackathon-R2
```

2. Open in your browser:
```bash
# Simply open the file in your browser
open index1.html
# Or serve it locally with a simple HTTP server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 💡 How It Works

1. **Start Screen**: Click "Find My Movie" to begin the quiz or "Surprise Me" for instant recommendation
2. **Preference Questions**: Navigate through 5 question screens to customize your search:
   - Streaming platforms (Question 1)
   - Movie genres (Question 2)
   - Available time (Question 3)
   - Popularity preference (Question 4)
   - IMDb rating minimum (Question 5)
3. **Results**: Get a matched movie recommendation with full details
4. **Watch**: Click the watch link to stream the movie
5. **Start Over**: Begin again with different preferences

## 🔧 API Integration

The application uses **TMDB API v3** to fetch movie data based on user preferences. The API key is configured in `TMDB_api_Key.txt` and used in `main.js`.

### API Features Used:
- `discover/movie` endpoint for filtering by platforms, genres, runtime, and ratings
- `watch_providers` for streaming availability
- `sort_by` parameter for popularity/rating sorting
- Movie details including title, overview, and poster artwork

## 🎨 Design Highlights

- **Glassmorphism**: Semi-transparent card backgrounds with blur effects
- **Animated Blobs**: Dynamic gradient blob animations in the background
- **Smooth Transitions**: Screen fade and scale animations
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Clear labels and intuitive navigation

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Known Issues & Future Improvements

- API error handling for network failures
- Better error messages for no results
- User preference history/favorites
- Movie ratings and reviews integration
- Share recommendations feature
- Dark/Light theme toggle

## 👥 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is open source and available under the MIT License.

## 🎬 Credits

- **TMDB API**: For comprehensive movie database
- **Font Awesome**: For icons (if used)
- **NYC Hackathon R2**: Built for the NYC Hackathon Round 2

## 📧 Contact

For questions or feedback, please reach out through the GitHub repository issues.

---

**Happy movie watching! 🍿**
