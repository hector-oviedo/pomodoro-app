export const tasksSample = [
    // Tasks for today
    {
        id: 0,
        name: "Today Task 1 (C/Work P/Others)",
        active: false,
        dateCreation: new Date(),
        dateCompletion: null,
        totalTime: 1200,
        subs:[
            {subId:'CATEGORIES', entryId:1},
            {subId:'PROJECTS', entryId:0},
        ],
        sessions: [
            { id:1, start:null, end:null, pauses:0, totalTime: 0, },
            { id:2, start:null, end:null, pauses:0, totalTime: 0, },
            { id:3, start:null, end:null, pauses:0, totalTime: 0, },
            { id:4, start:null, end:null, pauses:0, totalTime: 0, },
        ],
    },
    {
        id: 1,
        name: "Today Task 2 (C/Others P/Others)",
        active: false,
        dateCreation: new Date(),
        dateCompletion: null,
        totalTime: 1500,
        subs:[
            {subId:'CATEGORIES', entryId:0},
            {subId:'PROJECTS', entryId:0},
        ],
        sessions: [
            { id:1, start:null, end:null, pauses:0, totalTime: 3200, },
            { id:2, start:null, end:null, pauses:0, totalTime: 1200, },
            { id:3, start:null, end:null, pauses:0, totalTime: 0, },
            { id:4, start:null, end:null, pauses:0, totalTime: 0, },
        ],
    },
    // Tasks for yesterday
    {
        id: 2,
        name: "Yesterday Task 1 (C/Studies P/Google)",
        active: false,
        dateCreation: new Date(Date.now() - 24 * 60 * 60 * 1000),
        dateCompletion: null,
        totalTime: 1600,
        subs:[
            {subId:'CATEGORIES', entryId:2},
            {subId:'PROJECTS', entryId:1},
        ],
        sessions: [
            { id:1, start:null, end:null, pauses:0, totalTime: 36000, },
            { id:2, start:null, end:null, pauses:0, totalTime: 36000, },
            { id:3, start:null, end:null, pauses:0, totalTime: 35020, },
            { id:4, start:null, end:null, pauses:0, totalTime: 0, },
        ],
    },
    {
        id: 3,
        name: "Yesterday Task 2 (C/Others P/AWS)",
        active: false,
        dateCreation: new Date(Date.now() - 24 * 60 * 60 * 1000),
        dateCompletion: null,
        totalTime: 1800,
        subs:[
            {subId:'CATEGORIES', entryId:0},
            {subId:'PROJECTS', entryId:2},
        ],
        sessions: [
            { id:1, start:null, end:null, pauses:0, totalTime: 3600, },
            { id:2, start:null, end:null, pauses:0, totalTime: 3600, },
            { id:3, start:null, end:null, pauses:0, totalTime: 3520, },
            { id:4, start:null, end:null, pauses:0, totalTime: 250, },
        ],
    },
    {
        id: 4,
        name: "Yesterday Task 3 (C/Others P/Others)",
        active: false,
        dateCreation: new Date(Date.now() - 24 * 60 * 60 * 1000),
        dateCompletion: null,
        totalTime: 2400,
        subs:[
            {subId:'CATEGORIES', entryId:0},
            {subId:'PROJECTS', entryId:0},
        ],
        sessions: [
            { id:1, start:null, end:null, pauses:0, totalTime: 0, },
            { id:2, start:null, end:null, pauses:0, totalTime: 0, },
            { id:3, start:null, end:null, pauses:0, totalTime: 0, },
            { id:4, start:null, end:null, pauses:0, totalTime: 0, },
        ],
    },
    // Task for an arbitrary past date
    {
        id: 5,
        name: "Past Task (C/Work P/AWS)",
        active: false,
        dateCreation: new Date('2024-11-20'),
        dateCompletion: null,
        totalTime: 3600,
        subs:[
            {subId:'CATEGORIES', entryId:1},
            {subId:'PROJECTS', entryId:2},
        ],
        sessions: [
            { id:1, start:null, end:null, pauses:0, totalTime: 0, },
            { id:2, start:null, end:null, pauses:0, totalTime: 0, },
            { id:3, start:null, end:null, pauses:0, totalTime: 0, },
            { id:4, start:null, end:null, pauses:0, totalTime: 0, },
        ],
    }
];