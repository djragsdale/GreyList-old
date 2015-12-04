// initialize our faux database
var data = {
    "posts": [
        {
            "title": "Lorem ipsum",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "title": "Sed egestas",
            "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
        }
    ],
    "lists": [
        {
            "id": 61,
            "title": "Monday 1",
            "lastupdated": "11/19/2015 12:26 AM",
            "items": [
                {
                    "id": 1,
                    "seqno": 1,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 1"
                },
                {
                    "id": 2,
                    "seqno": 2,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 2"
                },
                {
                    "id": 3,
                    "seqno": 3,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 3"
                },
                {
                    "id": 4,
                    "seqno": 4,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 4"
                }
            ]
        },
        {
            "id": 12,
            "title": "Monday 2",
            "lastupdated": "11/19/2015 12:26 AM",
            "items": [
                {
                    "id": 1,
                    "seqno": 1,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 1"
                },
                {
                    "id": 3,
                    "seqno": 2,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 2"
                },
                {
                    "id": 4,
                    "seqno": 3,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 3"
                },
                {
                    "id": 2,
                    "seqno": 4,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 4"
                }
            ]
        },
        {
            "id": 23,
            "title": "Monday 3",
            "lastupdated": "11/19/2015 12:26 AM",
            "items": [
                {
                    "id": 1,
                    "seqno": 1,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 1"
                },
                {
                    "id": 2,
                    "seqno": 2,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 2"
                },
                {
                    "id": 3,
                    "seqno": 3,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 3"
                },
                {
                    "id": 4,
                    "seqno": 4,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 4"
                }
            ]
        }
    ],
    "templates": [
        {
            "id": 31,
            "title": "Monday",
            "lastupdated": "11/19/2015 12:20 AM",
            "items": [
                {
                    "text": "Item 1"
                },
                {
                    "text": "Item 2"
                },
                {
                    "text": "Item 3"
                },
                {
                    "text": "Item 4"
                }
            ]
        }
    ]
};

exports.data = data;
