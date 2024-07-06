# Swiggy App UI Clone

This is a clone of the popular food delivery app, Swiggy, built using React and Tailwind CSS. The app's UI is designed to mimic the original Swiggy app, with a focus on responsiveness and customizability.

## Features
- Responsive design using Tailwind CSS
- Customizable UI components using React
- Clone of the Swiggy app's UI, including:
  - Home screen with restaurant listings
  - Restaurant details page
  - Menu page with food items
 
- Integrated with a custom API (located in the `Swiggy_api` folder) for data fetching and manipulation

## Technologies Used
- Frontend: React (v17.0.2)
- Styling: Tailwind CSS (v3.0.2)
- Build Tool: Webpack (v5.51.1)
- Package Manager: npm (v8.1.2)
- API: Custom API built with Node.js and Express.js (located in the `api` folder)

## Getting Started

### Installation

1. Clone the repository: `git clone https://github.com/your-username/swiggy-app-clone.git`
2. Install dependencies: `npm install`
3. Start the API server: `cd Swiggy_api && nodemon index` (this will start the API server on `http://localhost:5000`)
4. Start the development server: `cd .. && npm start` (this will start the React development server on `http://localhost:3000`)

### Development

The app uses a modular architecture, with each component in its own file.

Tailwind CSS is used for styling, with a custom configuration file (`tailwind.config.js`).

React components are written in JSX, with a focus on reusability and modularity.

The custom API is built using Node.js and Express.js, and is located in the `api` folder.



## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Acknowledgments

- Swiggy: for providing the inspiration for this project
- Tailwind CSS: for making styling a breeze
- React: for making building dynamic UIs a joy
- Node.js and Express.js: for providing a robust API framework
