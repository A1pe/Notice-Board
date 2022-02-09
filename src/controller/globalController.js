export let notices = [
    {
        title: "notice #1",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id:1,
    },
    {
        title: "notice #2",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id:2,    },
    {
        title: "notice #3",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id:3,},
];
export const home = (req, res) => {
    res.render("home", { pageTitle: "Home", notices });
}//res.send("Home");
export const list = (req, res) => {
    res.render("list",{pageTitle: "List",notices})
}