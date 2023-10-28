import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Achievement = () => {
  return (
    <div id="achievements" className="bg-gradient-to-t from-blue-600 to-blue-400 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl text-white font-semibold mb-4">Achievements</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
        <li className="flex items-start space-x-2">
          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <p>20,000+ Users & Downloads on my Android App on Google Play Store</p>
        </li>
        <br />
        <li className="flex items-start space-x-2">
          <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <p>All India Rank 8 In IEEEXtreme 16.0 Coding Competition over 6373 teams.</p>
        </li>

        {/* Add more list items for other achievements */}
      </ul>
    </div>
  );
};

export default Achievement;
