export const increment = nr => {
  return {
    type: 'INCREMENT',
    payload: nr
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};
