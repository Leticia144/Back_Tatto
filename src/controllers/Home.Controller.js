class HomeController {
    index(req, res) {
        res.status(200).json({
            message: "hello world",
        })
    }
}
export default new HomeController();