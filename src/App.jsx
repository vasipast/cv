import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Project from "../src/components/Project";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-white p-8 shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 bg-gray-800 p-6 rounded-lg shadow-md">
          <img
            src="../public/img/Profile.jpg"
            alt="Profile Photo"
            className="w-40 h-40 rounded-lg mx-auto md:mx-0"
            style={{ objectFit: "cover" }}
          />
          <div className="flex flex-col justify-center md:pl-6 text-center md:text-left">
            <h2 className="text-3xl font-bold uppercase text-white">
              Vasilisa Pastushenko
            </h2>
            <span className="bg-white bg-opacity-60 rounded-lg text-lg mb-2 uppercase px-4 py-2 text-grey-400 font-bold ">
              Front-end Developer & Desginer
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="px-5 py-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2 flex justify-between items-center uppercase">
                Work Experience
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <p className="text-gray-700 text-left">
                Self-employed graphic designer and artist and aspiring front-end
                developer from Minsk, Belarus. Constantly developing my skills
                and striving for excellence. Developed a website for a local
                small business. Now I’m actively engaged in the creation and
                design of advertising content, writing a coursework landing page
                with Tilda.
              </p>
            </div>

            <div className="px-5 py-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2 flex justify-between items-center uppercase">
                Skills
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Front-End:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 ">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind</li>
                  </ul>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">
                    Back-End:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Python</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Design:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Figma</li>
                    <li>Photoshop</li>
                    <li>Canva</li>
                    <li>CorelDRAW</li>
                  </ul>
                  <h3 className="text-lg font-bold text-gray-800 mt-4">
                    Videomaking:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Adobe</li>
                    <li>CapCut</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-5 py-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2 flex justify-between items-center uppercase">
                Education
                <div className="flex-grow h-0.5 ml-4 bg-gray-300 "></div>
              </h2>
              <div>
                <h3 className="text-lg mb-2 text-gray-700 text-left">
                  <span className="font-bold">
                    Belarussian State University
                  </span>
                  <br />
                  Faculty of Mechanics and Mathematics
                  <br />
                  2023 - now
                </h3>
              </div>
            </div>

            <div className="px-5 py-4 bg-gray-100 rounded-lg shadow-md">
              <h2 className="text-lg font-bold mb-2 flex justify-between items-center uppercase">
                Languages
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div>
                <ul className="list-disc list-inside text-gray-700 text-left">
                  <li>Russian - native</li>
                  <li>English - B2</li>
                  <li>Spanish - A1</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2 flex justify-between items-center uppercase">
                Social Media & Contacts
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <ul className="list-disc text-lg list-inside px-5 text-left">
                <li>
                  <span>Telegram: </span>
                  <a
                    href="https://t.me/vasipast"
                    className="text-blue-800 hover:text-blue-600 hover:underline transition-colors"
                  >
                    t.me/vasipast
                  </a>
                </li>
                <li>
                  <span>GitHub: </span>
                  <a
                    href="https://github.com/vasipast"
                    className="text-blue-800 hover:text-blue-600 hover:underline transition-colors"
                  >
                    vasipast
                  </a>
                </li>
                <li>
                  <span>Email: </span>
                  <a
                    href="mailto:pastushenkovasilisa@gmail.com"
                    className="text-blue-800 hover:text-blue-600 hover:underline transition-colors"
                  >
                    pastushenkovasilisa@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-bold mb-2 flex justify-between items-center uppercase">
                Projects
                <div className="flex-grow h-0.5 ml-4 bg-gray-300"></div>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 rounded-lg">
                  <a
                    href="https://github.com/vasipast/todo-list"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../public/gif/TodoList.gif"
                      alt="TodoList"
                      className="w-full h-52 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">TodoList</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      The multi-filtering TodoList application is designed to
                      create, edit, search and delete tasks. Made and designed
                      for time management and keeping all your current tasks in
                      memory.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>React</span>
                    </div>
                  </a>
                </div>
                <div className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 rounded-lg">
                  <a
                    href="https://github.com/vasipast/lamoda"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../public/gif/Lamoda.gif"
                      alt="Lamoda"
                      className="w-full h-52 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">Lamoda</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      This online shop is a contemporary web application aimed
                      at delivering a smooth shopping experience to users. It
                      features various filtering and sorting options and allows
                      for easy addition of new filters or sorting criteria.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>HTML</span>
                      <span>Module CSS</span>
                      <span>React</span>
                    </div>
                  </a>
                </div>
                <div className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 rounded-lg">
                  <a
                    href="https://github.com/vasipast/api-spa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../public/gif/SPA.gif"
                      alt="SPA"
                      className="w-full h-52 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">SPA</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      This project highlights a Single Page Application built
                      with React Router. Its primary goal is to ensure a
                      responsive user experience by facilitating smooth
                      navigation between different components without requiring
                      full page reloads.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>HTML</span>
                      <span>Module CSS</span>
                      <span>React</span>
                    </div>
                  </a>
                </div>
                <div className="bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 rounded-lg">
                  <a
                    href="https://github.com/vasipast/minesweeper"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="../public/gif/Minesweeper.gif"
                      alt="Minesweeper"
                      className="w-full h-52 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-lg font-bold mb-2">Minesweeper</h3>
                    <p className="text-sm text-gray-700 mb-4">
                      It's a simple mini game aka timekiller. The goal is to
                      clear a grid of squares without uncovering any mines.
                      Players click on squares to uncover them. If a square
                      contains a mine, the game ends. If it does not, it will
                      either display a number or be blank.
                    </p>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JavaScript</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
