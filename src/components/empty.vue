<template>
    <br />
    <div class="pt-3">
      <div
        class="text-center"
        style="display: flex; justify-content: center; align-items: center"
      >
        <img src="@/assets/svg/vec2-empty.svg" alt="No events illustration" />
      </div>
      <br />
      <div class="empty-state text-center">No events are currently available</div>
    </div>
  </template>
  
  <script>
  export default {
  };
  </script>
  
  <style>
  .empty-state {
    color: #667085;
    text-overflow: ellipsis;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
  }
  </style>