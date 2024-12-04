export const subs = [
    {
        id: 'CATEGORIES',
        title: 'Categories - Manage',
        navigation: 'categories',
        navLabel: 'Categories',
        navPresent:true,
        active:false,
        entries:[
            {
                id:0,
                name:'Others',
                deletable:false,
            },
            {
                id:1,
                name:'Work',
                deletable:true,
            },
            {
                id:2,
                name:'Studies',
                deletable:true,
            }]
    },
    {
        id: 'PROJECTS',
        title: 'Projects - Manage',
        navigation: 'projects',
        navLabel: 'Projects',
        navPresent:true,
        active:false,
        entries:[
            {
                id:0,
                name:'Others',
                deletable:false,
            },
            {
                id:1,
                name:'Google',
                deletable:true,
            },
            {
                id:2,
                name:'AWS',
                deletable:true,
            }]
    },
];