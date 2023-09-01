import React from "react";

function useLocalStorage(itemName, initialValue) {
  // La funcion que se ejecutara cuando el valor de item cambie
   // El estado inicial del custom hook sera initialValue
  const [item, setItem] = React.useState(initialValue);
  // Estados de carga y error...
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // getItem del localeStorage
      const localeStorageItem = localStorage.getItem(itemName);
    
      let parsedItem;

      if (!localeStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localeStorageItem);
        setItem(parsedItem);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      }
    }, 2000);
    }, []);

  //setItem del localStorage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {item, 
          saveItem,
          loading,
          error,
          }
}

export { useLocalStorage };

// const defaultTodos = [
//   {text: "Escape", completed: true},
//   {text: "Salida", completed: true},
//   {text: "None", completed: false},
//   {text: "Alv nóe", completed: true},
//   {text: "Random mames", completed: false},
//   {text: "Madaroid", completed: false},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));