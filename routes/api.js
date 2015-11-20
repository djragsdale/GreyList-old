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
            "id": 2,
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
            "id": 3,
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

exports.templates = function (req, res) {
    var templates = [];
    data.templates.forEach(function (template, i) {
        templates.push({
            id: template.id,
            title: template.title,
            lastupdated: template.lastupdated,
            items: template.items
        });
    });
    res.json({
        templates: templates
    });
};

exports.template = function (req, res) {
    var id = req.params.id;
    if (id >= 0 && id < data.templates.length) {
        res.json({
            template: data.templates[id]
        });
    } else {
        res.json(false);
    }
};

exports.lists = function (req, res) {
    var lists = [];
    data.lists.forEach(function (list, i) {
        var intComplete = 0;
        list.items.forEach(function (item, i) {
            if (item.checked) {
                intComplete++;
            }
        });
        lists.push({
            id: list.id,
            title: list.title,
            lastupdated: list.lastupdated,
            items: list.items,
            completed: intComplete
        });
    });
    var templates = [];
    data.templates.forEach(function (template, i) {
        templates.push({
            id: template.id,
            title: template.title,
            lastupdated: template.lastupdated,
            items: template.items
        });
    });
    res.json({
        lists: lists,
        templates: templates
    });
};

exports.list = function (req, res) {
    var templates = [];
    data.templates.forEach(function (template, i) {
        templates.push({
            id: template.id,
            title: template.title,
            lastupdated: template.lastupdated,
            items: template.items
        });
    });
    var id = req.params.id;
    if (id >= 0 && id < data.lists.length) {
        res.json({
            list: data.lists[id],
            templates: templates
        });
    } else {
        res.json(false);
    }
};

// POST
exports.addList = function (req, res) {
    data.lists.push(req.body);
    res.json(req.body);
};

// POST
exports.addListFromTemplate = function (req, res) {
    var id = req.body.template;
    var newList = {
        "id": 9, // TODO: get the next value
        "title": "No name",
        "lastupdated": "current time",
        "items": []
    };
    data.templates[id].items.forEach(function (item, i) {
        newList.items.push({
            id: i,
            seqno: i,
            checked: false,
            lastupdated: "current time",
            text: item.text
        });
    });
    data.lists.push(newList);
    res.json(newList);
};

// PUT
exports.editList = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.lists.length) {
        data.lists[id] = req.body;
        res.json(true);
    } else {
        res.json(false);
    }
};

// DELETE
exports.deleteList = function (req, res) {
    var id = req.params.id;

    if (id >= 0 && id < data.lists.length) {
        data.lists.splice(id, 1);
        res.json(true);
    } else {
        res.json(false);
    }
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