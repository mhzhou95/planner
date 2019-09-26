const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blahh blahhhh vlahhh' },
    { id: '2', title: 'find all the coins', content: 'blahh blahhhh vlahhh' },
    { id: '3', title: 'itssa me a mario', content: 'blahh blahhhh vlahhh' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return state;
    default:
      return state;
  }
}

export default projectReducer;