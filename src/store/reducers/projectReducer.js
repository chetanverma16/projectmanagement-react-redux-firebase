const initState = {
projects:[
        {id:1,title:'help me find peach',content:'Something Amazing'},
         { id: 2, title: 'help me find peach', content: 'Something Amazing' },
         { id: 3, title: 'help me find peach', content: 'Something Amazing' },
]

}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Project Creaeted',action.project)
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create_project_error',action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;