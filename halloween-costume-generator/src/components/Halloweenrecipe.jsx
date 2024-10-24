import React, { useState, useEffect } from 'react';
import Zurueck from './Zurueck';

function HalloweenRecipe() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?query=halloween&apiKey=97a0efa6eb4745aeb6f47912ff0b8d47`
        );
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Daten');
        }
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error('Fehler:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h2>Halloween-Rezepte</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <a 
                href={`https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, '-').toLowerCase()}-${recipe.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={recipe.image} alt={recipe.title} style={{ width: '200px' }} /> 
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Lade Rezepte...</p>
      )} 
   <Zurueck />  </div>
  );
}

export default HalloweenRecipe;
