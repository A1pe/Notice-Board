import { notices } from "../controller/globalController";

export const viewHome = (req, res) => {
    const { id } = req.params;
    const notice = notices[id - 1]
    console.log("Show notice", id)
    return res.render("view", { pageTitle: `view ${notice.title}`, notice });
}    

export const getEdit = (req, res) =>{
    const { id } = req.params;
    const notice = notices[id - 1]
    res.render("edit", { pageTitle: `Editting ${notice.title}`, notice });
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    notices[id - 1].title = title;
    return res.redirect(`/view/${id}`)
}

export const viewDelete = (req, res) => res.send("View Delete")
export const getReg = (req, res) =>{
    return res.render("Reg the notice");
}
export const postReg = (req, res) => {
    return res.redirect("/");
}