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
            "id": 1,
            "title": "Monday 1",
            "lastupdated": "11/19/2015 12:26 AM",
            "items": [
                {
                    "seqno": 1,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 1"
                },
                {
                    "seqno": 2,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 2"
                },
                {
                    "seqno": 3,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 3"
                },
                {
                    "seqno": 4,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 4"
                }
            ]
        },
        {
            "id": 2,
            "title": "Monday 2",
            "lastupdated": "11/19/2015 12:26 AM",
            "items": [
                {
                    "seqno": 1,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 1"
                },
                {
                    "seqno": 2,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 2"
                },
                {
                    "seqno": 3,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 3"
                },
                {
                    "seqno": 4,
                    "checked": false,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 4"
                }
            ]
        },
        {
            "id": 3,
            "title": "Monday 3",
            "lastupdated": "11/19/2015 12:26 AM",
            "items": [
                {
                    "seqno": 1,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 1"
                },
                {
                    "seqno": 2,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 2"
                },
                {
                    "seqno": 3,
                    "checked": true,
                    "updated": "11/19/2015 12:26 AM",
                    "text": "Item 3"
                },
                {
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
            "id": 1,
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

// GET

exports.lists = function (req, res) {
    var lists = [];
    data.lists.forEach(function (list, i) {
        lists.push({
            id: i,
            title: list.title,
            lastupdated: list.lastupdated,
            items: list.items
        });
    });
};

exports.posts = function (req, res) {
    var posts = [];
    data.posts.forEach(function (post, i) {
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    });
    res.json({
        posts: posts
    });
};

exports.post = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.posts.length) {
        res.json({
            post: data.posts[id]
        });
    } else {
        res.json(false);
    }
};

// POST
exports.addPost = function (req, res) {
    data.posts.push(req.body);
    res.json(req.body);
};

// PUT
exports.editPost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deletePost = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.posts.length) {
        data.posts.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
};