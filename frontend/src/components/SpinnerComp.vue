<template>
    <div class="spinner">
      <div class="spinner-container">
        <div class="spinner-circle1"></div>
        <div class="spinner-circle2"></div>
        <div class="spinner-circle3"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 18px;
    color: #333;
    margin: auto !important;
  }
  
  .spinner-container {
    display: flex;
    align-items: center;
  }
  
  .spinner-circle1,
  .spinner-circle2,
  .spinner-circle3 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #333;
    margin: 0 5px;
    animation: spin 1s linear infinite;
  }
  
  .spinner-circle2 {
    animation-delay: 0.2s;
  }
  
  .spinner-circle3 {
    animation-delay: 0.4s;
  }
  
  @keyframes spin {
    0% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.7;
    }
  }
  </style>
  
  <script>
  export default {
    name: "Spinner",
  };
  </script>